import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const PIN_ICON = L.divIcon({
  className: '',
  html: `
    <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0Z" fill="#1B4FC4"/>
      <circle cx="17" cy="17" r="7" fill="#ffffff"/>
    </svg>`,
  iconSize: [34, 44],
  iconAnchor: [17, 44],
})

export default function ServiceAreaMap({ cities, height = 450 }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const navigate = useNavigate()

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

    const markers = cities.map((city) => {
      const marker = L.marker([city.lat, city.lng], { icon: PIN_ICON })
      marker.bindTooltip(city.name, { direction: 'top', offset: [0, -40] })
      marker.on('click', () => navigate(`/area/${city.slug}`))
      marker.addTo(map)
      return marker
    })

    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.5))

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize()
    })
    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
      map.remove()
      mapRef.current = null
    }
  }, [cities, navigate])

  return (
    <div
      ref={containerRef}
      className="w-full lg:flex-1 min-w-0 rounded-2xl overflow-hidden shadow-lg z-0"
      style={{ height }}
    />
  )
}
