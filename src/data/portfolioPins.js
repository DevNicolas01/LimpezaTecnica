import cignachiPredio from '../assets/CIgnachi/Predio.jpg'
import cignachiLogo from '../assets/CIgnachi/images.png'
import dalmasFoto from '../assets/Dalmas-Carlos Barbosa/foto1.jpg'
import dalmasLogo from '../assets/Dalmas-Carlos Barbosa/construtora_dalmas_logo.jpeg'
import mgfConcept from '../assets/MGF/Concept-NovoHamburgo.JPG'
import mgfGomes256 from '../assets/MGF/Gomes256 Novo Hamburgo.JPG'
import mgfGranPark from '../assets/MGF/Gran Park-Bento Gonvçalves.jpg'
import mgfLeavs from '../assets/MGF/Leavs-PortoAlegre.JPG'
import mgfLogo from '../assets/MGF/rodape-logoMGF.png'
import parisottoFoto from '../assets/Parisotto/Parisotto.jpg'
import parisottoLogo from '../assets/Parisotto/Logo Parisotto.png'
import sabinoAntes from '../assets/Sabino/antes10.jpg'
import sabinoDepois from '../assets/Sabino/depois10.jpg'
import sabinoLogo from '../assets/Sabino/Logo.jpeg'
import trianonAntes from '../assets/Trianon/antes2.jpg'
import trianonDepois from '../assets/Trianon/depois2.jpg'
import trianonLogo from '../assets/Trianon/logo.jpeg'
import vuelmaFoto from '../assets/Vuelma/Vuelma.jpg'
import vuelmaLogo from '../assets/Vuelma/logo-vuelma.svg'

// Coordenadas aproximadas dos municípios (centro urbano).
export const portfolioPins = [
  {
    id: 'cignachi-farroupilha',
    client: 'Cignachi Incorporadora',
    city: 'Farroupilha',
    state: 'RS',
    lat: -29.2239,
    lng: -51.3467,
    photo: cignachiPredio,
    logo: cignachiLogo,
    description:
      'Limpeza pós-obra completa de residencial da Cignachi Incorporadora, com remoção de resíduos de construção em fachada, esquadrias e áreas comuns antes da entrega das chaves.',
  },
  {
    id: 'dalmas-carlos-barbosa',
    client: 'Construtora Dalmás',
    city: 'Carlos Barbosa',
    state: 'RS',
    lat: -29.2969,
    lng: -51.5028,
    photo: dalmasFoto,
    logo: dalmasLogo,
    description:
      'Limpeza técnica pós-obra de empreendimento corporativo/industrial da Construtora Dalmás, com remoção de respingos de tinta, poeira de reboco e resíduos de acabamento em toda a edificação.',
  },
  {
    id: 'mgf-concept-novo-hamburgo',
    client: 'MGF Incorporadora — Concept',
    city: 'Novo Hamburgo',
    state: 'RS',
    lat: -29.6745,
    lng: -51.1345,
    photo: mgfConcept,
    logo: mgfLogo,
    description:
      'Limpeza pós-obra do residencial Concept, empreendimento da MGF Incorporadora em Novo Hamburgo, com resultado aprovado em vistoria final.',
  },
  {
    id: 'mgf-gomes256-novo-hamburgo',
    client: 'MGF Incorporadora — Gomes 256',
    city: 'Novo Hamburgo',
    state: 'RS',
    lat: -29.6822,
    lng: -51.1268,
    photo: mgfGomes256,
    logo: mgfLogo,
    description:
      'Limpeza técnica de entrega do residencial Gomes 256, da MGF Incorporadora, com remoção completa de resíduos de obra em fachada e áreas comuns.',
  },
  {
    id: 'mgf-granpark-bento-goncalves',
    client: 'MGF Incorporadora — Gran Park',
    city: 'Bento Gonçalves',
    state: 'RS',
    lat: -29.1717,
    lng: -51.5194,
    photo: mgfGranPark,
    logo: mgfLogo,
    description:
      'Limpeza pós-obra do residencial Gran Park, da MGF Incorporadora em Bento Gonçalves, preparado para a vistoria de entrega da construtora.',
  },
  {
    id: 'mgf-leavs-porto-alegre',
    client: 'MGF Incorporadora — Leavs',
    city: 'Porto Alegre',
    state: 'RS',
    lat: -30.0346,
    lng: -51.2177,
    photo: mgfLeavs,
    logo: mgfLogo,
    description:
      'Limpeza técnica de pós-obra do residencial Leavs, da MGF Incorporadora em Porto Alegre, com padrão de acabamento impecável na entrega.',
  },
  {
    id: 'parisotto-bento-goncalves',
    client: 'Parisotto Construções',
    city: 'Bento Gonçalves',
    state: 'RS',
    lat: -29.1685,
    lng: -51.5245,
    photo: parisottoFoto,
    logo: parisottoLogo,
    description:
      'Limpeza pós-obra de empreendimento da Parisotto Construções e Incorporadora, com remoção de resíduos de tinta, cimento e material de acabamento em toda a edificação.',
  },
  {
    id: 'sabino-antes',
    client: 'Sabino',
    city: 'Praia Vermelha, Imaruí',
    state: 'SC',
    lat: -28.3372,
    lng: -48.8114,
    photo: sabinoAntes,
    logo: sabinoLogo,
    description:
      'Antes da limpeza técnica: fachada e áreas internas ainda com resíduos de obra, prontas para o início do processo de limpeza pós-obra.',
  },
  {
    id: 'sabino-depois',
    client: 'Sabino',
    city: 'Praia Vermelha, Imaruí',
    state: 'SC',
    lat: -28.3392,
    lng: -48.8134,
    photo: sabinoDepois,
    logo: sabinoLogo,
    description:
      'Depois da limpeza técnica: resultado impecável, com fachada e ambientes internos limpos e prontos para a entrega da obra.',
  },
  {
    id: 'trianon-antes',
    client: 'Trianon',
    city: 'Garibaldi',
    state: 'RS',
    lat: -29.2567,
    lng: -51.5325,
    photo: trianonAntes,
    logo: trianonLogo,
    description:
      'Antes da limpeza técnica: unidade em fase final de obra, ainda com resíduos de tinta e cimento a remover.',
  },
  {
    id: 'trianon-depois',
    client: 'Trianon',
    city: 'Garibaldi',
    state: 'RS',
    lat: -29.2587,
    lng: -51.5345,
    photo: trianonDepois,
    logo: trianonLogo,
    description:
      'Depois da limpeza técnica: unidade entregue com acabamento impecável, aprovada em vistoria.',
  },
  {
    id: 'vuelma-veranopolis',
    client: 'Vuelma Construtora',
    city: 'Veranópolis',
    state: 'RS',
    lat: -28.9339,
    lng: -51.5528,
    photo: vuelmaFoto,
    logo: vuelmaLogo,
    description:
      'Limpeza pós-obra completa de empreendimento da Vuelma Construtora e Incorporadora, com remoção de resíduos de construção e resultado aprovado em vistoria.',
  },
]
