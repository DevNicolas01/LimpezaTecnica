// TODO: Substituir pelo telefone real de contato do cliente antes de publicar o site.
export const CONTACT = {
  phone: '(XX) XXXXX-XXXX',
  whatsapp: '55XXXXXXXXXXX',
  email: 'contato@limpezatecnica.com.br',
  // TODO: Substituir pelo endereço real da Limpeza Técnica LTD.
  address: 'Rio Grande do Sul, Brasil',
  // TODO: Substituir pelo Instagram real do cliente.
  instagram: 'https://instagram.com/limpezatecnica',
  hours: {
    weekdays: '8h00 - 17h00',
    sunday: 'Fechado',
  },
}

export const SERVICE_CITIES = ['Porto Alegre', 'Caxias do Sul', 'Novo Hamburgo', 'São Leopoldo']

// Mapa centralizado no Rio Grande do Sul, zoom 7.
// OBS: o formato de embed sem chave de API do Google sempre inclui um marcador central
// (o formato "sem marcador" via URL @lat,lng é bloqueado por X-Frame-Options em iframe).
// Pinos personalizados por cidade exigiriam a Maps JavaScript API com chave/billing do cliente.
export const MAPS_EMBED_SRC = 'https://www.google.com/maps?q=-29.75,-53.15&z=7&output=embed'

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}`
