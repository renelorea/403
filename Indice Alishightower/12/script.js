// Datos de los temas del juego
const temasJuego = {
  paises: [
    { emoji: '🗼', name: 'París', habitat: '🇫🇷', habitatName: 'Francia' },
    { emoji: '🗽', name: 'Nueva York', habitat: '🇺🇸', habitatName: 'Estados Unidos' },
    { emoji: '🏛️', name: 'Roma', habitat: '🇮🇹', habitatName: 'Italia' },
    { emoji: '⛩️', name: 'Tokio', habitat: '🇯🇵', habitatName: 'Japón' },
    { emoji: '🕌', name: 'Dubai', habitat: '🇦🇪', habitatName: 'Emiratos Árabes' },
    { emoji: '🏰', name: 'Madrid', habitat: '🇪🇸', habitatName: 'España' },
    { emoji: '🎡', name: 'Londres', habitat: '🇬🇧', habitatName: 'Reino Unido' },
    { emoji: '🗿', name: 'Santiago', habitat: '🇨🇱', habitatName: 'Chile' },
    { emoji: '🏺', name: 'Atenas', habitat: '🇬🇷', habitatName: 'Grecia' },
    { emoji: '🎭', name: 'Moscú', habitat: '🇷🇺', habitatName: 'Rusia' },
    { emoji: '🎪', name: 'Berlín', habitat: '🇩🇪', habitatName: 'Alemania' },
    { emoji: '🌉', name: 'Pekín', habitat: '🇨🇳', habitatName: 'China' }
  ],
  animales: [
    { emoji: '🐯', name: 'Tigre', habitat: '🌿', habitatName: 'Selva' },
    { emoji: '🐻', name: 'Oso', habitat: '🏔️', habitatName: 'Montañas' },
    { emoji: '🦊', name: 'Zorro', habitat: '🌲', habitatName: 'Bosque' },
    { emoji: '🐪', name: 'Camello', habitat: '🏜️', habitatName: 'Desierto' },
    { emoji: '🐧', name: 'Pingüino', habitat: '❄️', habitatName: 'Ártico' },
    { emoji: '🦈', name: 'Tiburón', habitat: '🌊', habitatName: 'Océano' },
    { emoji: '🐘', name: 'Elefante', habitat: '🌾', habitatName: 'Sabana' },
    { emoji: '🦘', name: 'Canguro', habitat: '🌵', habitatName: 'Outback' },
    { emoji: '🦒', name: 'Jirafa', habitat: '🌴', habitatName: 'Llanuras' },
    { emoji: '🐬', name: 'Delfín', habitat: '🏝️', habitatName: 'Costa' },
    { emoji: '🦙', name: 'Llama', habitat: '⛰️', habitatName: 'Andes' },
    { emoji: '🐨', name: 'Koala', habitat: '🌳', habitatName: 'Eucalipto' }
  ],
  instrumentos: [
    { emoji: '🎸', name: 'Guitarra', habitat: '🎼', habitatName: 'Cuerdas' },
    { emoji: '🎹', name: 'Piano', habitat: '🎵', habitatName: 'Teclas' },
    { emoji: '🥁', name: 'Batería', habitat: '🔊', habitatName: 'Percusión' },
    { emoji: '🎺', name: 'Trompeta', habitat: '🎶', habitatName: 'Viento Metal' },
    { emoji: '🎻', name: 'Violín', habitat: '🎭', habitatName: 'Orquesta' },
    { emoji: '🪘', name: 'Tambor', habitat: '🌍', habitatName: 'Tribal' },
    { emoji: '🎷', name: 'Saxofón', habitat: '🎪', habitatName: 'Jazz' },
    { emoji: '🪕', name: 'Banjo', habitat: '🤠', habitatName: 'Country' },
    { emoji: '📯', name: 'Trompa', habitat: '🏰', habitatName: 'Medieval' },
    { emoji: '🎙️', name: 'Micrófono', habitat: '🎤', habitatName: 'Vocal' },
    { emoji: '🪗', name: 'Acordeón', habitat: '💃', habitatName: 'Folklore' },
    { emoji: '🔔', name: 'Campana', habitat: '⛪', habitatName: 'Iglesia' }
  ],
  quimica: [
    { emoji: 'H', name: 'Hidrógeno', habitat: '💧', habitatName: 'Agua' },
    { emoji: 'O', name: 'Oxígeno', habitat: '🌬️', habitatName: 'Aire' },
    { emoji: 'Au', name: 'Oro', habitat: '💍', habitatName: 'Metal Precioso' },
    { emoji: 'Fe', name: 'Hierro', habitat: '⚒️', habitatName: 'Metal' },
    { emoji: 'Na', name: 'Sodio', habitat: '🧂', habitatName: 'Sal' },
    { emoji: 'Cl', name: 'Cloro', habitat: '🏊', habitatName: 'Piscina' },
    { emoji: 'C', name: 'Carbono', habitat: '💎', habitatName: 'Diamante' },
    { emoji: 'He', name: 'Helio', habitat: '🎈', habitatName: 'Globo' },
    { emoji: 'N', name: 'Nitrógeno', habitat: '🌱', habitatName: 'Plantas' },
    { emoji: 'Ca', name: 'Calcio', habitat: '🥛', habitatName: 'Leche' },
    { emoji: 'Ag', name: 'Plata', habitat: '📷', habitatName: 'Fotografía' },
    { emoji: 'Cu', name: 'Cobre', habitat: '🔌', habitatName: 'Electricidad' }
  ],
  cuerpo: [
    { emoji: '👁️', name: 'Ojo', habitat: 'Eye', habitatName: 'Inglés' },
    { emoji: '👃', name: 'Nariz', habitat: 'Nose', habitatName: 'Inglés' },
    { emoji: '👄', name: 'Boca', habitat: 'Mouth', habitatName: 'Inglés' },
    { emoji: '👂', name: 'Oreja', habitat: 'Ear', habitatName: 'Inglés' },
    { emoji: '🦷', name: 'Diente', habitat: 'Tooth', habitatName: 'Inglés' },
    { emoji: '👅', name: 'Lengua', habitat: 'Tongue', habitatName: 'Inglés' },
    { emoji: '🦴', name: 'Hueso', habitat: 'Bone', habitatName: 'Inglés' },
    { emoji: '🫀', name: 'Corazón', habitat: 'Heart', habitatName: 'Inglés' },
    { emoji: '🧠', name: 'Cerebro', habitat: 'Brain', habitatName: 'Inglés' },
    { emoji: '🦿', name: 'Pierna', habitat: 'Leg', habitatName: 'Inglés' },
    { emoji: '💪', name: 'Brazo', habitat: 'Arm', habitatName: 'Inglés' },
    { emoji: '🖐️', name: 'Mano', habitat: 'Hand', habitatName: 'Inglés' }
  ],
  historia: [
    { emoji: '🎨', name: 'Da Vinci', habitat: '🖼️', habitatName: 'Arte y Ciencia' },
    { emoji: '⚛️', name: 'Einstein', habitat: '💡', habitatName: 'Relatividad' },
    { emoji: '🔬', name: 'Pasteur', habitat: '🦠', habitatName: 'Microbiología' },
    { emoji: '🧬', name: 'Darwin', habitat: '🐢', habitatName: 'Evolución' },
    { emoji: '⚡', name: 'Tesla', habitat: '💡', habitatName: 'Electricidad' },
    { emoji: '🔭', name: 'Galileo', habitat: '🌠', habitatName: 'Astronomía' },
    { emoji: '💉', name: 'Fleming', habitat: '🔬', habitatName: 'Penicilina' },
    { emoji: '🧪', name:  'Curie', habitat: '☢️', habitatName: 'Radioactividad' },
    { emoji: '🎭', name: 'Shakespeare', habitat: '📚', habitatName: 'Literatura' },
    { emoji: '🎼', name: 'Mozart', habitat: '🎵', habitatName: 'Música' },
    { emoji: '🎨', name: 'Van Gogh', habitat: '🌻', habitatName: 'Pintura' },
    { emoji: '✊', name: 'Gandhi', habitat: '☮️', habitatName: 'Paz' }
  ],
  banderas: [
    {
      emoji: 'https://flagcdn.com/w160/mx.png',
      name: 'México',
      habitat: '🌵',
      habitatName: 'Azteca'
    },
    {
      emoji: 'https://flagcdn.com/w160/br.png',
      name: 'Brasil',
      habitat: '🌴',
      habitatName: 'Amazonas'
    },
    {
      emoji: 'https://flagcdn.com/w160/jp.png',
      name: 'Japón',
      habitat: '🗻',
      habitatName: 'Fuji'
    },
    {
      emoji: 'https://flagcdn.com/w160/in.png',
      name: 'India',
      habitat: '🕌',
      habitatName: 'Taj Mahal'
    },
    {
      emoji: 'https://flagcdn.com/w160/gb.png',
      name: 'Reino Unido',
      habitat: '🎡',
      habitatName: 'London Eye'
    },
    {
      emoji: 'https://flagcdn.com/w160/fr.png',
      name: 'Francia',
      habitat: '🗼',
      habitatName: 'Torre Eiffel'
    },
    {
      emoji: 'https://flagcdn.com/w160/it.png',
      name: 'Italia',
      habitat: '🏛️',
      habitatName: 'Coliseo'
    },
    {
      emoji: 'https://flagcdn.com/w160/cn.png',
      name: 'China',
      habitat: '🧱',
      habitatName: 'Gran Muralla'
    },
    {
      emoji: 'https://flagcdn.com/w160/es.png',
      name: 'España',
      habitat: '⚽',
      habitatName: 'Fútbol'
    },
    {
      emoji: 'https://flagcdn.com/w160/au.png',
      name: 'Australia',
      habitat: '🦘',
      habitatName: 'Canguro'
    },
    {
      emoji: 'https://flagcdn.com/w160/ca.png',
      name: 'Canadá',
      habitat: '🍁',
      habitatName: 'Arce'
    },
    {
      emoji: 'https://flagcdn.com/w160/ru.png',
      name: 'Rusia',
      habitat: '⛪',
      habitatName: 'San Basilio'
    }
  ]
};

