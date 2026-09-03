import { Building2, Droplets, Layers, Home } from 'lucide-react'
import cardEnceradeira from '../assets/Cards/Enceradeira.jpg'
import cardCobertura from '../assets/Cards/Cobertura.jpg'
import cardHidrolavagem from '../assets/Cards/hidrolavagem.jpg'
import cardImobiliaria from '../assets/imobilaria.jpg'

export const services = [
  {
    slug: 'limpeza-fachadas',
    icon: Building2,
    title: 'Limpeza Pós-Obra',
    shortDescription:
      'Remoção de resíduos de construção, respingos de tinta e manchas em todas as superfícies.',
    description: [
      'A limpeza pós-obra é a etapa final que garante a entrega de um imóvel realmente pronto para uso. A Limpeza Técnica remove respingos de tinta, manchas de cimento, poeira de reboco, resíduos de gesso e sobras de material de acabamento em todas as superfícies — pisos, paredes, bancadas, esquadrias e áreas comuns.',
      'Com anos de experiência atendendo construtoras e incorporadoras no Rio Grande do Sul, utilizamos metodologia profissional e produtos especializados para cada tipo de material, evitando danos a revestimentos, metais e acabamentos delicados.',
    ],
    benefits: [
      'Remoção de respingos de tinta e resíduos de acabamento',
      'Limpeza de vidros, esquadrias e superfícies envidraçadas',
      'Equipe com EPI completo e produtos certificados',
      'Atendimento a chamados emergenciais em todo o RS',
    ],
    imageLabel: '[ Foto: Limpeza Pós-Obra ]',
    image: cardEnceradeira,
  },
  {
    slug: 'servicos-imobiliaria',
    icon: Home,
    title: 'Serviços para Imobiliárias',
    shortDescription:
      'Limpeza técnica para imobiliárias: vitrines, escritórios e imóveis prontos para visita.',
    description: [
      'Imobiliárias precisam de ambientes impecáveis para causar boa impressão — da vitrine de vidro com os imóveis em destaque até as unidades prontas para receber clientes em visita.',
      'A Limpeza Técnica atende imobiliárias com limpeza de vitrines e fachadas de escritório, além da preparação de imóveis residenciais e comerciais para venda, locação ou visitação, garantindo um ambiente limpo e atrativo em cada apresentação.',
    ],
    benefits: [
      'Limpeza de vitrines e fachadas de escritório',
      'Preparação de imóveis para visitas e fotos',
      'Atendimento a imóveis residenciais e comerciais',
      'Agendamento flexível conforme a agenda de visitas',
    ],
    imageLabel: '[ Foto: Serviços para Imobiliárias ]',
    image: cardImobiliaria,
  },
  {
    slug: 'lavagem-coberturas',
    icon: Layers,
    title: 'Limpeza de Coberturas',
    shortDescription:
      'Limpeza técnica de telhados e coberturas após a obra, prevenindo infiltrações e resíduos.',
    description: [
      'Telhados e coberturas recém-instalados acumulam resíduos de argamassa, poeira de acabamento e detritos de obra que comprometem tanto a estética quanto a impermeabilização da estrutura.',
      'A Limpeza Técnica remove esse acúmulo sem danificar telhas, calhas ou rufos, deixando a cobertura pronta para a vistoria final da construtora.',
    ],
    benefits: [
      'Remoção de resíduos de obra em telhas, calhas e rufos',
      'Produtos adequados a cada tipo de cobertura',
      'Inspeção de pontos de infiltração',
      'Prazo alinhado ao cronograma da construtora',
    ],
    imageLabel: '[ Foto: Limpeza de Coberturas ]',
    image: cardCobertura,
  },
  {
    slug: 'hidrolavagem',
    icon: Droplets,
    title: 'Hidrolavagem de Fachadas',
    shortDescription:
      'Hidrojateamento de alta pressão para remover resíduos de obra em fachadas e áreas externas.',
    description: [
      'A hidrolavagem é a solução ideal para remover sujidade pesada, respingos de tinta, argamassa e resíduos incrustados em fachadas, calçadas e áreas externas após a obra.',
      'Utilizamos equipamentos de alta pressão com vazão calibrada para cada tipo de superfície, evitando danos e garantindo resultado uniforme em toda a fachada.',
    ],
    benefits: [
      'Alta pressão calibrada por tipo de revestimento',
      'Remoção de tinta, argamassa e resíduos incrustados',
      'Recolhimento e descarte responsável da água residual',
      'Horários flexíveis para não impactar a obra',
    ],
    imageLabel: '[ Foto: Hidrolavagem de Fachadas ]',
    image: cardHidrolavagem,
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
