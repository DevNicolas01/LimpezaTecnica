import { Building2, Droplets, Layers, Sparkles } from 'lucide-react'

export const services = [
  {
    slug: 'limpeza-fachadas',
    icon: Building2,
    title: 'Limpeza Pós-Obra',
    shortDescription:
      'Remoção de resíduos de construção, respingos de tinta e manchas em todas as superfícies.',
    description: [
      'A limpeza pós-obra é a etapa final que garante a entrega de um imóvel realmente pronto para uso. A Limpeza Técnica LTD remove respingos de tinta, manchas de cimento, poeira de reboco, resíduos de gesso e sobras de material de acabamento em todas as superfícies — pisos, paredes, bancadas, esquadrias e áreas comuns.',
      'Com anos de experiência atendendo construtoras e incorporadoras no Rio Grande do Sul, utilizamos metodologia profissional e produtos especializados para cada tipo de material, evitando danos a revestimentos, metais e acabamentos delicados.',
    ],
    benefits: [
      'Remoção de respingos de tinta e resíduos de acabamento',
      'Limpeza de vidros, esquadrias e superfícies envidraçadas',
      'Equipe com EPI completo e produtos certificados',
      'Atendimento a chamados emergenciais em todo o RS',
    ],
    imageLabel: '[ Foto: Limpeza Pós-Obra ]',
  },
  {
    slug: 'lavagem-coberturas',
    icon: Layers,
    title: 'Limpeza de Coberturas',
    shortDescription:
      'Limpeza técnica de telhados e coberturas após a obra, prevenindo infiltrações e resíduos.',
    description: [
      'Telhados e coberturas recém-instalados acumulam resíduos de argamassa, poeira de acabamento e detritos de obra que comprometem tanto a estética quanto a impermeabilização da estrutura.',
      'A Limpeza Técnica LTD remove esse acúmulo sem danificar telhas, calhas ou rufos, deixando a cobertura pronta para a vistoria final da construtora.',
    ],
    benefits: [
      'Remoção de resíduos de obra em telhas, calhas e rufos',
      'Produtos adequados a cada tipo de cobertura',
      'Inspeção de pontos de infiltração',
      'Prazo alinhado ao cronograma da construtora',
    ],
    imageLabel: '[ Foto: Limpeza de Coberturas ]',
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
  },
  {
    slug: 'limpeza-vidros',
    icon: Sparkles,
    title: 'Limpeza de Vidros',
    shortDescription: 'Vidros, janelas e caixilhos impecáveis, sem marcas de cimento ou selante.',
    description: [
      'Vidros e esquadrias exigem cuidado técnico redobrado após a obra: respingos de cimento, tinta e selante costumam grudar na superfície e, se removidos com produtos inadequados, podem riscar ou manchar permanentemente o material.',
      'A Limpeza Técnica LTD utiliza técnicas e produtos específicos para remover esses resíduos sem danificar vidros, caixilhos de alumínio ou esquadrias de PVC.',
    ],
    benefits: [
      'Remoção de cimento, selante e tinta sem riscar o vidro',
      'Técnica adequada para caixilhos de alumínio e PVC',
      'Acabamento sem manchas e sem marcas de secagem',
      'Atendimento a construtoras e incorporadoras em todo o RS',
    ],
    imageLabel: '[ Foto: Limpeza de Vidros ]',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
