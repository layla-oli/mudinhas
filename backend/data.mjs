import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      nome: 'Carlos',
      email: 'carloslinhares@id.uff.br',
      senha: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      nome: 'Fulano',
      email: 'fulano@email.com',
      senha: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    produtos:[
        {
          id: 1,
          imagem:'/images/produtos/Cymbopogon_citratus.jpg',
          nome_popular: "Capim Limão (muda)",
          nome_cientifico: "Cymbopogon citratus",
          preco: 10.00,
          estoque: 222,
          detalhes: "detalhes"
        },
        {
          id: 2,
          imagem:'/images/produtos/Pimpinella_anisum.jpg',
          nome_popular: "Erva-doce (muda)",
          nome_cientifico: "Pimpinella anisum",
          preco: 15.00,
          estoque: 0,
          detalhes: "detalhes"
        },
        {
          id: 3,
          imagem:'/images/produtos/Eucalyptus_deglupta.jpg',
          nome_popular: "Eucalipto Arco-íris (muda)",
          nome_cientifico: "Eucalyptus deglupta",
          preco: 20.00,
          estoque: 15,
          detalhes: "detalhes"
        },
        {
          id: 4,
          imagem:'/images/produtos/Pereskia_aculeata.jpg',
          nome_popular: "Ora Pro Nóbis por Estaca (muda)",
          nome_cientifico: "Pereskia aculeata",
          preco: 33.15,
          estoque: 77,
          detalhes: "detalhes"
        },
        {
          id: 5,
          imagem:'/images/produtos/Aloe_vera.jpg',
          nome_popular: "Babosa (muda)",
          nome_cientifico: "Aloe vera",
          preco: 40.00,
          estoque: 50,
          detalhes: "detalhes"
        },
        {
          id: 6,
          imagem:'/images/produtos/Adenium_obesum.jpg',
          nome_popular: "Rosa do Deserto Branca e Rosa (muda)",
          nome_cientifico: "Adenium obesum",
          preco: 49.90,
          estoque: 33,
          detalhes: "detalhes"
        },
        {
          id: 7,
          imagem:'/images/produtos/Oncidium_varicosum.jpg',
          nome_popular: "Orquídea Amarela Chuva de Ouro (planta adulta)",
          nome_cientifico: "Oncidium varicosum",
          preco: 150.00,
          estoque: 15,
          detalhes: "detalhes"
        },
        {
          id: 8,
          imagem:'/images/produtos/Dendrobium_bigibbum.jpg',
          nome_popular: "Orquídea Roxa Denphal (planta adulta)",
          nome_cientifico: "Dendrobium bigibbum",
          preco: 160.00,
          estoque: 15,
          detalhes: "detalhes"
        },
        {
          id: 9,
          imagem:'/images/produtos/Helianthus_annuus.jpg',
          nome_popular: "Girassol (muda)",
          nome_cientifico: "Helianthus annuus",
          preco: 32.00,
          estoque: 60,
          detalhes: "detalhes"
        },
        {
          id: 10,
          imagem:'/images/produtos/Impatiens_parviflora.jpg',
          nome_popular: "Maria-sem-vergonha (muda)",
          nome_cientifico: "Impatiens parviflora",
          preco: 10.00,
          estoque: 60,
          detalhes: "detalhes"
        },
        {
          id: 11,
          imagem:'/images/produtos/Lavandula_dentata.jpg',
          nome_popular: "Lavanda Dentata (Francesa) (muda)",
          nome_cientifico: "Lavandula dentata",
          preco: 42.00,
          estoque: 12,
          detalhes: "detalhes"
        },
        {
          id: 12,
          imagem:'/images/produtos/Salvia_rosmarinus.jpg',
          nome_popular: "Alecrim (muda)",
          nome_cientifico: "Salvia rosmarinus",
          preco: 2,
          estoque: 155.00,
          detalhes: "detalhes"
        },
        {
          id: 13,
          imagem:'/images/produtos/Arnica_montana.jpg',
          nome_popular: "Arnica (muda)",
          nome_cientifico: "Arnica montana",
          preco: 35.00,
          estoque: 20,
          detalhes: "detalhes"
        },
        {
          id: 14,
          imagem:'/images/produtos/Mentha_crispata.jpg',
          nome_popular: "Hortelã Comum (muda)",
          nome_cientifico: "Mentha crispata",
          preco: 2.00,
          estoque: 142,
          detalhes: "detalhes"
        },
        {
          id: 15,
          imagem:'/images/produtos/Cymbopogon_nardus.jpg',
          nome_popular: "Citronela (muda)",
          nome_cientifico: "Cymbopogon nardus",
          preco: 6.00,
          estoque: 93,
          detalhes: "detalhes"
        },
        {
          id: 16,
          imagem:'/images/produtos/Melissa_officinalis.jpg',
          nome_popular: "Erva-cidreira verdadeira (Melissa) (muda)",
          nome_cientifico: "Melissa officinalis",
          preco: 3.00,
          estoque: 62,
          detalhes: "detalhes"
        },
        {
          id: 17,
          imagem:'/images/produtos/Stapelia_hirsuta.jpg',
          nome_popular: "Cacto Estrela (vaso)",
          nome_cientifico: "Stapelia hirsuta",
          preco: 22.00,
          estoque: 9,
          detalhes: "detalhes"
        },
        {
          id: 18,
          imagem:'/images/produtos/Syzygium_aromaticum.jpg',
          nome_popular: "Cravo da Índia (muda)",
          nome_cientifico: "Syzygium aromaticum",
          preco: 20.00,
          estoque: 30,
          detalhes: "detalhes"
        },
        {
          id: 19,
          imagem:'/images/produtos/Saintpaulia_ionantha.jpg',
          nome_popular: "Violeta Lilás (muda)",
          nome_cientifico: "Saintpaulia ionantha",
          preco: 5.00,
          estoque: 44,
          detalhes: "detalhes"
        },
        {
          id: 20,
          imagem:'/images/produtos/Epipremnum_aureum.jpg',
          nome_popular: "Jibóia (Hera-do-diabo) (planta adulta)",
          nome_cientifico: "Epipremnum aureum",
          preco: 27.00,
          estoque: 16,
          detalhes: "detalhes"
        }
      ]
    }
export default data;