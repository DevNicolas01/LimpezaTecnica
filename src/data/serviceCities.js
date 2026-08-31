export const slugifyCity = (name) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')

// Cidades com projetos reais (fotos + descrição) em src/data/portfolioPins.js —
// mantidas em sincronia para que cada cidade clicada mostre a obra que já realizamos por lá.
const CITIES = [
  { name: 'Bento Gonçalves', lat: -29.1717, lng: -51.5194 },
  { name: 'Porto Alegre', lat: -30.0346, lng: -51.2177 },
  { name: 'Novo Hamburgo', lat: -29.6783, lng: -51.1306 },
  { name: 'Farroupilha', lat: -29.2239, lng: -51.3467 },
  { name: 'Carlos Barbosa', lat: -29.2969, lng: -51.5028 },
  { name: 'Garibaldi', lat: -29.2567, lng: -51.5325 },
  { name: 'Veranópolis', lat: -28.9339, lng: -51.5528 },
]

export const serviceCities = CITIES.map((city) => ({ ...city, slug: slugifyCity(city.name) }))

export const getServiceCityBySlug = (slug) => serviceCities.find((city) => city.slug === slug)
