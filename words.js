const words = [
  { word: "abacaxi", clue: "Fruta tropical" },
  { word: "elefante", clue: "Animal de grande porte" },
  { word: "computador", clue: "Dispositivo eletrônico" },
  { word: "girafa", clue: "Animal alto" },
  { word: "chocolate", clue: "Doce" },
  { word: "piano", clue: "Instrumento musical" },
  { word: "tigre", clue: "Felino selvagem" },
  { word: "esmeralda", clue: "Tipo de pedra preciosa" },
  { word: "navio", clue: "Tipo de embarcação" },
  { word: "telefone", clue: "Dispositivo de comunicação" },
  { word: "floresta", clue: "Árvores" },
  { word: "quadrado", clue: "Figura geométrica" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "sorvete", clue: "Gelado" },
  { word: "bicicleta", clue: "Veículo de duas rodas" },
  { word: "avião", clue: "Meio de transporte" },
  { word: "macaco", clue: "Primata arbóreo" },
  { word: "raios", clue: "Descargas elétricas" },
  { word: "montanha", clue: "Elevação natural da terra" },
  { word: "vela", clue: "Objeto para iluminação" },
  { word: "cachorro", clue: "Conhecido por sua lealdade" },
  { word: "lua", clue: "Satélite natural" },
  { word: "gato", clue: "Animal de estimação" },
  { word: "carro", clue: "Veículo automotor de quatro rodas" },
  { word: "flor", clue: "Parte colorida das plantas" },
  { word: "livro", clue: "Objeto com páginas" },
  { word: "escola", clue: "Aprendizado" },
  { word: "leão", clue: "Rei da selva" },
  { word: "sol", clue: "Estrela que ilumina" },
  { word: "cachoeira", clue: "Queda de água de grande altura" },
  { word: "foto", clue: "Imagem capturada" },
  { word: "relógio", clue: "Instrumento para medir o tempo" },
  { word: "papagaio", clue: "Ave colorida e falante" },
  { word: "mar", clue: "Corpo de água que cobre grande parte da Terra" },
  { word: "tartaruga", clue: "Casco duro" },
  { word: "livraria", clue: "Estabelecimento" },
  { word: "vampiro", clue: "Ser mitológico" },
  { word: "foca", clue: "Mamífero" },
  { word: "ilha", clue: "Porção de terra cercada por água" },
  { word: "flamengo", clue: "É do Rio de Janeiro" },
  { word: "estátua", clue: "Escultura" },
  { word: "sereia", clue: "Ser mitológico" },
  { word: "guitarra", clue: "Instrumento musical" },
  { word: "serpente", clue: "Animal reptiliano" },
  { word: "relâmpago", clue: "Descarga elétrica durante tempestades" },
  { word: "gelo", clue: "Água congelada" },
  { word: "arco-íris", clue: "Fenômeno óptico com cores visíveis no céu" },
  { word: "esquilo", clue: "Roedor" },
  { word: "aviário", clue: "Espaço para criação de aves" },
  { word: "cebola", clue: "Legume com cheiro forte e sabor picante" },
  { word: "médico", clue: "Profissional da saúde" },
  { word: "pinguim", clue: "Ave não voadora adaptada ao frio" },
  { word: "fruta", clue: "Alimento doce e natural das plantas" },
  { word: "caneta", clue: "Instrumento para escrever" },
  { word: "forno", clue: "Equipamento usado para cozinhar" },
  { word: "cavalo", clue: "Animal de grande porte" },
  { word: "relatório", clue: "Documento que apresenta informações ou resultados" },
  { word: "janela", clue: "Abertura em uma parede" },
  { word: "computação", clue: "Campo relacionado ao uso de computadores e tecnologia" },
  { word: "código", clue: "Sistema de sinais ou símbolos usados para comunicação" },
  { word: "tomate", clue: "Fruta vermelha usada frequentemente em saladas" },
  { word: "vento", clue: "Movimento do ar na atmosfera" },
  { word: "nuvem", clue: "Vapor de água condensado na atmosfera" },
  { word: "universo", clue: "Tudo o que existe, incluindo estrelas, planetas e galáxias" },
  { word: "chave", clue: "Objeto usado para abrir fechaduras" },
  { word: "balão", clue: "Objeto inflável usado para transporte ou diversão" },
  { word: "pescador", clue: "Pessoa que pesca peixes" },
  { word: "jardim", clue: "Área cultivada com plantas e flores" },
  { word: "pedra", clue: "Material sólido encontrado na natureza" },
  { word: "fada", clue: "Ser mitológico com poderes mágicos" },
  { word: "bicho-preguiça", clue: "Animal conhecido por seu ritmo lento" },
  { word: "copo", clue: "Recipiente usado para beber líquidos" },
  { word: "pneu", clue: "Parte do veículo " },
  { word: "areia", clue: "Grãos pequenos de rochas" },
  { word: "coelho", clue: "Animal pequeno" },
  { word: "rádio", clue: "Dispositivo usado para ouvir transmissões sonoras" },
  { word: "tábua", clue: "Superfície plana de madeira" },
  { word: "mãe", clue: "Pessoa que gera e cuida de um filho" },
  { word: "pai", clue: "Pessoa que é responsável pela criação de um filho" },
  { word: "brinquedo", clue: "Objeto usado para diversão" },
  { word: "porta", clue: "Objeto móvel usado para fechar uma abertura" },
  { word: "olho", clue: "Órgão sensorial usado para ver" },
  { word: "estrela", clue: "Corpo celeste que emite luz própria" },
  { word: "páscoa", clue: "Festa cristã " },
  { word: "janela", clue: "Abertura em um prédio ou casa para iluminação e ventilação" },
  { word: "bola", clue: "Objeto redondo " },
  { word: "medalha", clue: "Premiação geralmente de metal" },
  { word: "torneio", clue: "Competição com várias etapas e jogadores" },
  { word: "marte", clue: "Planeta vermelho, conhecido como o planeta dos sonhos" },
  { word: "borboleta", clue: "Inseto colorido" },
  { word: "pássaro", clue: "Ave que voa e tem penas" },
  { word: "refrigerante", clue: "Bebida gaseificada" },
  { word: "bola", clue: "Objeto esférico" },
  { word: "zebra", clue: "Animal de pele listrada " },
  { word: "abóbora", clue: "Fruto com casca dura e polpa macia" },
  { word: "caverna", clue: "Espaço subterrâneo natural" },
  { word: "guitarra", clue: "Instrumento musical de cordas" },
  { word: "orquestra", clue: "Conjunto musical formado por vários instrumentos" },
  { word: "soluço", clue: "Contração involuntária do diafragma" },
  { word: "banco", clue: "Instituição financeira" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "suco", clue: "Bebida feita de frutas" },
  { word: "foto", clue: "Imagem capturada por uma câmera" },
  { word: "piscina", clue: "Local para nadar" },
  { word: "lago", clue: "Corpo de água cercado por terra" },
  { word: "guitarra", clue: "Instrumento musical de cordas" },
  { word: "praia", clue: "Área de areia à beira do mar" },
  { word: "pizza", clue: "Comida de massa coberta com molho e outros ingredientes" },
  { word: "computador", clue: "Máquina para processamento de dados" },
  { word: "foguete", clue: "Veículo que viaja para o espaço" },
  { word: "astronauta", clue: "Pessoa que viaja para o espaço" },
  { word: "martelo", clue: "Ferramenta usada para bater objetos" },
  { word: "grilo", clue: "Inseto conhecido pelo seu som característico" },
  { word: "coração", clue: "Órgão responsável pela circulação sanguínea" },
  { word: "notebook", clue: "É portátil" },
  { word: "cama", clue: "Móvel usado para dormir" },
  { word: "lápis", clue: "Instrumento para escrever" },
  { word: "mochila", clue: "Saco usado para carregar objetos" },
  { word: "fogão", clue: "Equipamento usado para cozinhar" },
  { word: "cachecol", clue: "Acessório usado para aquecer o pescoço" },
  { word: "caminhão", clue: "Veículo de grande porte usado para transporte" },
  { word: "garrafa", clue: "Armazena líquidos" },
  { word: "cachorro-quente", clue: "Lanche feito com pão e salsicha" },
  { word: "Televisão", clue: "Transmissão e recepção de imagens em movimento e som" },
  { word: "Ar-condicionado", clue: "Objeto para refrescar ambiente" },
  { word: "capivara", clue: "Maior roedor do mundo" },
  { word: "baleia", clue: "Mamífero de grande porte" },
  { word: "Liquidificador", clue: " eletrodoméstico utilizado para triturar" },
  { word: "Cafeteira", clue: "Utensílio para fazer café" },
  { word: "Café", clue: "Bebida quente" },
  { word: "Copo", clue: "Recipiente para líquidos" },
  { word: "Cadeira", clue: "Assento" },
  { word: "Mesa", clue: "Móvel para refeições" },
  { word: "Cama", clue: "Móvel para dormir" },
  { word: "Travesseiro", clue: "Objeto para apoiar a cabeça" },
  { word: "Colchão", clue: "Móvel para dormir" },
  { word: "Cobertor", clue: "Objeto para aquecer" },
  { word: "Edredom", clue: "Objeto para aquecer" },
  { word: "Fronha", clue: "Cobertura para travesseiro" },
  { word: "Lençol", clue: "Cobertura para colchão" },
  { word: "Cortina", clue: "Objeto para cobrir janelas" },
  { word: "Tapete", clue: "Objeto para cobrir o chão" },
  { word: "Sofá", clue: "Móvel para sentar" },
  { word: "Poltrona", clue: "Móvel para sentar" },
  { word: "Estante", clue: "Móvel para guardar livros" },
  { word: "Armário", clue: "Móvel para guardar roupas" },
  { word: "Geladeira", clue: "Objeto para refrigerar alimentos" },
  { word: "Fogão", clue: "Objeto para cozinhar alimentos" },
  { word: "Forno", clue: "Objeto para assar alimentos" },
  { word: "Micro-ondas", clue: "Objeto para aquecer alimentos" },
  { word: "Máquina de lavar", clue: "Objeto para lavar roupas" },
  { word: "Máquina de secar", clue: "Objeto para secar roupas"},
  { word: "Liquidificador", clue: " Eletrodoméstico utilizado para triturar" },
  
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
