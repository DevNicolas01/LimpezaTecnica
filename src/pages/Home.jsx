import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import Services from '../components/sections/Services'
import ServiceHighlight from '../components/sections/ServiceHighlight'
import Testimonials from '../components/sections/Testimonials'
import WhyUs from '../components/sections/WhyUs'
import NextSteps from '../components/sections/NextSteps'
import ServiceArea from '../components/sections/ServiceArea'
import { getServiceBySlug } from '../data/services'

export default function Home() {
  const fachadas = getServiceBySlug('limpeza-fachadas')
  const coberturas = getServiceBySlug('lavagem-coberturas')
  const vidros = getServiceBySlug('limpeza-vidros')
  const vistoria = getServiceBySlug('hidrolavagem')

  return (
    <>
      <Hero />
      <Intro />
      <Services />

      <ServiceHighlight
        badge="✦ ESPECIALISTAS EM PÓS-OBRA"
        title="Obra entregue com atraso? Nós resolvemos."
        description="Sabemos que atraso na limpeza pode comprometer a entrega da obra e prejudicar contratos. A Limpeza Técnica LTD garante equipe disponível, prazo cumprido e resultado aprovado em vistoria. Atendemos chamados emergenciais para construtoras e incorporadoras em todo o RS."
        bullets={[
          'Remoção de respingos de tinta e resíduos de acabamento',
          'Limpeza de vidros, esquadrias e superfícies envidraçadas',
          'Equipe com EPI completo e produtos certificados',
          'Laudo fotográfico antes e depois disponível',
        ]}
        imagePosition="right"
        imageLabel="[ Foto: Limpeza Técnica em Ação ]"
        image="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80"
        ctaTo={`/servicos/${fachadas.slug}`}
      />

      <ServiceHighlight
        badge="✦ QUALIDADE COMPROVADA"
        title="20 anos entregando obras limpas no RS"
        description="Engenheiros e arquitetos que já trabalharam conosco sabem: a Limpeza Técnica LTD entrega padrão técnico superior. Removemos até as manchas mais difíceis — cimento, selante, tinta — sem danificar revestimentos, vidros ou esquadrias."
        bullets={[
          'Experiência em obras residenciais, comerciais e industriais',
          'Produtos adequados a cada tipo de revestimento e material',
          'Capacidade de atender grandes volumes com prazo garantido',
          'Referências disponíveis para construtoras parceiras',
        ]}
        imagePosition="left"
        imageLabel="[ Foto: Equipe de Limpeza ]"
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
        ctaTo={`/servicos/${vidros.slug}`}
      />

      <ServiceHighlight
        badge="✦ PRONTOS PARA VISTORIA"
        title="Imóvel aprovado na vistoria ou a gente volta"
        description="Garantimos que o imóvel ficará em condições perfeitas para a vistoria e entrega ao cliente final. Caso algum ponto seja reprovado por falha nossa, voltamos sem custo adicional."
        bullets={[
          'Checklist completo de limpeza pós-obra',
          'Garantia de retorno em caso de reprovação',
          'Atendimento a incorporadoras, loteadoras e construtoras',
          'Contratos de manutenção pós-entrega disponíveis',
        ]}
        imagePosition="right"
        imageLabel="[ Foto: Resultado Pronto para Entrega ]"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        ctaTo={`/servicos/${vistoria.slug}`}
      />

      <WhyUs />
      <Testimonials />
      <NextSteps />
      <ServiceArea />
    </>
  )
}
