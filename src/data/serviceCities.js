export const slugifyCity = (name) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')

const CITIES = [
  { name: 'Porto Alegre', lat: -30.0346, lng: -51.2177 },
  { name: 'Caxias do Sul', lat: -29.1634, lng: -51.1797 },
  { name: 'Novo Hamburgo', lat: -29.6783, lng: -51.1306 },
  { name: 'São Leopoldo', lat: -29.7604, lng: -51.1478 },
]

export const serviceCities = CITIES.map((city) => ({ ...city, slug: slugifyCity(city.name) }))

export const getServiceCityBySlug = (slug) => serviceCities.find((city) => city.slug === slug)
