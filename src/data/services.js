import { Building2, ClipboardCheck, Layers, Sparkles } from 'lucide-react'

export const services = [
  {
    slug: 'limpeza-fachadas',
    icon: Building2,
    title: 'Limpeza Pós-Obra',
    shortDescription:
      'Remoção de resíduos de construção, respingos de tinta e manchas em todas as superfícies.',
    description: [
      'A limpeza pós-obra é a etapa final que garante a entrega de um imóvel realmente pronto para uso. A Limpeza Técnica LTD remove respingos de tinta, manchas de cimento, poeira de reboco, resíduos de gesso e sobras de material de acabamento em todas as superfícies — pisos, paredes, bancadas, esquadrias e áreas comuns.',
      'Com 20 anos de experiência atendendo construtoras e incorporadoras no Rio Grande do Sul, utilizamos metodologia profissional e produtos especializados para cada tipo de material, evitando danos a revestimentos, metais e acabamentos delicados.',
      'Atendemos obras residenciais, comerciais e industriais, com equipe treinada, EPI completo e capacidade de atender grandes volumes dentro do prazo definido pela construtora.',
    ],
    benefits: [
      'Remoção de respingos de tinta e resíduos de acabamento',
      'Limpeza de vidros, esquadrias e superfícies envidraçadas',
      'Equipe com EPI completo e produtos certificados',
      'Laudo fotográfico antes e depois disponível',
      'Atendimento a chamados emergenciais em todo o RS',
    ],
    imageLabel: '[ Foto: Limpeza Pós-Obra ]',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    slug: 'limpeza-vidros',
    icon: Sparkles,
    title: 'Limpeza de Vidros e Esquadrias',
    shortDescription:
      'Vidros, janelas e caixilhos impecáveis, sem marcas de cimento ou selante.',
    description: [
      'Vidros e esquadrias exigem cuidado técnico redobrado após a obra: respingos de cimento, tinta e selante costumam grudar na superfície e, se removidos com produtos inadequados, podem riscar ou manchar permanentemente o material.',
      'A Limpeza Técnica LTD utiliza técnicas e produtos específicos para remover esses resíduos sem danificar vidros, caixilhos de alumínio ou esquadrias de PVC, devolvendo a transparência e o acabamento original de cada peça.',
      'Trabalhamos em empreendimentos residenciais e comerciais de todos os portes, com equipe especializada em vidros de grande altura e em áreas de acesso mais delicado.',
    ],
    benefits: [
      'Remoção de cimento, selante e tinta sem riscar o vidro',
      'Técnica adequada para caixilhos de alumínio e PVC',
      'Equipe especializada em vidros de grande altura',
      'Acabamento sem manchas e sem marcas de secagem',
      'Atendimento a construtoras e incorporadoras em todo o RS',
    ],
    imageLabel: '[ Foto: Limpeza de Vidros e Esquadrias ]',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
  },
  {
    slug: 'lavagem-coberturas',
    icon: Layers,
    title: 'Limpeza de Pisos e Revestimentos',
    shortDescription:
      'Remoção de argamassa, rejunte e resíduos de acabamento em pisos e paredes.',
    description: [
      'Pisos e revestimentos recém-instalados acumulam resíduos de argamassa, rejunte, cera de proteção e poeira fina que só um processo técnico de limpeza pós-obra remove por completo, sem arranhar ou desgastar o material.',
      'A Limpeza Técnica LTD utiliza produtos adequados a cada tipo de revestimento — porcelanato, cerâmica, granito, laminado e piso vinílico — garantindo que o acabamento final fique com brilho uniforme e sem manchas.',
      'Atendemos obras residenciais, comerciais e industriais, com equipe treinada para reconhecer o tratamento correto de cada superfície antes de iniciar o serviço.',
    ],
    benefits: [
      'Remoção de argamassa, rejunte e resíduos de acabamento',
      'Produtos adequados a cada tipo de revestimento',
      'Sem riscos ou desgaste no material recém-instalado',
      'Resultado com brilho uniforme em toda a área',
      'Capacidade de atender grandes volumes com prazo garantido',
    ],
    imageLabel: '[ Foto: Limpeza de Pisos e Revestimentos ]',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'hidrolavagem',
    icon: ClipboardCheck,
    title: 'Limpeza para Vistoria e Entrega',
    shortDescription:
      'Preparação completa do imóvel para entrega às construtoras e incorporadoras.',
    description: [
      'A etapa final antes da entrega exige um checklist completo: cada ambiente precisa estar em condições perfeitas para passar pela vistoria do cliente final sem ressalvas.',
      'A Limpeza Técnica LTD prepara o imóvel por completo — pisos, vidros, esquadrias, bancadas, metais e áreas comuns — seguindo um checklist técnico desenvolvido ao longo de 20 anos de atendimento a construtoras e incorporadoras no Rio Grande do Sul.',
      'Garantimos o resultado: caso algum ponto seja reprovado por falha nossa na vistoria, retornamos ao local sem custo adicional para corrigir.',
    ],
    benefits: [
      'Checklist completo de limpeza pós-obra',
      'Garantia de retorno em caso de reprovação',
      'Atendimento a incorporadoras, loteadoras e construtoras',
      'Contratos de manutenção pós-entrega disponíveis',
      'Prazo cumprido conforme cronograma da construtora',
    ],
    imageLabel: '[ Foto: Vistoria e Entrega ]',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
