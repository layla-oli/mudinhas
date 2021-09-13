import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      nome: 'Carlos Admin',
      email: 'carloslinhares@id.uff.br',
      senha: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      nome: 'Carlos',
      email: 'carl11br@gmail.com',
      senha: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products:[
        {
          //id: 1,
          imagem:'/images/products/Cymbopogon_citratus.jpg',
          nome_popular: "Capim Limão (muda)",
          nome_cientifico: "Cymbopogon citratus",
          preco: 10.00,
          estoque: 222,
          detalhes: "O capim limão é uma planta rica em terpenos, flavonoides e compostos fenólicos que proporcionam efeito antioxidante. Por causa disso, é considerada uma planta medicinal, podendo ser utilizada para melhorar a digestão, a pressão arterial e como um anti-inflamatório natural."
        },
        {
          //id: 2,
          imagem:'/images/products/Pimpinella_anisum.jpg',
          nome_popular: "Erva-doce (muda)",
          nome_cientifico: "Pimpinella anisum",
          preco: 15.00,
          estoque: 0,
          detalhes: "A erva-doce, também conhecida como anis-verde, anis e pimpinela-branca, é uma planta medicinal da família Apiaceae que tem cerca de de 50 cm de altura, sendo composta por folhas fendidas, flores brancas e frutos secos contendo uma só semente, de sabor adocicado e aroma intenso."
        },
        {
          //id: 3,
          imagem:'/images/products/Eucalyptus_deglupta.jpg',
          nome_popular: "Eucalipto Arco-íris (muda)",
          nome_cientifico: "Eucalyptus deglupta",
          preco: 20.00,
          estoque: 15,
          detalhes: "O eucalipto arco-íris é uma árvore alta e única, pois é o único eucalipto a viver na floresta tropical e apenas uma das quatro espécies encontradas fora da Austrália. Pode ser encontrado nas Filipinas, na Indonésia e na Papua Nova-Guiné, onde pode crescer até aos 76 metros. Embora a sua altura seja impressionante, é realmente a casca multicolorida da árvore que a destaca."
        },
        {
          //id: 4,
          imagem:'/images/products/Pereskia_aculeata.jpg',
          nome_popular: "Ora Pro Nóbis por Estaca (muda)",
          nome_cientifico: "Pereskia aculeata",
          preco: 33.15,
          estoque: 77,
          detalhes: "A ora-pro-nobis, ou Pereskia aculeata, é uma cactácea folhosa, encontrada em muitas regiões no Brasil exceto o Norte, pois adapta-se melhor a climas mais secos. As mudas, no entanto, precisam de um pouco mais de umidade. Seu nome popular — ora-pro-nobis — tem a origem associada a orações de padres: Conta-se que as pessoas colhiam esta erva em terrenos de igrejas, enquanto padres entoavam orações em latim (orai por nós)."
        },
        {
          //id: 5,
          imagem:'/images/products/Aloe_vera.jpg',
          nome_popular: "Babosa (muda)",
          nome_cientifico: "Aloe vera",
          preco: 40.00,
          estoque: 50,
          detalhes: "A babosa é uma planta medicinal, também conhecida como Aloé vera, Caraguatá, Erva babosa, Babosa de botica ou Babosa de jardim, que pode ser utilizada em diferentes tratamentos de beleza, especialmente para melhorar a saúde do cabelo ou da pele."
        },
        {
          //id: 6,
          imagem:'/images/products/Adenium_obesum.jpg',
          nome_popular: "Rosa do Deserto Branca e Rosa (muda)",
          nome_cientifico: "Adenium obesum",
          preco: 49.90,
          estoque: 33,
          detalhes: "Adenium obesum é uma espécie de planta pertencente à família Apocynaceae, nativa das regiões do Sahel, ao sul do Saara (da Mauritânia e Senegal ao Sudão), e da África tropical e oriental e subtropical do sul e da Arábia. É popularmente chamada de rosa do deserto. Suas sementes têm sido venda fraudulenta de sementes de Adenium comum como sendo de híbridos com cores e formatos inexistentes."
        },
        {
          //id: 7,
          imagem:'/images/products/Oncidium_varicosum.jpg',
          nome_popular: "Orquídea Amarela Chuva de Ouro (planta adulta)",
          nome_cientifico: "Oncidium varicosum",
          preco: 150.00,
          estoque: 15,
          detalhes: "O Oncidium varicosum é uma Espécie de orquídeas do gênero Oncidium, também chamado de dama dançante e chuva-de-ouro, da subfamília Epidendroideae da familia das Orquidáceas."
        },
        {
          //id: 8,
          imagem:'/images/products/Dendrobium_bigibbum.jpg',
          nome_popular: "Orquídea Roxa Denphal (planta adulta)",
          nome_cientifico: "Dendrobium bigibbum",
          preco: 160.00,
          estoque: 15,
          detalhes: "Dendrobium bigibbum, a flor símbolo do estado de Queensland, na Austrália, mas atualmente conhecida em quase todo território nacional. Também tem sua marca registrado devido a sua grande capacidade em florescer ao longo de quase todo ano, no entanto a tendência maior de floração dessa espécie ocorre normalmente em tempos  mais seco podendo variar entre o outono e o inverno."
        },
        {
          //id: 9,
          imagem:'/images/products/Helianthus_annuus.jpg',
          nome_popular: "Girassol (muda)",
          nome_cientifico: "Helianthus annuus",
          preco: 32.00,
          estoque: 60,
          detalhes: "O girassol (Helianthus annuus) é uma planta anual da família das Asteraceae, gênero Heliantheae. Está situado na tribo Heliantheae, subtribo Helianthinae.É cultivada pelo seu óleo e frutos comestíveis. O nome é derivado do formato de sua inflorescência."
        },
        {
          //id: 10,
          imagem:'/images/products/Impatiens_parviflora.jpg',
          nome_popular: "Maria-sem-vergonha (muda)",
          nome_cientifico: "Impatiens parviflora",
          preco: 10.00,
          estoque: 60,
          detalhes: "A Maria-sem-vergonha é uma planta da família Balsaminaceae, oriunda da África Tropical. Conhecida por diversos nomes, como beijinho, avenca, venca e beijo-turco, ela se adapta em diversos locais e é bem bonita, podendo colorir a sua casa e ajudar na decoração."
        },
        {
          //id: 11,
          imagem:'/images/products/Lavandula_dentata.jpg',
          nome_popular: "Lavanda Dentata (Francesa) (muda)",
          nome_cientifico: "Lavandula dentata",
          preco: 42.00,
          estoque: 12,
          detalhes: "A Lavanda Francesa – Lavandula dentata é uma herbácea, pertence à família Lamiaceae, nativa do Mediterrâneo, perene, ereta, lenhosa na base, densamente ramificada, com até 1 m de altura e largura."
        },
        {
          //id: 12,
          imagem:'/images/products/Salvia_rosmarinus.jpg',
          nome_popular: "Alecrim (muda)",
          nome_cientifico: "Salvia rosmarinus",
          preco: 2,
          estoque: 155.00,
          detalhes: "O alecrim (Salvia Rosmarinus) é uma erva aromática comum na região do Mediterrâneo ocorrendo dos 0 a 1500 metros de altitude, preferencialmente em solos de origem calcária. Devido ao seu aroma característico, os romanos designavam-no como rosmarinus, que em latim significa orvalho do mar."
        },
        {
          //id: 13,
          imagem:'/images/products/Arnica_montana.jpg',
          nome_popular: "Arnica (muda)",
          nome_cientifico: "Arnica montana",
          preco: 35.00,
          estoque: 20,
          detalhes: "Arnica é o nome popular da espécie vegetal de nome científico Arnica montana, uma planta originária das montanhas da Europa e da Sibéria, utilizada há muitos séculos na medicina alternativa para o tratamento da dor e inflamação de diversas condições."
        },
        {
          //id: 14,
          imagem:'/images/products/Mentha_crispata.jpg',
          nome_popular: "Hortelã Comum (muda)",
          nome_cientifico: "Mentha crispata",
          preco: 2.00,
          estoque: 142,
          detalhes: "A hortelã comum, conhecida cientificamente como Mentha spicata, é uma planta medicinal e aromática, com propriedades que ajudam a tratar problemas digestivos, como má digestão, flatulência, enjoo ou vômitos, por exemplo, mas a hortelã também tem efeitos calmantes e expectorantes."
        },
        {
          //id: 15,
          imagem:'/images/products/Cymbopogon_nardus.jpg',
          nome_popular: "Citronela (muda)",
          nome_cientifico: "Cymbopogon nardus",
          preco: 6.00,
          estoque: 93,
          detalhes: "A citronela, conhecida cientificamente como Cymbopogon nardus ou Cymbopogon winterianus, é uma planta medicinal com propriedades repelentes para insetos, aromatizadora, bactericida e calmante, sendo muito utilizada na confecção de cosméticos."
        },
        {
          //id: 16,
          imagem:'/images/products/Melissa_officinalis.jpg',
          nome_popular: "Erva-cidreira verdadeira (Melissa) (muda)",
          nome_cientifico: "Melissa officinalis",
          preco: 3.00,
          estoque: 62,
          detalhes: "Conhecida também como cidreira, melissa ou Melissa officinalis (nome científico da planta), a cidreira verdadeira é o tipo mais comum da erva. Parente da família das hortelãs, a planta varia entre 30 a 60 cm de altura e tem como origem principal algumas regiões da Europa e da Ásia. Suas folhas frescas são comumente utilizadas para o preparo de chás, sendo indicadas para auxiliar no tratamento de ansiedade, depressão e insônia."
        },
        {
          //id: 17,
          imagem:'/images/products/Stapelia_hirsuta.jpg',
          nome_popular: "Cacto Estrela (vaso)",
          nome_cientifico: "Stapelia hirsuta",
          preco: 22.00,
          estoque: 9,
          detalhes: "O cacto estrela (Stapelia hirsuta), também conhecido por estapelia, pertence à família das Asclepiadaceae. Apesar do nome e do aspeto, esta planta não é um cacto, é uma suculenta."
        },
        {
          //id: 18,
          imagem:'/images/products/Syzygium_aromaticum.jpg',
          nome_popular: "Cravo da Índia (muda)",
          nome_cientifico: "Syzygium aromaticum",
          preco: 20.00,
          estoque: 30,
          detalhes: " cravinho ou cravo-da-índia, chamado cientificamente Syzygium aromaticus, tem ação medicinal sendo útil no combate a dores, infecções, além de ter propriedades medicinais também é uma importante fonte de nutrientes, como vitamina A, vitamina E e beta-caroteno. "
        },
        {
          //id: 19,
          imagem:'/images/products/Saintpaulia_ionantha.jpg',
          nome_popular: "Violeta Africana (muda)",
          nome_cientifico: "Saintpaulia ionantha",
          preco: 5.00,
          estoque: 44,
          detalhes: "A Violeta Africana – Saintpaulia ionantha é uma herbácea, pertence à família Gesneriaceae, nativa da África Tropical, perene, acaule, de 15-20 cm de altura e raízes curtas."
        },
        {
          //id: 20,
          imagem:'/images/products/Epipremnum_aureum.jpg',
          nome_popular: "Jibóia (Hera-do-diabo) (planta adulta)",
          nome_cientifico: "Epipremnum aureum",
          preco: 27.00,
          estoque: 16,
          detalhes: "Epipremnum aureum, conhecida pelos nomes comuns de jibóia ou hera-do-diabo, é uma planta da família das Araceae, originária das Ilhas Salomão. A espécie é uma trepadeira sarmentosa, crescendo até 10 m de comprimento, com flores insignificantes e propagação por estaquia de ramos."
        }
      ]
    }
export default data;