// Datos para el juego de ahorcado
const ahorcadoData = {
  animales: [
    { word: 'TIGRE', hint: 'Felino grande con rayas naranjas y negras' },
    { word: 'ELEFANTE', hint: 'Mamífero grande con trompa' },
    { word: 'JIRAFA', hint: 'Animal más alto del mundo' },
    { word: 'PINGÜINO', hint: 'Ave que no vuela y vive en el frío' },
    { word: 'CANGURO', hint: 'Marsupial que salta de Australia' },
    { word: 'DELFÍN', hint: 'Mamífero marino muy inteligente' },
    { word: 'KOALA', hint: 'Marsupial que come eucalipto' },
    { word: 'CAMELLO', hint: 'Animal del desierto con jorobas' }
  ],
  paises: [
    { word: 'MÉXICO', hint: 'País donde está el CECYTEM' },
    { word: 'BRASIL', hint: 'País más grande de Sudamérica' },
    { word: 'JAPÓN', hint: 'País del sol naciente' },
    { word: 'FRANCIA', hint: 'País de la Torre Eiffel' },
    { word: 'ITALIA', hint: 'País con forma de bota' },
    { word: 'ESPAÑA', hint: 'País donde se habla español en Europa' },
    { word: 'CANADÁ', hint: 'País al norte de Estados Unidos' },
    { word: 'AUSTRALIA', hint: 'País-continente de Oceanía' }
  ],
  ciencia: [
    { word: 'ÁTOMO', hint: 'Unidad básica de la materia' },
    { word: 'OXÍGENO', hint: 'Gas necesario para respirar' },
    { word: 'GRAVEDAD', hint: 'Fuerza que nos mantiene en la Tierra' },
    { word: 'CÉLULA', hint: 'Unidad básica de la vida' },
    { word: 'ENERGÍA', hint: 'Capacidad de realizar trabajo' },
    { word: 'MOLÉCULA', hint: 'Conjunto de átomos unidos' },
    { word: 'PLANETA', hint: 'Cuerpo celeste que orbita una estrella' },
    { word: 'ECOSISTEMA', hint: 'Conjunto de seres vivos y su ambiente' }
  ],
  historia: [
    { word: 'AZTECA', hint: 'Civilización prehispánica de México' },
    { word: 'REVOLUCIÓN', hint: 'Cambio radical en la sociedad' },
    { word: 'INDEPENDENCIA', hint: 'Libertad de un país' },
    { word: 'CONQUISTA', hint: 'Dominación de un territorio' },
    { word: 'IMPERIO', hint: 'Gran territorio bajo un emperador' },
    { word: 'CONSTITUCIÓN', hint: 'Ley fundamental de un país' },
    { word: 'DEMOCRACIA', hint: 'Gobierno del pueblo' },
    { word: 'CIVILIZACIÓN', hint: 'Sociedad humana desarrollada' }
  ],
  deportes: [
    { word: 'FÚTBOL', hint: 'Deporte más popular del mundo' },
    { word: 'BASQUETBOL', hint: 'Deporte con canasta y pelota' },
    { word: 'NATACIÓN', hint: 'Deporte acuático' },
    { word: 'ATLETISMO', hint: 'Deporte de correr, saltar y lanzar' },
    { word: 'VOLEIBOL', hint: 'Deporte con red y pelota' },
    { word: 'TENIS', hint: 'Deporte con raqueta' },
    { word: 'BOXEO', hint: 'Deporte de combate con guantes' },
    { word: 'GIMNASIA', hint: 'Deporte de ejercicios corporales' }
  ],
  comida: [
    { word: 'TACOS', hint: 'Comida típica mexicana con tortilla' },
    { word: 'PIZZA', hint: 'Comida italiana redonda' },
    { word: 'HAMBURGUESA', hint: 'Comida rápida con pan y carne' },
    { word: 'SUSHI', hint: 'Comida japonesa con pescado crudo' },
    { word: 'PAELLA', hint: 'Comida española con arroz' },
    { word: 'ENCHILADAS', hint: 'Tortillas enrolladas con salsa' },
    { word: 'QUESADILLA', hint: 'Tortilla doblada con queso' },
    { word: 'POZOLE', hint: 'Sopa mexicana con maíz' }
  ]
};

