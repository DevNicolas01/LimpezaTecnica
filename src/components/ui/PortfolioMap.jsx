import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import { MapPin, X } from 'lucide-react'

function createPinIcon(color) {
  return L.divIcon({
    className: '',
    html: `
      <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0Z" fill="${color}"/>
        <circle cx="17" cy="17" r="7" fill="#ffffff"/>
      </svg>`,
    iconSize: [34, 44],
    iconAnchor: [17, 44],
  })
}

// Vários pinos em uma mesma cidade (ex.: Bento Gonçalves) ficam sobrepostos
// no zoom geral do RS, tornando os de baixo impossíveis de clicar — por isso
// agrupamos em clusters que se separam (spiderfy) ao clicar/dar zoom.
function createClusterIcon(cluster) {
  const count = cluster.getChildCount()
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width: 38px; height: 38px; border-radius: 9999px;
        background: #1B4FC4; border: 3px solid #ffffff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.35);
        display: flex; align-items: center; justify-content: center;
        color: #ffffff; font-weight: 800; font-size: 14px; font-family: inherit;
      ">${count}</div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  })
}

const PIN_ICON = createPinIcon('#1B4FC4')
const PIN_ICON_ACTIVE = createPinIcon('#E8321A')

export default function PortfolioMap({ pins, height = 560 }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
    })
    mapRef.current = map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    const clusterGroup = L.markerClusterGroup({
      iconCreateFunction: createClusterIcon,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      maxClusterRadius: 50,
    })

    const markers = pins.map((pin) => {
      const marker = L.marker([pin.lat, pin.lng], { icon: PIN_ICON })
      marker.on('click', () => setSelected(pin))
      return marker
    })
    markersRef.current = markers
    clusterGroup.addLayers(markers)
    map.addLayer(clusterGroup)

    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.3))

    // Garante que o mapa recalcule o tamanho do container quando o layout
    // muda (ex.: troca de coluna para linha no breakpoint lg, fontes
    // carregando depois do mount) — sem isso os pinos ficam desalinhados.
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize()
    })
    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
      map.remove()
      mapRef.current = null
      markersRef.current = []
    }
  }, [pins])

  useEffect(() => {
    markersRef.current.forEach((marker, i) => {
      marker.setIcon(pins[i]?.id === selected?.id ? PIN_ICON_ACTIVE : PIN_ICON)
    })
  }, [selected, pins])

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      <div
        ref={containerRef}
        className="w-full lg:flex-1 min-w-0 rounded-2xl overflow-hidden shadow-lg z-0"
        style={{ height }}
      />

      <div
        className="w-full lg:w-[400px] shrink-0 rounded-2xl shadow-lg border border-gray-100 bg-white overflow-hidden flex flex-col"
        style={{ height: selected ? height : Math.min(height, 400) }}
      >
        {selected ? (
          <>
            <div className="relative shrink-0">
              <img
                src={selected.photo}
                alt={selected.client}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy/80 hover:bg-navy text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={selected.logo}
                  alt={selected.client}
                  className="w-12 h-12 object-contain rounded-lg bg-navy p-1.5 shrink-0"
                />
                <div>
                  <p className="font-extrabold text-navy leading-tight">{selected.client}</p>
                  <p className="text-brand text-sm font-bold flex items-center gap-1">
                    <MapPin size={14} />
                    {selected.city} - {selected.state}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{selected.description}</p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-3">
            <MapPin className="text-brand/40" size={40} strokeWidth={1.5} />
            <p className="text-gray-500 text-sm max-w-[220px]">
              Clique em um pino no mapa para ver os detalhes do projeto
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
