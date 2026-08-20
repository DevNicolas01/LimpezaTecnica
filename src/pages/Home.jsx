import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import Services from '../components/sections/Services'
import ServiceHighlight from '../components/sections/ServiceHighlight'
import CTABanner from '../components/sections/CTABanner'
import Testimonials from '../components/sections/Testimonials'
import WhyUs from '../components/sections/WhyUs'
import NextSteps from '../components/sections/NextSteps'
import ServiceArea from '../components/sections/ServiceArea'
import Portfolio from '../components/sections/Portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />

      {/* Destaque Serviço 1 */}
      <ServiceHighlight
        badge="✦ Especialistas Nº1 em Limpeza Pós-Obra"
        title="Prazo cumprido, resultado aprovado em vistoria"
        paragraph="Sabemos que atraso na limpeza pode comprometer a entrega da obra e prejudicar contratos com a construtora — por isso a Limpeza Técnica LTD garante equipe disponível, prazo cumprido e resultado aprovado em vistoria, removendo respingos de tinta, manchas de cimento e resíduos de construção em todas as superfícies do imóvel antes da entrega ao cliente final."
        flip={false}
        offset="translate-x-4 translate-y-4"
        watermarkSide="left"
      />

      <Testimonials />

      {/* Destaque Serviço 2 (espelhado) */}
      <ServiceHighlight
        badge="✦ Qualidade Comprovada no RS"
        title="Anos entregando obras limpas no Rio Grande do Sul"
        paragraph="Engenheiros e arquitetos que já trabalharam com a gente sabem: a Limpeza Técnica LTD entrega padrão técnico superior, removendo até as manchas mais difíceis — cimento, selante, tinta — sem danificar revestimentos, vidros ou esquadrias, com produtos adequados a cada tipo de material e capacidade para atender grandes volumes dentro do prazo combinado com a construtora."
        flip={true}
        offset="-translate-x-4 translate-y-4"
        watermarkSide="right"
      />

      <CTABanner />

      {/* Equipe em Ação (AIDA) */}
      <ServiceHighlight
        badge="✦ Profissionais Nº1 em Limpeza Pós-Obra"
        title="Uma equipe pronta para o dia da entrega"
        subtitle="Treinada, certificada e equipada para qualquer desafio pós-obra."
        paragraph="Cada profissional da nossa equipe atua com EPI completo, produtos certificados e um checklist técnico desenvolvido ao longo de anos de atendimento a construtoras e incorporadoras no RS — para que, no dia da vistoria, você só precise se preocupar em entregar as chaves. Fale agora com a gente e garanta a data da sua obra na nossa agenda."
        flip={true}
        photoFlip={false}
        offset="-translate-x-3 translate-y-3"
        showWatermark={false}
      />

      <WhyUs />
      <ServiceArea />
      <NextSteps />
      <Portfolio />
    </>
  )
}