// Datos para el juego de trivia
const triviaData = {
  matematicas: {
    facil: [
      { question: '¿Cuánto es 5 + 3?', answers: ['6', '8', '9', '7'], correct: 1 },
      { question: '¿Cuánto es 10 - 4?', answers: ['5', '6', '7', '8'], correct: 1 },
      { question: '¿Cuánto es 3 × 4?', answers: ['10', '11', '12', '13'], correct: 2 },
      { question: '¿Cuánto es 15 ÷ 3?', answers: ['4', '5', '6', '7'], correct: 1 },
      { question: '¿Cuál es el número par más pequeño?', answers: ['0', '1', '2', '3'], correct: 2 },
      { question: '¿Cuántos lados tiene un triángulo?', answers: ['2', '3', '4', '5'], correct: 1 },
      { question: '¿Cuánto es 7 + 8?', answers: ['14', '15', '16', '17'], correct: 1 },
      { question: '¿Cuánto es 20 - 12?', answers: ['6', '7', '8', '9'], correct: 2 },
      { question: '¿Cuánto es 6 × 2?', answers: ['10', '11', '12', '13'], correct: 2 },
      { question: '¿Cuánto es 18 ÷ 2?', answers: ['8', '9', '10', '11'], correct: 1 }
    ],
    medio: [
      { question: '¿Cuánto es 25% de 100?', answers: ['20', '25', '30', '35'], correct: 1 },
      { question: '¿Cuál es la raíz cuadrada de 64?', answers: ['6', '7', '8', '9'], correct: 2 },
      { question: '¿Cuánto es 12²?', answers: ['124', '144', '164', '184'], correct: 1 },
      { question: '¿Cuántos grados tiene un círculo completo?', answers: ['180°', '270°', '360°', '450°'], correct: 2 },
      { question: '¿Cuánto es 3/4 en decimal?', answers: ['0.5', '0.6', '0.75', '0.8'], correct: 2 },
      { question: '¿Cuál es el perímetro de un cuadrado de 5cm de lado?', answers: ['15cm', '20cm', '25cm', '30cm'], correct: 1 },
      { question: '¿Cuánto es 15% de 200?', answers: ['25', '30', '35', '40'], correct: 1 },
      { question: '¿Cuál es el área de un rectángulo de 6×4?', answers: ['20', '22', '24', '26'], correct: 2 },
      { question: '¿Cuánto es 2³?', answers: ['6', '8', '9', '12'], correct: 1 },
      { question: '¿Cuántos minutos hay en 2.5 horas?', answers: ['120', '130', '140', '150'], correct: 3 }
    ]
  },
  ciencias: {
    facil: [
      { question: '¿Cuál es el planeta más cercano al Sol?', answers: ['Venus', 'Mercurio', 'Tierra', 'Marte'], correct: 1 },
      { question: '¿Cuántos huesos tiene el cuerpo humano adulto?', answers: ['196', '206', '216', '226'], correct: 1 },
      { question: '¿Qué gas respiramos?', answers: ['Hidrógeno', 'Oxígeno', 'Nitrógeno', 'Carbono'], correct: 1 },
      { question: '¿Cuál es el órgano más grande del cuerpo humano?', answers: ['Hígado', 'Cerebro', 'Pulmón', 'Piel'], correct: 3 },
      { question: '¿Cuántos continentes hay?', answers: ['5', '6', '7', '8'], correct: 2 },
      { question: '¿Qué animal es conocido como el rey de la selva?', answers: ['Tigre', 'León', 'Leopardo', 'Jaguar'], correct: 1 },
      { question: '¿Cuál es el metal más abundante en la Tierra?', answers: ['Hierro', 'Aluminio', 'Cobre', 'Oro'], correct: 1 },
      { question: '¿Cuántas patas tiene una araña?', answers: ['6', '8', '10', '12'], correct: 1 },
      { question: '¿Qué produce la fotosíntesis en las plantas?', answers: ['Agua', 'Oxígeno', 'Carbono', 'Nitrógeno'], correct: 1 },
      { question: '¿Cuál es el océano más grande?', answers: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'], correct: 2 }
    ]
  },
  historia: {
    facil: [
      { question: '¿En qué año llegó Cristóbal Colón a América?', answers: ['1490', '1491', '1492', '1493'], correct: 2 },
      { question: '¿Quién fue el primer presidente de México?', answers: ['Benito Juárez', 'Guadalupe Victoria', 'Miguel Hidalgo', 'José María Morelos'], correct: 1 },
      { question: '¿En qué año comenzó la Revolución Mexicana?', answers: ['1910', '1911', '1912', '1913'], correct: 0 },
      { question: '¿Quién escribió "Don Quijote de la Mancha"?', answers: ['Lope de Vega', 'Miguel de Cervantes', 'Calderón de la Barca', 'Garcilaso de la Vega'], correct: 1 },
      { question: '¿Cuál fue la primera civilización de Mesopotamia?', answers: ['Babilonia', 'Asiria', 'Sumeria', 'Persia'], correct: 2 },
      { question: '¿En qué año terminó la Segunda Guerra Mundial?', answers: ['1944', '1945', '1946', '1947'], correct: 1 },
      { question: '¿Quién fue conocido como "El Libertador"?', answers: ['José de San Martín', 'Simón Bolívar', 'Miguel Hidalgo', 'Bernardo O\'Higgins'], correct: 1 },
      { question: '¿Cuál fue la capital del Imperio Azteca?', answers: ['Texcoco', 'Tlatelolco', 'Tenochtitlan', 'Xochimilco'], correct: 2 },
      { question: '¿En qué siglo vivió Leonardo da Vinci?', answers: ['XIV', 'XV', 'XVI', 'XVII'], correct: 2 },
      { question: '¿Quién fue el primer emperador romano?', answers: ['Julio César', 'Augusto', 'Nerón', 'Trajano'], correct: 1 }
    ]
  },
  geografia: {
    facil: [
      { question: '¿Cuál es la capital de Francia?', answers: ['Londres', 'París', 'Roma', 'Madrid'], correct: 1 },
      { question: '¿Cuál es el río más largo del mundo?', answers: ['Amazonas', 'Nilo', 'Yangtsé', 'Misisipi'], correct: 1 },
      { question: '¿En qué continente está Egipto?', answers: ['Asia', 'África', 'Europa', 'América'], correct: 1 },
      { question: '¿Cuál es la montaña más alta del mundo?', answers: ['K2', 'Everest', 'Aconcagua', 'Denali'], correct: 1 },
      { question: '¿Cuál es el país más grande del mundo?', answers: ['China', 'Canadá', 'Estados Unidos', 'Rusia'], correct: 3 },
      { question: '¿Cuál es la capital de Japón?', answers: ['Osaka', 'Kioto', 'Tokio', 'Hiroshima'], correct: 2 },
      { question: '¿En qué océano están las islas Hawái?', answers: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'], correct: 2 },
      { question: '¿Cuál es el desierto más grande del mundo?', answers: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'], correct: 0 },
      { question: '¿Cuántos países tiene América del Sur?', answers: ['10', '11', '12', '13'], correct: 2 },
      { question: '¿Cuál es la capital de Australia?', answers: ['Sídney', 'Melbourne', 'Canberra', 'Perth'], correct: 2 }
    ]
  },
  cultura: {
    facil: [
      { question: '¿Quién pintó "La Mona Lisa"?', answers: ['Picasso', 'Leonardo da Vinci', 'Van Gogh', 'Monet'], correct: 1 },
      { question: '¿Cuántas cuerdas tiene una guitarra clásica?', answers: ['4', '5', '6', '7'], correct: 2 },
      { question: '¿Qué instrumento tocaba Mozart principalmente?', answers: ['Violín', 'Piano', 'Flauta', 'Guitarra'], correct: 1 },
      { question: '¿Cuál es el libro más vendido de la historia?', answers: ['Don Quijote', 'La Biblia', 'El Principito', 'Cien años de soledad'], correct: 1 },
      { question: '¿En qué país se originó el tango?', answers: ['Brasil', 'Argentina', 'Uruguay', 'Chile'], correct: 1 },
      { question: '¿Cuál es la obra más famosa de Shakespeare?', answers: ['Otelo', 'Hamlet', 'Macbeth', 'Romeo y Julieta'], correct: 3 },
      { question: '¿Qué significa "Hola" en inglés?', answers: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1 },
      { question: '¿Cuál es el museo más visitado del mundo?', answers: ['Louvre', 'Prado', 'Metropolitan', 'British Museum'], correct: 0 },
      { question: '¿En qué ciudad está la Estatua de la Libertad?', answers: ['Boston', 'Nueva York', 'Los Ángeles', 'Chicago'], correct: 1 },
      { question: '¿Cuál es el idioma más hablado en el mundo?', answers: ['Inglés', 'Español', 'Chino mandarín', 'Hindi'], correct: 2 }
    ]
  },
  deportes: {
    facil: [
      { question: '¿Cada cuántos años se celebran los Juegos Olímpicos?', answers: ['2 años', '3 años', '4 años', '5 años'], correct: 2 },
      { question: '¿Cuántos jugadores hay en un equipo de fútbol en el campo?', answers: ['10', '11', '12', '13'], correct: 1 },
      { question: '¿En qué deporte se usa una raqueta?', answers: ['Fútbol', 'Basquetbol', 'Tenis', 'Natación'], correct: 2 },
      { question: '¿Cuál es el deporte más popular del mundo?', answers: ['Basquetbol', 'Fútbol', 'Tenis', 'Béisbol'], correct: 1 },
      { question: '¿Cuántos sets se necesitan para ganar en tenis masculino en Grand Slam?', answers: ['2', '3', '4', '5'], correct: 1 },
      { question: '¿En qué deporte se anota un "home run"?', answers: ['Fútbol americano', 'Béisbol', 'Basquetbol', 'Hockey'], correct: 1 },
      { question: '¿Cuántos minutos dura un partido de fútbol?', answers: ['80', '90', '100', '110'], correct: 1 },
      { question: '¿En qué deporte se usa un "puck"?', answers: ['Béisbol', 'Tenis', 'Hockey', 'Golf'], correct: 2 },
      { question: '¿Cuántos puntos vale una canasta de tres puntos en basquetbol?', answers: ['2', '3', '4', '5'], correct: 1 },
      { question: '¿En qué país se originó el karate?', answers: ['China', 'Japón', 'Corea', 'Tailandia'], correct: 1 }
    ]
  }
};

// Game States
const memoramaState = {
  players: [
    { name: 'Jugador 1', avatar: '🦊', score: 0 },
    { name: 'Jugador 2', avatar: '🐨', score: 0 }
  ],
  currentPlayer: 0,
  isSinglePlayer: true,
  difficulty: 6,
  attempts: 0,
  matchedPairs: 0,
  firstCard: null,
  secondCard: null,
  canFlip: true,
  gameStarted: false,
  timer: 0,
  timerInterval: null,
  cards: [],
  selectedTheme: 'animales'
};

const ahorcadoState = {
  currentWord: '',
  currentHint: '',
  guessedLetters: [],
  wrongGuesses: 0,
  maxWrongGuesses: 6,
  gameWon: false,
  gameLost: false,
  selectedTheme: 'animales'
};

const triviaState = {
  currentQuestion: 0,
  score: 0,
  correctAnswers: 0,
  totalQuestions: 10,
  questions: [],
  selectedTheme: 'matematicas',
  difficulty: 'facil',
  timeLeft: 30,
  timerInterval: null,
  gameEnded: false
};

// Navigation
document.getElementById('nav-memorama').addEventListener('click', () => showGame('memorama'));
document.getElementById('nav-ahorcado').addEventListener('click', () => showGame('ahorcado'));
document.getElementById('nav-trivia').addEventListener('click', () => showGame('trivia'));

function showGame(game) {
  // Update navigation
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`nav-${game}`).classList.add('active');
  
  // Show game container
  document.querySelectorAll('.game-container').forEach(container => container.classList.remove('active'));
  document.getElementById(`${game}-game`).classList.add('active');
  
  // Reset games when switching
  if (game === 'memorama') {
    resetMemorama();
  } else if (game === 'ahorcado') {
    resetAhorcado();
  } else if (game === 'trivia') {
    resetTrivia();
  }
}

// MEMORAMA GAME LOGIC
function resetMemorama() {
  document.getElementById('welcome-screen').classList.add('active');
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('victory-screen').classList.remove('active');
  
  memoramaState.attempts = 0;
  memoramaState.matchedPairs = 0;
  memoramaState.firstCard = null;
  memoramaState.secondCard = null;
  memoramaState.canFlip = true;
  memoramaState.gameStarted = false;
  memoramaState.timer = 0;
  
  if (memoramaState.timerInterval) {
    clearInterval(memoramaState.timerInterval);
    memoramaState.timerInterval = null;
  }
}

// Memorama Event Listeners
document.getElementById('single-player-btn').addEventListener('click', () => {
  document.getElementById('single-player-btn').classList.add('active');
  document.getElementById('two-player-btn').classList.remove('active');
  document.getElementById('player2-form').style.display = 'none';
  memoramaState.isSinglePlayer = true;
});

document.getElementById('two-player-btn').addEventListener('click', () => {
  document.getElementById('two-player-btn').classList.add('active');
  document.getElementById('single-player-btn').classList.remove('active');
  document.getElementById('player2-form').style.display = 'block';
  memoramaState.isSinglePlayer = false;
});

document.getElementById('theme-selector').addEventListener('change', (e) => {
  memoramaState.selectedTheme = e.target.value;
});

document.querySelectorAll('.avatar').forEach(avatar => {
  avatar.addEventListener('click', function() {
    const parentSelector = this.closest('.avatar-selector');
    parentSelector.querySelectorAll('.avatar').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.difficulty-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    memoramaState.difficulty = parseInt(this.dataset.pairs);
  });
});

document.getElementById('start-game').addEventListener('click', startMemorama);
document.getElementById('restart-btn').addEventListener('click', restartMemorama);
document.getElementById('new-game-btn').addEventListener('click', () => resetMemorama());
document.getElementById('play-again').addEventListener('click', restartMemorama);
document.getElementById('back-to-menu').addEventListener('click', () => resetMemorama());

function startMemorama() {
  memoramaState.players[0].name = document.getElementById('player1-name').value || 'Jugador 1';
  memoramaState.players[0].avatar = document.querySelector('.player-form:first-child .avatar.active').textContent;
  
  if (!memoramaState.isSinglePlayer) {
    memoramaState.players[1].name = document.getElementById('player2-name').value || 'Jugador 2';
    memoramaState.players[1].avatar = document.querySelector('#player2-form .avatar.active').textContent;
    memoramaState.currentPlayer = Math.random() < 0.5 ? 0 : 1;
  } else {
    memoramaState.currentPlayer = 0;
  }
  
  memoramaState.attempts = 0;
  memoramaState.matchedPairs = 0;
  memoramaState.firstCard = null;
  memoramaState.secondCard = null;
  memoramaState.canFlip = true;
  memoramaState.gameStarted = false;
  memoramaState.timer = 0;
  
  if (memoramaState.timerInterval) {
    clearInterval(memoramaState.timerInterval);
    memoramaState.timerInterval = null;
  }
  
  document.getElementById('welcome-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
  document.getElementById('victory-screen').classList.remove('active');
  
  updatePlayerDisplay();
  
  const gameBoard = document.getElementById('game-board');
  gameBoard.className = 'game-board';
  if (memoramaState.difficulty === 8) {
    gameBoard.classList.add('medium');
  } else if (memoramaState.difficulty === 12) {
    gameBoard.classList.add('hard');
  }
  
  generateCards();
  updateTimer();
  updateAttempts();
}

function generateCards() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';
  
  const themeData = temasJuego[memoramaState.selectedTheme];
  const shuffledItems = [...themeData]
    .sort(() => Math.random() - 0.5)
    .slice(0, memoramaState.difficulty);
  
  const cardPairs = [];
  shuffledItems.forEach(item => {
    cardPairs.push({
      id: `item-${item.name.toLowerCase()}`,
      content: item.emoji,
      label: item.name,
      type: 'item',
      match: `match-${item.name.toLowerCase()}`
    });
    
    cardPairs.push({
      id: `match-${item.name.toLowerCase()}`,
      content: item.habitat,
      label: item.habitatName,
      type: 'match',
      match: `item-${item.name.toLowerCase()}`
    });
  });
  
  memoramaState.cards = cardPairs.sort(() => Math.random() - 0.5);
  
  memoramaState.cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.index = index;
    
    const isImage = card.content.startsWith('http');
    
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="https://images.seeklogo.com/logo-png/20/2/cecytem-logo-png_seeklogo-201352.png" alt="CECYTEM" class="card-logo">
          <div class="card-team">Equipo 1</div>
        </div>
        <div class="card-back">
          <div class="card-content">
            ${isImage ? `<img src="${card.content}" alt="${card.label}">` : card.content}
          </div>
          <div class="card-label">${card.label}</div>
        </div>
      </div>
    `;
    
    cardElement.addEventListener('click', () => flipCard(index));
    gameBoard.appendChild(cardElement);
  });
}

function flipCard(index) {
  const card = document.querySelector(`.card[data-index="${index}"]`);
  
  if (!memoramaState.gameStarted) {
    memoramaState.gameStarted = true;
    startMemoramaTimer();
  }
  
  if (
    !memoramaState.canFlip ||
    card.classList.contains('flipped') ||
    card.classList.contains('matched') ||
    (memoramaState.firstCard !== null && memoramaState.firstCard === index)
  ) {
    return;
  }
  
  card.classList.add('flipped');
  
  if (memoramaState.firstCard === null) {
    memoramaState.firstCard = index;
    return;
  }
  
  memoramaState.secondCard = index;
  memoramaState.canFlip = false;
  memoramaState.attempts++;
  updateAttempts();
  
  checkForMatch();
}

function checkForMatch() {
  const firstCardData = memoramaState.cards[memoramaState.firstCard];
  const secondCardData = memoramaState.cards[memoramaState.secondCard];
  const firstCardElement = document.querySelector(`.card[data-index="${memoramaState.firstCard}"]`);
  const secondCardElement = document.querySelector(`.card[data-index="${memoramaState.secondCard}"]`);
  
  if (firstCardData.id === secondCardData.match) {
    firstCardElement.classList.add('matched');
    secondCardElement.classList.add('matched');
    
    memoramaState.players[memoramaState.currentPlayer].score++;
    memoramaState.matchedPairs++;
    
    memoramaState.firstCard = null;
    memoramaState.secondCard = null;
    memoramaState.canFlip = true;
    
    if (memoramaState.matchedPairs === memoramaState.difficulty) {
      endMemorama();
      return;
    }
  } else {
    firstCardElement.classList.add('wrong');
    secondCardElement.classList.add('wrong');
    
    setTimeout(() => {
      firstCardElement.classList.remove('flipped', 'wrong');
      secondCardElement.classList.remove('flipped', 'wrong');
      
      memoramaState.firstCard = null;
      memoramaState.secondCard = null;
      memoramaState.canFlip = true;
      
      if (!memoramaState.isSinglePlayer) {
        memoramaState.currentPlayer = 1 - memoramaState.currentPlayer;
        updatePlayerDisplay();
      }
    }, 1000);
  }
}

function updatePlayerDisplay() {
  const player = memoramaState.players[memoramaState.currentPlayer];
  document.getElementById('player-avatar').textContent = player.avatar;
  document.getElementById('player-name').textContent = player.name;
}

function startMemoramaTimer() {
  memoramaState.timerInterval = setInterval(() => {
    memoramaState.timer++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  document.getElementById('timer').textContent = `Tiempo: ${memoramaState.timer}s`;
}

function updateAttempts() {
  document.getElementById('attempts').textContent = `Intentos: ${memoramaState.attempts}`;
}

function endMemorama() {
  clearInterval(memoramaState.timerInterval);
  
  const score = calculateMemoramaScore();
  
  if (memoramaState.isSinglePlayer) {
    document.getElementById('winner-avatar').textContent = memoramaState.players[0].avatar;
    document.getElementById('winner-name').textContent = memoramaState.players[0].name;
  } else {
    const player1 = memoramaState.players[0];
    const player2 = memoramaState.players[1];
    
    if (player1.score > player2.score) {
      document.getElementById('winner-avatar').textContent = player1.avatar;
      document.getElementById('winner-name').textContent = player1.name;
    } else if (player2.score > player1.score) {
      document.getElementById('winner-avatar').textContent = player2.avatar;
      document.getElementById('winner-name').textContent = player2.name;
    } else {
      document.getElementById('winner-avatar').textContent = '🏆';
      document.getElementById('winner-name').textContent = '¡Empate!';
    }
  }
  
  document.getElementById('final-time').textContent = `Tiempo: ${memoramaState.timer}s`;
  document.getElementById('final-attempts').textContent = `Intentos: ${memoramaState.attempts}`;
  document.getElementById('final-score').textContent = `Puntaje: ${score}`;
  
  setTimeout(() => {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('victory-screen').classList.add('active');
    createConfetti();
  }, 1000);
}

function calculateMemoramaScore() {
  const timeMultiplier = memoramaState.difficulty === 6 ? 2 : memoramaState.difficulty === 8 ? 1.5 : 1;
  const attemptMultiplier = memoramaState.difficulty === 6 ? 15 : memoramaState.difficulty === 8 ? 10 : 5;
  
  let score = 1000 - (memoramaState.timer * timeMultiplier + memoramaState.attempts * attemptMultiplier);
  return Math.max(0, Math.round(score));
}

function restartMemorama() {
  document.getElementById('victory-screen').classList.remove('active');
  startMemorama();
}

// AHORCADO GAME LOGIC
function resetAhorcado() {
  document.querySelector('#ahorcado-game .hangman-setup').style.display = 'block';
  document.getElementById('hangman-game-area').style.display = 'none';
  document.getElementById('hangman-result').style.display = 'none';
  
  ahorcadoState.currentWord = '';
  ahorcadoState.currentHint = '';
  ahorcadoState.guessedLetters = [];
  ahorcadoState.wrongGuesses = 0;
  ahorcadoState.gameWon = false;
  ahorcadoState.gameLost = false;
}

document.getElementById('hangman-theme').addEventListener('change', (e) => {
  ahorcadoState.selectedTheme = e.target.value;
});

document.getElementById('start-hangman').addEventListener('click', startAhorcado);
document.getElementById('hangman-restart').addEventListener('click', startAhorcado);
document.getElementById('hangman-menu').addEventListener('click', resetAhorcado);
document.getElementById('hangman-play-again').addEventListener('click', startAhorcado);
document.getElementById('hangman-back-menu').addEventListener('click', resetAhorcado);

function startAhorcado() {
  const words = ahorcadoData[ahorcadoState.selectedTheme];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  
  ahorcadoState.currentWord = randomWord.word;
  ahorcadoState.currentHint = randomWord.hint;
  ahorcadoState.guessedLetters = [];
  ahorcadoState.wrongGuesses = 0;
  ahorcadoState.gameWon = false;
  ahorcadoState.gameLost = false;
  
  document.querySelector('#ahorcado-game .hangman-setup').style.display = 'none';
  document.getElementById('hangman-game-area').style.display = 'block';
  document.getElementById('hangman-result').style.display = 'none';
  
  updateHangmanDisplay();
  createAlphabet();
  resetHangmanDrawing();
}

function createAlphabet() {
  const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  const alphabetContainer = document.querySelector('.alphabet');
  alphabetContainer.innerHTML = '';
  
  for (let letter of alphabet) {
    const letterBtn = document.createElement('button');
    letterBtn.className = 'letter-btn';
    letterBtn.textContent = letter;
    letterBtn.addEventListener('click', () => guessLetter(letter));
    alphabetContainer.appendChild(letterBtn);
  }
}

function guessLetter(letter) {
  if (ahorcadoState.guessedLetters.includes(letter) || ahorcadoState.gameWon || ahorcadoState.gameLost) {
    return;
  }
  
  ahorcadoState.guessedLetters.push(letter);
  
  const letterBtn = document.querySelector(`.letter-btn:nth-child(${letter.charCodeAt(0) - 64})`);
  letterBtn.classList.add('used');
  
  if (ahorcadoState.currentWord.includes(letter)) {
    letterBtn.classList.add('correct');
    checkWin();
  } else {
    letterBtn.classList.add('incorrect');
    ahorcadoState.wrongGuesses++;
    updateHangmanDrawing();
    checkLoss();
  }
  
  updateHangmanDisplay();
}

function updateHangmanDisplay() {
  document.getElementById('hangman-category').textContent = `Categoría: ${ahorcadoState.selectedTheme.charAt(0).toUpperCase() + ahorcadoState.selectedTheme.slice(1)}`;
  document.getElementById('hangman-errors').textContent = `Errores: ${ahorcadoState.wrongGuesses}/${ahorcadoState.maxWrongGuesses}`;
  document.getElementById('hangman-hint').textContent = `Pista: ${ahorcadoState.currentHint}`;
  
  let displayWord = '';
  for (let letter of ahorcadoState.currentWord) {
    if (ahorcadoState.guessedLetters.includes(letter)) {
      displayWord += letter + ' ';
    } else {
      displayWord += '_ ';
    }
  }
  document.getElementById('hangman-word').textContent = displayWord.trim();
}

function updateHangmanDrawing() {
  const parts = ['.head', '.body', '.left-arm', '.right-arm', '.left-leg', '.right-leg'];
  if (ahorcadoState.wrongGuesses <= parts.length) {
    document.querySelector(parts[ahorcadoState.wrongGuesses - 1]).style.display = 'block';
  }
}

function resetHangmanDrawing() {
  const parts = ['.head', '.body', '.left-arm', '.right-arm', '.left-leg', '.right-leg'];
  parts.forEach(part => {
    document.querySelector(part).style.display = 'none';
  });
}

function checkWin() {
  const hasWon = ahorcadoState.currentWord.split('').every(letter => 
    ahorcadoState.guessedLetters.includes(letter)
  );
  
  if (hasWon) {
    ahorcadoState.gameWon = true;
    showHangmanResult(true);
  }
}

function checkLoss() {
  if (ahorcadoState.wrongGuesses >= ahorcadoState.maxWrongGuesses) {
    ahorcadoState.gameLost = true;
    showHangmanResult(false);
  }
}

function showHangmanResult(won) {
  document.getElementById('hangman-game-area').style.display = 'none';
  document.getElementById('hangman-result').style.display = 'block';
  
  if (won) {
    document.getElementById('hangman-result-title').textContent = '¡Ganaste!';
    document.getElementById('hangman-result-message').textContent = '¡Excelente trabajo! Tu vocabulario es impresionante.';
  } else {
    document.getElementById('hangman-result-title').textContent = '¡Perdiste!';
    document.getElementById('hangman-result-message').textContent = '¡No te rindas! La práctica hace al maestro.';
  }
  
  document.getElementById('hangman-result-word').textContent = `La palabra era: ${ahorcadoState.currentWord}`;
}

// TRIVIA GAME LOGIC
function resetTrivia() {
  document.querySelector('#trivia-game .trivia-setup').style.display = 'block';
  document.getElementById('trivia-game-area').style.display = 'none';
  document.getElementById('trivia-result').style.display = 'none';
  
  triviaState.currentQuestion = 0;
  triviaState.score = 0;
  triviaState.correctAnswers = 0;
  triviaState.questions = [];
  triviaState.timeLeft = 30;
  triviaState.gameEnded = false;
  
  if (triviaState.timerInterval) {
    clearInterval(triviaState.timerInterval);
    triviaState.timerInterval = null;
  }
}

document.getElementById('trivia-theme').addEventListener('change', (e) => {
  triviaState.selectedTheme = e.target.value;
});

document.querySelectorAll('.trivia-difficulty-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.trivia-difficulty-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    triviaState.difficulty = this.dataset.difficulty;
  });
});

document.getElementById('start-trivia').addEventListener('click', startTrivia);
document.getElementById('trivia-skip').addEventListener('click', skipQuestion);
document.getElementById('trivia-quit').addEventListener('click', endTrivia);
document.getElementById('trivia-play-again').addEventListener('click', startTrivia);
document.getElementById('trivia-back-menu').addEventListener('click', resetTrivia);

function startTrivia() {
  const themeQuestions = triviaData[triviaState.selectedTheme];
  let questions = [];
  
  if (themeQuestions[triviaState.difficulty]) {
    questions = [...themeQuestions[triviaState.difficulty]];
  } else {
    questions = [...themeQuestions.facil];
  }
  
  triviaState.questions = questions.sort(() => Math.random() - 0.5).slice(0, triviaState.totalQuestions);
  triviaState.currentQuestion = 0;
  triviaState.score = 0;
  triviaState.correctAnswers = 0;
  triviaState.gameEnded = false;
  
  document.querySelector('#trivia-game .trivia-setup').style.display = 'none';
  document.getElementById('trivia-game-area').style.display = 'block';
  document.getElementById('trivia-result').style.display = 'none';
  
  showQuestion();
}

function showQuestion() {
  if (triviaState.currentQuestion >= triviaState.questions.length) {
    endTrivia();
    return;
  }
  
  const question = triviaState.questions[triviaState.currentQuestion];
  
  document.getElementById('trivia-question-count').textContent = `Pregunta ${triviaState.currentQuestion + 1} de ${triviaState.totalQuestions}`;
  document.getElementById('trivia-score').textContent = `Puntaje: ${triviaState.score}`;
  document.getElementById('trivia-category').textContent = triviaState.selectedTheme.charAt(0).toUpperCase() + triviaState.selectedTheme.slice(1);
  document.getElementById('trivia-question').textContent = question.question;
  
  const answerButtons = document.querySelectorAll('.answer-btn');
  answerButtons.forEach((btn, index) => {
    btn.textContent = question.answers[index];
    btn.className = 'answer-btn';
    btn.disabled = false;
    btn.onclick = () => selectAnswer(index);
  });
  
  startTriviaTimer();
}

function startTriviaTimer() {
  triviaState.timeLeft = 30;
  updateTriviaTimer();
  
  triviaState.timerInterval = setInterval(() => {
    triviaState.timeLeft--;
    updateTriviaTimer();
    
    if (triviaState.timeLeft <= 0) {
      clearInterval(triviaState.timerInterval);
      selectAnswer(-1); // Time's up
    }
  }, 1000);
}

function updateTriviaTimer() {
  document.getElementById('trivia-timer').textContent = `Tiempo: ${triviaState.timeLeft}s`;
}

function selectAnswer(selectedIndex) {
  if (triviaState.gameEnded) return;
  
  clearInterval(triviaState.timerInterval);
  
  const question = triviaState.questions[triviaState.currentQuestion];
  const answerButtons = document.querySelectorAll('.answer-btn');
  
  answerButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && selectedIndex !== question.correct) {
      btn.classList.add('incorrect');
    }
    btn.classList.add('disabled');
  });
  
  if (selectedIndex === question.correct) {
    triviaState.correctAnswers++;
    triviaState.score += 100;
  }
  
  setTimeout(() => {
    triviaState.currentQuestion++;
    showQuestion();
  }, 2000);
}

function skipQuestion() {
  if (triviaState.gameEnded) return;
  
  clearInterval(triviaState.timerInterval);
  triviaState.currentQuestion++;
  showQuestion();
}

function endTrivia() {
  triviaState.gameEnded = true;
  clearInterval(triviaState.timerInterval);
  
  document.getElementById('trivia-game-area').style.display = 'none';
  document.getElementById('trivia-result').style.display = 'block';
  
  const percentage = Math.round((triviaState.correctAnswers / triviaState.totalQuestions) * 100);
  
  document.getElementById('trivia-final-score').textContent = `Puntaje Final: ${triviaState.score}`;
  document.getElementById('trivia-correct-answers').textContent = `Respuestas Correctas: ${triviaState.correctAnswers}/${triviaState.totalQuestions}`;
  document.getElementById('trivia-percentage').textContent = `Porcentaje: ${percentage}%`;
  
  let message = '';
  if (percentage >= 90) {
    message = '¡Excelente! Eres un verdadero genio. ¡Sigue así!';
  } else if (percentage >= 70) {
    message = '¡Muy bien! Tienes un gran conocimiento. ¡Continúa aprendiendo!';
  } else if (percentage >= 50) {
    message = '¡Buen trabajo! Vas por buen camino. ¡Sigue practicando!';
  } else {
    message = '¡No te desanimes! Cada error es una oportunidad de aprender. ¡Inténtalo de nuevo!';
  }
  
  document.getElementById('trivia-message').textContent = message;
  createConfetti();
}

// Utility Functions
function createConfetti() {
  const confettiContainers = document.querySelectorAll('.confetti');
  
  confettiContainers.forEach(container => {
    container.innerHTML = '';
    
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = `${Math.random() * 5 + 3}px`;
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.position = 'absolute';
      confetti.style.top = `-10px`;
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.opacity = Math.random() + 0.5;
      confetti.style.transformOrigin = 'center';
      confetti.style.borderRadius = '2px';
      confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
      
      confetti.style.setProperty('--rotation', `${Math.random() * 360}deg`);
      confetti.style.setProperty('--translation', `${Math.random() * 100 - 50}px`);
      
      container.appendChild(confetti);
    }
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  showGame('memorama');
});