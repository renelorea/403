// Data for each topic
const chatbotData = {
  futbol: {
    icon: "⚽",
    name: "Fútbol",
    greeting: "¡Hola! Soy tu experto en fútbol. Puedes preguntarme sobre jugadores, equipos, torneos y más. ¿Qué te gustaría saber?",
    questions: [
      {
        question: "¿Quién es considerado el mejor jugador de fútbol de todos los tiempos?",
        answer: "Es un debate constante, pero Lionel Messi, Cristiano Ronaldo, Diego Maradona y Pelé son frecuentemente mencionados como los mejores de todos los tiempos. Messi ha ganado 8 Balones de Oro, mientras que Cristiano Ronaldo destaca por su consistencia. Maradona y Pelé definieron eras anteriores del fútbol."
      },
      {
        question: "¿Cuántos mundiales ha ganado Brasil?",
        answer: "Brasil ha ganado la Copa Mundial de la FIFA en cinco ocasiones: 1958, 1962, 1970, 1994 y 2002, lo que lo convierte en el país más exitoso en la historia del torneo."
      },
      {
        question: "¿Qué es el VAR en el fútbol?",
        answer: "El VAR (Video Assistant Referee) es un sistema de asistencia arbitral por video introducido para ayudar a los árbitros a tomar decisiones correctas. Se utiliza principalmente para revisar goles, penaltis, tarjetas rojas directas y casos de identidad equivocada."
      },
      {
        question: "¿Cuánto dura un partido de fútbol?",
        answer: "Un partido de fútbol estándar consta de dos tiempos de 45 minutos cada uno, con un descanso de 15 minutos entre ellos. El árbitro puede añadir tiempo adicional (tiempo de descuento) para compensar interrupciones."
      },
      {
        question: "¿Cuál es el equipo con más Champions League?",
        answer: "El Real Madrid es el club con más títulos de la UEFA Champions League (anteriormente Copa de Europa), habiendo ganado el torneo en 14 ocasiones, seguido por el AC Milan con 7 títulos."
      },
      {
        question: "¿Qué significa la regla del fuera de juego?",
        answer: "Un jugador está en posición de fuera de juego si está más cerca de la línea de meta contraria que el balón y el penúltimo adversario cuando el balón es jugado hacia él. Sin embargo, no es infracción estar en posición de fuera de juego, sino participar activamente en el juego desde esa posición."
      },
      {
        question: "¿Quién ganó el último Mundial de fútbol?",
        answer: "Argentina ganó la Copa Mundial de la FIFA 2022 en Qatar, venciendo a Francia en la final por penaltis tras un empate 3-3 en el tiempo reglamentario y la prórroga, con Lionel Messi como figura destacada."
      },
      {
        question: "¿Qué es el tiki-taka?",
        answer: "El tiki-taka es un estilo de juego caracterizado por pases cortos, posesión de balón y movimiento constante de los jugadores. Fue popularizado por el FC Barcelona y la selección española entre 2008 y 2012, cuando dominaron el fútbol mundial."
      },
      {
        question: "¿Cuántos jugadores hay en un equipo de fútbol?",
        answer: "Un equipo de fútbol tiene 11 jugadores en el campo (incluido el portero). Los equipos pueden hacer hasta 3-5 sustituciones durante un partido, dependiendo de la competición. En el banquillo suelen estar entre 7 y 12 suplentes."
      },
      {
        question: "¿Qué es el Balón de Oro?",
        answer: "El Balón de Oro es un premio anual otorgado por la revista francesa France Football al mejor futbolista del año. Es considerado uno de los reconocimientos individuales más prestigiosos en el fútbol mundial. Lionel Messi es quien más veces lo ha ganado, con 8 Balones de Oro."
      }
    ]
  },
  redes: {
    icon: "📱",
    name: "Redes Sociales",
    greeting: "¡Hola! Soy especialista en redes sociales. Puedo responder tus dudas sobre plataformas, estrategias de contenido, algoritmos y más. ¿Qué quieres saber?",
    questions: [
      {
        question: "¿Cuál es la red social más usada en el mundo?",
        answer: "Facebook sigue siendo la red social más usada en el mundo con aproximadamente 3 mil millones de usuarios activos mensuales, seguida por YouTube, WhatsApp, Instagram y WeChat. Sin embargo, TikTok ha experimentado el crecimiento más rápido en los últimos años."
      },
      {
        question: "¿Qué es un algoritmo en redes sociales?",
        answer: "Un algoritmo en redes sociales es un conjunto de reglas y cálculos que determina qué contenido ve cada usuario. Analiza factores como interacciones previas, tiempo de visualización, relaciones entre usuarios y tendencias para personalizar el feed de cada persona."
      },
      {
        question: "¿Cómo puedo aumentar mis seguidores en Instagram?",
        answer: "Para aumentar seguidores en Instagram: 1) Publica contenido de calidad consistentemente, 2) Utiliza hashtags relevantes, 3) Interactúa con tu audiencia y otras cuentas, 4) Optimiza tu biografía y perfil, 5) Publica en horarios de mayor actividad, 6) Colabora con otros creadores, y 7) Utiliza las diferentes funciones de la plataforma (Reels, Stories, etc.)."
      },
      {
        question: "¿Qué es el engagement en redes sociales?",
        answer: "El engagement se refiere al nivel de interacción que recibe tu contenido, incluyendo likes, comentarios, compartidos, guardados y clics. Es una métrica importante porque indica qué tan involucrada está tu audiencia con tu contenido y afecta directamente la visibilidad en los algoritmos."
      },
      {
        question: "¿Cuál es la mejor hora para publicar en redes sociales?",
        answer: "La mejor hora para publicar varía según la plataforma y tu audiencia específica. En general, para Instagram y Facebook suele ser entre 10-11 AM y 7-9 PM, para Twitter entre 8 AM y 4 PM, y para LinkedIn entre 8-10 AM y 1-2 PM en días laborables. Lo ideal es analizar tus propias estadísticas para identificar cuándo tu audiencia está más activa."
      },
      {
        question: "¿Qué son los Reels de Instagram?",
        answer: "Los Reels de Instagram son videos cortos (de hasta 90 segundos) que puedes editar con música, efectos y otras herramientas creativas. Fueron introducidos como respuesta a TikTok y son promocionados activamente por el algoritmo de Instagram, lo que los hace una excelente herramienta para ganar visibilidad y alcance."
      },
      {
        question: "¿Cómo funciona el algoritmo de TikTok?",
        answer: "El algoritmo de TikTok analiza muchos factores, incluyendo interacciones (likes, comentarios, compartidos), tiempo de visualización (si ves el video completo), señales de contenido (hashtags, sonidos, descripciones) y datos del dispositivo. Es conocido por su capacidad para identificar rápidamente preferencias y mostrar contenido similar, incluso de creadores con pocos seguidores."
      },
      {
        question: "¿Qué son los hilos en Twitter/X?",
        answer: "Los hilos en Twitter/X son una serie de tweets conectados que permiten explicar ideas más complejas superando el límite de caracteres. Para crear un hilo, escribes un tweet y usas la opción 'Añadir' para seguir la conversación. Son útiles para narrativas largas, tutoriales o explicaciones detalladas manteniendo la conexión entre los mensajes."
      },
      {
        question: "¿Qué es el shadowban en redes sociales?",
        answer: "El shadowban es una restricción parcial invisible donde el contenido de un usuario se limita sin notificarle. Sus publicaciones pueden ser visibles para sus seguidores pero no aparecen en exploraciones, hashtags o recomendaciones. Puede ocurrir por violar directrices, usar demasiados hashtags, actividad inusual o contenido reportado. Las plataformas rara vez confirman oficialmente su existencia."
      },
      {
        question: "¿Cómo proteger mi privacidad en redes sociales?",
        answer: "Para proteger tu privacidad: 1) Revisa y ajusta la configuración de privacidad de cada plataforma, 2) Controla quién puede ver tus publicaciones, 3) Limita la información personal en tu perfil, 4) Acepta solicitudes solo de personas conocidas, 5) Usa contraseñas fuertes y autenticación de dos factores, 6) Evita conectarte a WiFi público sin VPN, 7) Revisa regularmente las aplicaciones conectadas a tus cuentas, y 8) Piensa antes de compartir ubicación o información sensible."
      }
    ]
  },
  algebra: {
    icon: "📐",
    name: "Álgebra",
    greeting: "¡Hola! Soy tu asistente para temas de álgebra. Puedo ayudarte con ecuaciones, funciones, polinomios y más. ¿Qué duda matemática tienes hoy?",
    questions: [
      {
        question: "¿Qué es una ecuación lineal?",
        answer: "Una ecuación lineal es una expresión algebraica donde la variable tiene exponente 1, con la forma general ax + b = c, donde a, b y c son constantes y a ≠ 0. Por ejemplo: 2x + 3 = 7. Para resolverla, despejamos la variable x mediante operaciones algebraicas equivalentes."
      },
      {
        question: "¿Cómo se resuelve un sistema de ecuaciones por sustitución?",
        answer: "Para resolver un sistema por sustitución: 1) Despeja una variable en una ecuación (por ejemplo, x = expresión), 2) Sustituye esta expresión en la otra ecuación, 3) Resuelve la ecuación resultante para encontrar el valor de una variable, 4) Sustituye este valor en la expresión del paso 1 para encontrar la otra variable, 5) Verifica la solución en ambas ecuaciones originales."
      },
      {
        question: "¿Qué son los polinomios?",
        answer: "Un polinomio es una expresión algebraica formada por una suma de términos, donde cada término consiste en una constante (coeficiente) multiplicada por una o más variables elevadas a exponentes enteros no negativos. Por ejemplo: 3x² + 4x - 5. Los polinomios se clasifican por grado (el mayor exponente presente) y número de términos (monomio, binomio, trinomio, etc.)."
      },
      {
        question: "¿Cómo se factoriza un trinomio cuadrado perfecto?",
        answer: "Un trinomio cuadrado perfecto tiene la forma a² + 2ab + b² o a² - 2ab + b², y se factoriza como (a + b)² o (a - b)² respectivamente. Para identificarlo, el término medio debe ser exactamente 2 veces el producto de las raíces cuadradas de los términos extremos, y estos últimos deben ser cuadrados perfectos. Ejemplo: x² + 6x + 9 = (x + 3)²."
      },
      {
        question: "¿Qué es la fórmula cuadrática y cuándo se usa?",
        answer: "La fórmula cuadrática se usa para resolver ecuaciones cuadráticas de la forma ax² + bx + c = 0. La fórmula es: x = (-b ± √(b² - 4ac)) / 2a. El discriminante (b² - 4ac) determina el número de soluciones: si es positivo hay dos soluciones reales, si es cero hay una solución real (raíz doble), y si es negativo hay dos soluciones complejas conjugadas."
      },
      {
        question: "¿Cómo se multiplican dos binomios?",
        answer: "Para multiplicar dos binomios (a + b)(c + d), puedes usar el método FOIL: Primeros términos (a×c), Externos (a×d), Internos (b×c), Últimos (b×d). Luego sumas todos los productos: ac + ad + bc + bd. Por ejemplo: (x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6."
      },
      {
        question: "¿Qué es una función en álgebra?",
        answer: "Una función es una relación entre dos conjuntos (dominio y codominio) donde a cada elemento del dominio le corresponde exactamente un elemento del codominio. Se expresa como f(x) = expresión, donde x es la variable independiente. El dominio es el conjunto de valores válidos para x, y el rango (o imagen) es el conjunto de valores resultantes de f(x)."
      },
      {
        question: "¿Cómo se calcula el determinante de una matriz 2×2?",
        answer: "Para una matriz 2×2 [ a b; c d ], el determinante se calcula como ad - bc. Es decir, multiplicas los elementos de la diagonal principal, luego los de la diagonal secundaria, y restas el segundo producto del primero. El determinante es útil para resolver sistemas de ecuaciones, calcular inversas y verificar si una matriz es invertible."
      },
      {
        question: "¿Qué son los números complejos?",
        answer: "Los números complejos son extensiones de los números reales que incluyen el elemento i (unidad imaginaria), donde i² = -1. Un número complejo tiene la forma a + bi, donde a es la parte real y b es la parte imaginaria. Estos números permiten resolver ecuaciones como x² = -1 y son fundamentales en álgebra, ingeniería eléctrica, física cuántica y muchos otros campos."
      },
      {
        question: "¿Qué son las identidades trigonométricas?",
        answer: "Las identidades trigonométricas son ecuaciones que relacionan funciones trigonométricas. Las fundamentales incluyen: sin²θ + cos²θ = 1, tanθ = sinθ/cosθ, y sec²θ = 1 + tan²θ. También existen identidades de suma/resta (sin(A+B) = sinA·cosB + cosA·sinB), duplicación (sin2θ = 2sinθ·cosθ) y mitad de ángulo. Son útiles para simplificar expresiones y resolver ecuaciones trigonométricas."
      }
    ]
  },
  maquillaje: {
    icon: "💄",
    name: "Maquillaje",
    greeting: "¡Hola! Soy tu asesora de maquillaje. Puedo ayudarte con técnicas, productos, tendencias y consejos para diferentes ocasiones. ¿Qué te gustaría saber sobre maquillaje?",
    questions: [
      {
        question: "¿Cuál es el orden correcto para aplicar productos de maquillaje?",
        answer: "El orden recomendado es: 1) Skincare (limpiador, tónico, hidratante), 2) Primer/prebase, 3) Corrector para imperfecciones específicas, 4) Base/foundation, 5) Corrector para ojeras, 6) Polvo para sellar, 7) Contorno, rubor e iluminador, 8) Cejas, 9) Sombras de ojos, 10) Delineador, 11) Máscara de pestañas, 12) Labios, 13) Spray fijador. Este orden puede ajustarse según tus necesidades específicas."
      },
      {
        question: "¿Cómo elegir el tono correcto de base para mi piel?",
        answer: "Para elegir el tono correcto: 1) Identifica tu subtono (cálido, frío o neutral) observando el color de tus venas o cómo te sienta la joyería, 2) Prueba la base en la mandíbula o cuello, no en la mano, 3) Observa el color con luz natural, 4) Espera unos minutos para ver cómo se oxida en tu piel, 5) Si estás entre dos tonos, generalmente es mejor elegir el más claro y ajustar con bronceador si es necesario."
      },
      {
        question: "¿Cuál es la diferencia entre maquillaje mate y luminoso?",
        answer: "El maquillaje mate no tiene brillo, ofrece un acabado plano y opaco ideal para pieles grasas pues controla la producción de sebo y dura más tiempo. El maquillaje luminoso contiene partículas reflectantes que dan un efecto 'glow', aportando luminosidad y aspecto más hidratado, beneficiando a pieles secas o maduras. La elección depende del tipo de piel, ocasión y preferencia personal."
      },
      {
        question: "¿Cómo hacer que el maquillaje dure todo el día?",
        answer: "Para mayor duración: 1) Usa primer específico para tu tipo de piel, 2) Aplica productos en capas finas, 3) Sella la base con polvo traslúcido, 4) Usa productos waterproof para ojos, 5) Considera técnicas como 'baking' en zonas propensas a moverse, 6) Usa un spray fijador al final, 7) Lleva polvos o papeles matificantes para retoques, 8) Evita tocar tu rostro durante el día, 9) Para eventos especiales, considera productos de larga duración específicos."
      },
      {
        question: "¿Cómo hacer un delineado de ojos para principiantes?",
        answer: "Para principiantes: 1) Comienza con un lápiz de ojos (más fácil que el líquido), 2) Dibuja puntos pequeños a lo largo de la línea de las pestañas y únelos, 3) Mantén los ojos semiabiertos al aplicar para ver cómo quedará, 4) Usa cinta adhesiva como guía o una tarjeta para crear la cola, 5) Para más precisión, utiliza un pincel angular fino y sombra negra antes de intentar el delineador líquido, 6) Practica diferentes grosores para encontrar lo que favorece a tu forma de ojo."
      },
      {
        question: "¿Qué técnica de contorno es mejor para estilizar el rostro?",
        answer: "La técnica de contorno debe adaptarse a tu forma de rostro. Generalmente: 1) Aplica producto más oscuro (2 tonos más que tu piel) en sienes, bajo pómulos, línea de la mandíbula y lados de la nariz, 2) Ilumina centro de frente, bajo ojos, centro de nariz, arco de cupido y mentón, 3) Difumina bien las líneas para un aspecto natural, 4) Para principiantes, los productos en crema son más fáciles de difuminar que los polvos, 5) Estudia tu forma facial para determinar dónde necesitas crear sombras o resaltar."
      },
      {
        question: "¿Qué brochas son esenciales para un kit básico de maquillaje?",
        answer: "Brochas esenciales: 1) Brocha para base (densa y redondeada), 2) Brocha para polvos (grande y esponjosa), 3) Brocha para rubor (mediana y angulada), 4) Brocha para contorno (angulada y densa), 5) Brocha para iluminador (en abanico o pequeña y suave), 6) Brochas para sombras (aplicador plano, difuminador y para pliegue), 7) Pincel fino para delineado, 8) Cepillo de cejas, 9) Brocha para labios. La calidad es más importante que la cantidad, invierte en brochas sintéticas de buena calidad que son versátiles y duraderas."
      },
      {
        question: "¿Cómo adaptar el maquillaje según la forma de los ojos?",
        answer: "Para ojos caídos: eleva el delineado y sombras hacia arriba. Para ojos juntos: aplica colores claros en el lagrimal y oscuros en el exterior. Para ojos separados: usa tonos oscuros en el lagrimal y difumina hacia adentro. Para ojos pequeños: usa colores claros, delineado fino y evita líneas oscuras en la línea de agua. Para ojos grandes: puedes usar delineado completo y sombras más intensas. Para ojos redondos: alarga con sombras oscuras en el exterior. Para ojos hundidos: usa tonos claros en el párpado móvil y evita exceso de oscuro en el pliegue."
      },
      {
        question: "¿Qué productos no deben faltar en un maquillaje para principiantes?",
        answer: "Productos esenciales para principiantes: 1) Base de cobertura media con acabado natural, 2) Corrector para ojeras e imperfecciones, 3) Polvo traslúcido para sellar, 4) Paleta neutra de sombras con tonos mate, 5) Delineador negro en lápiz (más fácil que el líquido), 6) Máscara de pestañas negra, 7) Producto para cejas (lápiz o pomada), 8) Rubor en tono natural, 9) Labial nude o rosado, 10) Brochas básicas (para base, polvos y ojos), 11) Desmaquillante eficaz. Comienza con productos versátiles y ve añadiendo según domines las técnicas."
      },
      {
        question: "¿Cómo adaptar el maquillaje para una sesión de fotos?",
        answer: "Para sesiones fotográficas: 1) Usa base mate o semi-mate pues los acabados muy luminosos pueden verse grasosos, 2) Aplica más producto del habitual pero bien difuminado, 3) Intensifica contorno y rubor ya que las cámaras tienden a aplanar los rasgos, 4) Evita productos con SPF que pueden causar flashback (efecto blanquecino), 5) Define bien las cejas, 6) Usa colores más vibrantes de lo normal, 7) Sella todo con polvo traslúcido sin sílice, 8) Considera el tipo de iluminación y ajusta el maquillaje (luz natural vs. estudio), 9) Haz pruebas previas con fotos."
      }
    ]
  },
  alimentacion: {
    icon: "🥗",
    name: "Alimentación",
    greeting: "¡Hola! Soy especialista en nutrición y alimentación. Puedo ayudarte con dudas sobre dietas, nutrientes, alimentos saludables y consejos para mejorar tus hábitos alimenticios. ¿Qué te gustaría saber?",
    questions: [
      {
        question: "¿Cuáles son los principales grupos de alimentos que debo incluir en mi dieta?",
        answer: "Una dieta equilibrada debe incluir: 1) Frutas y verduras (idealmente ocupando la mitad del plato), 2) Proteínas de calidad (carnes magras, pescado, huevos, legumbres), 3) Cereales integrales (arroz, quinoa, avena, pan integral), 4) Lácteos o alternativas fortificadas, 5) Grasas saludables (aguacate, frutos secos, aceite de oliva). Es importante la variedad de colores en frutas y verduras, y moderar el consumo de alimentos procesados, azúcares añadidos y grasas saturadas."
      },
      {
        question: "¿Cuánta agua debo beber al día?",
        answer: "La recomendación general es aproximadamente 2 litros o 8 vasos de agua al día, pero las necesidades varían según el peso, actividad física, clima y estado de salud. Una buena regla es 30-35 ml por kg de peso corporal. Observa el color de tu orina (debe ser amarillo claro) como indicador de hidratación. Recuerda que frutas, verduras y otras bebidas también aportan líquidos, aunque el agua es la mejor opción para hidratarse."
      },
      {
        question: "¿Qué son las calorías y cuántas debo consumir?",
        answer: "Las calorías son unidades de energía en los alimentos. Las necesidades calóricas diarias varían según edad, sexo, peso, altura y nivel de actividad. En promedio, una mujer adulta necesita unas 2000 kcal/día y un hombre unas 2500 kcal/día. Para mantener peso, debes consumir tantas calorías como gastas; para perder peso, menos; para ganar, más. Pero la calidad nutricional es tan importante como la cantidad, ya que 200 calorías de verduras aportan más nutrientes que 200 calorías de azúcar."
      },
      {
        question: "¿Qué es mejor, desayunar o hacer ayuno intermitente?",
        answer: "Ambos enfoques pueden ser beneficiosos dependiendo de la persona. El desayuno tradicional puede mejorar el rendimiento cognitivo matutino y prevenir el exceso de ingesta más tarde. El ayuno intermitente (periodos de alimentación restringidos, como comer solo durante 8 horas) puede ayudar a controlar el peso y mejorar marcadores metabólicos en algunas personas. Lo importante es la consistencia y escuchar a tu cuerpo. Si pruebas el ayuno, introdúcelo gradualmente y consulta a un profesional si tienes condiciones de salud."
      },
      {
        question: "¿Son malos los carbohidratos?",
        answer: "Los carbohidratos no son inherentemente malos, pero su calidad importa. Los carbohidratos complejos e integrales (verduras, legumbres, granos enteros) aportan fibra, vitaminas y minerales, y se digieren lentamente, manteniendo estable el azúcar en sangre. Los carbohidratos simples o refinados (azúcares, harinas refinadas) pueden causar picos de glucosa y tienen menor valor nutricional. La cantidad adecuada depende de tu nivel de actividad física, objetivos y metabolismo individual."
      },
      {
        question: "¿Cómo puedo aumentar mi ingesta de proteínas siendo vegetariano/vegano?",
        answer: "Buenas fuentes vegetales de proteínas incluyen: legumbres (lentejas, garbanzos, frijoles), tofu y tempeh, seitan, quinoa, amaranto, semillas (chía, cáñamo, calabaza), frutos secos, edamame, productos de soya, spirulina y proteínas vegetales en polvo. Para maximizar el valor biológico, combina diferentes fuentes en una misma comida (por ejemplo, arroz con lentejas). Los vegetarianos (no veganos) también pueden incluir huevos y lácteos. Considera suplementos de B12 si sigues una dieta vegana estricta."
      },
      {
        question: "¿Qué son las grasas trans y por qué debo evitarlas?",
        answer: "Las grasas trans industriales son aceites vegetales hidrogenados artificialmente para aumentar su estabilidad y vida útil. A diferencia de otras grasas, incluso en pequeñas cantidades aumentan significativamente el riesgo de enfermedades cardiovasculares al elevar el colesterol LDL (malo) y reducir el HDL (bueno). Se encuentran principalmente en productos horneados industriales, frituras, margarinas duras, cremas vegetales y alimentos procesados. Lee las etiquetas y evita productos con 'aceites parcialmente hidrogenados' o 'grasas hidrogenadas'."
      },
      {
        question: "¿Qué alimentos ayudan a fortalecer el sistema inmunológico?",
        answer: "Para fortalecer el sistema inmune, incluye: 1) Frutas y verduras ricas en vitamina C (cítricos, kiwi, pimientos), 2) Alimentos con zinc (mariscos, carnes, legumbres), 3) Fuentes de vitamina D (pescados grasos, huevos, exposición solar moderada), 4) Alimentos con vitamina E (frutos secos, semillas, aceites vegetales), 5) Probióticos (yogur, kéfir, alimentos fermentados), 6) Alimentos antiinflamatorios (cúrcuma, jengibre, bayas), 7) Ajo y cebolla por sus propiedades antimicrobianas, 8) Setas como shiitake y maitake. Además, mantén una hidratación adecuada y modera el consumo de alcohol y azúcares refinados."
      },
      {
        question: "¿Cómo leer correctamente las etiquetas nutricionales?",
        answer: "Para leer etiquetas: 1) Revisa el tamaño de la porción (todos los valores se basan en esto), 2) Observa las calorías por porción, 3) Limita grasas saturadas, grasas trans, sodio y azúcares añadidos, 4) Busca alimentos con más fibra, proteínas, vitaminas y minerales, 5) Revisa el % del Valor Diario (%VD) - 5% o menos es bajo, 20% o más es alto, 6) Examina la lista de ingredientes (aparecen en orden descendente por peso), 7) Ten cuidado con términos como 'natural', 'light' o 'bajo en grasa' que pueden ser engañosos, 8) Compara productos similares para hacer mejores elecciones."
      },
      {
        question: "¿Cuáles son los mejores alimentos para después de hacer ejercicio?",
        answer: "Después del ejercicio, es ideal consumir: 1) Proteínas para reparar el tejido muscular (pollo, pescado, huevos, lácteos, legumbres o proteína en polvo), 2) Carbohidratos para reponer el glucógeno muscular (frutas, arroz, avena, batata), 3) Líquidos y electrolitos para rehidratarse (agua, bebidas deportivas naturales, agua de coco). Buenas opciones post-entrenamiento incluyen: batido de proteínas con plátano, yogur con frutas y granola, wrap de pavo con verduras, huevos revueltos con tostada integral, o salmón con arroz y verduras. Consume estos alimentos idealmente dentro de los 30-60 minutos posteriores al ejercicio."
      }
    ]
  },
  gym: {
    icon: "💪",
    name: "Gym",
    greeting: "¡Hola! Soy tu entrenador virtual. Puedo responder tus dudas sobre ejercicios, rutinas, nutrición deportiva y consejos para alcanzar tus objetivos fitness. ¿En qué puedo ayudarte hoy?",
    questions: [
      {
        question: "¿Cuántas veces por semana debo entrenar para ver resultados?",
        answer: "La frecuencia ideal depende de tus objetivos y nivel de experiencia. Para resultados generales, 3-4 sesiones semanales de 45-60 minutos son suficientes para la mayoría. Principiantes pueden ver mejoras con 2-3 días. Para objetivos específicos como competición o ganancia muscular significativa, 4-6 días pueden ser necesarios. Lo más importante es la consistencia a largo plazo y permitir recuperación adecuada (24-48 horas por grupo muscular). Recuerda que el descanso es cuando ocurre la adaptación y crecimiento muscular."
      },
      {
        question: "¿Es mejor hacer cardio o pesas para perder peso?",
        answer: "La combinación de ambos es ideal. El entrenamiento con pesas construye masa muscular, que aumenta tu metabolismo basal (quemas más calorías en reposo). El cardio quema más calorías durante la actividad y mejora la salud cardiovascular. Una estrategia efectiva es realizar entrenamiento con pesas 3-4 veces por semana, incorporando 2-3 sesiones de cardio (pueden ser los mismos días o alternados). El entrenamiento HIIT (alta intensidad por intervalos) ofrece beneficios de ambos mundos en sesiones más cortas. Recuerda que la nutrición es el factor más determinante para la pérdida de peso."
      },
      {
        question: "¿Cómo puedo aumentar mi masa muscular?",
        answer: "Para aumentar masa muscular: 1) Entrena con pesas pesadas (70-85% de tu máximo) con 8-12 repeticiones por serie, 2) Haz 3-4 series por ejercicio enfocándote en ejercicios compuestos (sentadillas, peso muerto, press de banca, dominadas), 3) Asegura un superávit calórico moderado (200-500 calorías extra diarias), 4) Consume suficiente proteína (1.6-2.2g por kg de peso corporal), 5) Permite recuperación adecuada (48h por grupo muscular), 6) Duerme 7-9 horas (crucial para la recuperación y hormona de crecimiento), 7) Incrementa progresivamente el peso o repeticiones (sobrecarga progresiva), 8) Mantén consistencia a largo plazo."
      },
      {
        question: "¿Qué debo comer antes y después de entrenar?",
        answer: "Antes del entrenamiento (1-2 horas antes): Consume carbohidratos de digestión moderada para energía (avena, plátano, arroz) y algo de proteína (yogur, huevo, proteína en polvo). Evita grasas y fibra excesiva. Para sesiones matutinas cortas, puedes entrenar en ayunas si te sientes bien.\n\nDespués del entrenamiento (dentro de 30-60 min): Combina proteínas (20-40g) para reparación muscular (pollo, huevos, proteína en polvo) con carbohidratos (arroz, patata, fruta) para reponer glucógeno. La ventana anabólica no es tan estricta como se pensaba, pero alimentarte pronto optimiza la recuperación."
      },
      {
        question: "¿Cuáles son los mejores ejercicios para abdominales definidos?",
        answer: "Los abdominales definidos dependen principalmente de un bajo porcentaje de grasa corporal (dieta adecuada). Para desarrollar fuerza y musculatura abdominal: 1) Ejercicios para abdomen superior: crunches, elevaciones de piernas en banco declinado, rueda abdominal, 2) Para abdomen inferior: elevaciones de piernas colgado, tijeras, hollow holds, 3) Para oblicuos: russian twists, side planks, crunches con rotación, 4) Para core completo: planchas (diversos tipos), ejercicios anti-rotación con polea, deadbugs. Entrena abdominales 2-3 veces por semana con alta intensidad y variedad de ejercicios, combinando movimientos dinámicos e isométricos."
      },
      {
        question: "¿Cómo puedo mejorar mi resistencia cardiovascular?",
        answer: "Para mejorar resistencia cardiovascular: 1) Entrenamiento continuo de intensidad moderada (correr, nadar, ciclismo) 30-60 min, 3-5 veces/semana, 2) HIIT (intervalos de alta intensidad seguidos de descanso activo) 2-3 veces/semana, 3) Entrenamiento por intervalos (alterna velocidades moderadas con rápidas), 4) Ejercicios de circuito (combina cardio con fuerza), 5) Incrementa gradualmente duración, intensidad o frecuencia (no más del 10% semanal), 6) Varía actividades para prevenir lesiones y estancamiento, 7) Asegura recuperación adecuada entre sesiones intensas, 8) Mejora capacidad aeróbica y anaeróbica para resultados completos."
      },
      {
        question: "¿Es mejor entrenar en ayunas?",
        answer: "Entrenar en ayunas puede aumentar la oxidación de grasas durante el ejercicio, pero no necesariamente resulta en mayor pérdida de grasa total. Ventajas: mayor uso de grasa como combustible y posible mejora de sensibilidad a insulina. Desventajas: posible pérdida de músculo durante ejercicios intensos, menor rendimiento en sesiones de alta intensidad, y mayor sensación de fatiga. Para cardio ligero-moderado puede funcionar bien, pero para entrenamiento con pesas o HIIT intenso, es generalmente mejor tener algo de combustible. La decisión debe basarse en tus objetivos, preferencias personales y cómo te sientes. Lo más importante es la consistencia en tu régimen total de entrenamiento y nutrición."
      },
      {
        question: "¿Cómo evitar lesiones al hacer ejercicio?",
        answer: "Para prevenir lesiones: 1) Realiza calentamiento adecuado (5-10 min cardiovascular ligero seguido de movilidad específica), 2) Aprende técnica correcta (considera un entrenador personal inicialmente), 3) Progresa gradualmente (no aumentes peso/distancia/intensidad más del 10% semanal), 4) Incluye días de recuperación y descanso activo, 5) Incorpora entrenamiento de movilidad y flexibilidad regularmente, 6) Usa equipo adecuado y calzado apropiado para tu actividad, 7) Escucha a tu cuerpo (diferencia entre molestia muscular y dolor de lesión), 8) Mantén buena hidratación y nutrición, 9) Trabaja en estabilidad central y músculos estabilizadores, 10) Considera descansar o modificar ejercicios si experimentas dolor persistente."
      },
      {
        question: "¿Cuál es la mejor rutina para principiantes?",
        answer: "Una rutina ideal para principiantes es full-body (cuerpo completo) 3 veces por semana con descanso entre días. Incluye: 1-2 ejercicios por grupo muscular principal, 2-3 series, 10-15 repeticiones, enfocándote en técnica correcta. Ejemplo de rutina:\n\nDía 1, 3 y 5: Sentadillas, press de banca, remo con mancuernas, press de hombros, curl de bíceps, extensiones de tríceps, y plancha abdominal.\n\nDía 2, 4, 6: Descanso o cardio ligero/flexibilidad.\n\nDía 7: Descanso completo.\n\nProgresa aumentando repeticiones antes de aumentar peso. Después de 8-12 semanas, considera una rutina más avanzada. Complementa con 5-10 minutos de calentamiento cardiovascular y estiramientos al finalizar."
      },
      {
        question: "¿Cuánta proteína necesito consumir si hago ejercicio regularmente?",
        answer: "Las necesidades proteicas varían según objetivos y tipo de entrenamiento:\n\n- Actividad general/mantenimiento: 1.2-1.4g por kg de peso corporal\n- Pérdida de grasa con preservación muscular: 1.6-2.0g/kg\n- Ganancia muscular/hipertrofia: 1.6-2.2g/kg\n- Deportistas de resistencia: 1.4-1.8g/kg\n- Deportistas de fuerza/potencia: 1.8-2.2g/kg\n\nDistribuye la ingesta a lo largo del día en 4-5 comidas con 20-40g de proteína cada una para optimizar la síntesis proteica. Fuentes recomendadas: carnes magras, pescado, huevos, lácteos, legumbres y complementos proteicos si es necesario. Para la mayoría de personas activas, un rango de 1.6-2.0g/kg es un buen objetivo general."
      }
    ]
  }
};