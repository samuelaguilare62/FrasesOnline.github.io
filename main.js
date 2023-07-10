 let frases = [
  "La vida es el 10% de lo que te sucede y 90% cómo reaccionas a ello.",
  "La felicidad no es algo hecho. Viene de tus propias acciones.",
  "El sonreir es una pequeña cosa que marca una gran diferencia.",
  "Nunca es tarde para ser lo que podrías haber sido.",
  "No dejes para mañana lo que puedes hacer hoy",
  "El éxito es la suma de los pequeños esfuerzos repetidos día tras día.",
  "La confianza en sí mismo es el primer secreto del éxito.",
  "Sé el cambio que deseas ver en el mundo.",
  "La suerte de tu día depende de cómo lo afrontes desde primera hora de la mañana",
  "El amor lo puede todo",
  "La vida es corta, disfrútala al máximo",
  "El éxito no llega por casualidad, hay que trabajarlo.",
  "La paciencia es una virtud",
  "La felicidad está en las pequeñas cosas",
  "La educación es la base del progreso",
  "La honestidad es la mejor política",
  "El respeto es fundamental para convivir en sociedad",
  "La risa es la mejor medicina",
  "El tiempo lo cura todo",
  "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer",
  "Cuando el corazón se decepciona, el alma llora",
  "Siempre parece imposible... hasta que se hace",
  "Sueña como si fueras a vivir para siempre, vive como si fueses a morir hoy",
  "Sé amable, porque toda persona que conoces está librando una gran batalla",
  "Nunca te rindas, el éxito puede estar a la vuelta de la esquina",
  "No te compares con los demás, cada uno tiene su propio camino",
  "La perseverancia es la clave del éxito",
  "Cree en ti mismo, eres capaz de lograr grandes cosas",
  "No te detengas ante los obstáculos, aprende de ellos y sigue adelante",
  "La actitud lo es todo, mantén una actitud positiva frente a la vida",
  "El fracaso es una oportunidad para empezar de nuevo con más experiencia",
  "La creatividad es la inteligencia divirtiéndose",
  "No tengas miedo de pedir ayuda, nadie puede hacerlo todo solo",
  "La gratitud es la llave que abre la puerta de la felicidad",
  "La vida es un regalo, disfrútala sin arrepentimientos",
  "Sigue adelante, incluso cuando sientas que todo está en contra tuya",
  "Aprende de tus errores, pero no te quedes estancado en ellos",
  "La verdadera felicidad no es tener todo, sino ser feliz con lo que tienes",
  "La mente es un poderoso instrumento, úsalo a tu favor",
  "No te preocupes por el pasado o el futuro, enfócate en el presente",
  "Cada día es una nueva oportunidad para ser mejor que ayer",
  "La perseverancia es el camino al éxito, nunca te rindas",
  "La vida es una montaña rusa, disfruta el viaje y aprende de los altibajos",
  "Siempre parece imposible... hasta que se hace"
  ];


 function generarFrase() {
   let fraseContainer = document.getElementById("frase");
   if (frases.length === 0) {
     fraseContainer.innerHTML = "Lo siento, ya no quedan frases disponibles.";
     return;
   }

   let indice = Math.floor(Math.random() * frases.length);
   let frase = frases[indice];
   frases.splice(indice, 1);

   fraseContainer.innerHTML = frase;
 }
 
function mostrarFrase() {
   var opcion = prompt("¿Cómo te sientes hoy?");
   var frasesMotivacionales = [];
 
   switch (opcion.toLowerCase()) {
     case "triste":
  frasesMotivacionales = [
    "Siempre hay una razón para sonreír, encuentra la tuya.",
    "No estás solo/a, cuenta conmigo para lo que necesites.",
    "Las cosas mejorarán, solo necesitas tener paciencia.",
    "La tristeza vuela en las alas del tiempo. Vuela con ella",
    "No te dejes abrumar por la tristeza. Sé fuerte",
    "La vida siempre te sorprenderá con algo mejor. Ánimo",
    "¡Recuerda, todo mejorará!",
    "Lo mejor es lo que sucede y lo bueno está por llegar.",
    "Cada experiencia es necesaria para crecer",
    "Va a ser más difícil antes de que sea más fácil. Pero mejorará. Solo tienes que superarlo",
    "No busques la felicidad en el exterior, búscala en tu interior",
    "A veces la tristeza es inevitable, pero siempre puedes encontrar una salida",
    "Recuerda que el sol siempre vuelve a salir después de la tormenta",
    "Cada día es una oportunidad para empezar de nuevo y dejar la tristeza atrás",
    "No te rindas, eres más fuerte de lo que crees",
    "La tristeza es temporal, pero la fuerza que te da para superarla es para siempre",
    "Sé amable contigo mismo/a y date tiempo para sanar",
    "Las lágrimas pueden limpiar el alma y ayudarte a seguir adelante",
    "No te sientas mal por sentirte triste, es una emoción humana y natural"
  ];
  break;
       case "sad":
       frasesMotivacionales = [
                "Siempre hay una razón para sonreír, encuentra la tuya.",
                "Nunca dejes de soñar, porque los sueños son la base de nuestra creatividad y el motor que nos impulsa a lograr lo que parece imposible.",
                "No estás solo/a, cuenta conmigo para lo que necesites.",
                "Las cosas mejorarán, solo necesitas tener paciencia.",
                "La tristeza vuela en las alas del tiempo. Vuela con ella",
                "No te dejes abrumar por la tristeza. Sé fuerte",
                "La vida siempre te sorprenderá con algo mejor. Ánimo",
                "¡Recuerda, todo mejorará!",
                "Lo mejor es lo que sucede y lo bueno está por llegar.",
                "Cada experiencia es necesaria para crecer",
                "Va a ser más difícil antes de que sea más fácil. Pero mejorará. Solo tienes que superarlo",
                "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito",
                "No hay nada más poderoso que un corazón lleno de determinación",
                "No tengas miedo de la soledad. Es un tiempo en el que te encuentras a ti mismo",
                "No busques la felicidad en el exterior, búscala en tu interior",
                "Cada error te acerca más a la solución, así que sigue adelante y no te rindas"
              ];
       break;
     case "feliz":
       frasesMotivacionales = [
         "¡Sigue así, estás en el camino correcto!",
         "Eres una persona increíble, nunca dejes de serlo.",
         "Disfruta de este momento de felicidad al máximo.",
         "Sueña como si fueras a vivir para siempre, vive como si fueses a morir hoy"
       ];
       break;
     case "enojado":
  frasesMotivacionales = [
    "Respira hondo, cuenta hasta diez y recuerda que todo pasa.",
    "No dejes que la ira te controle, tú eres más fuerte que eso.",
    "Intenta canalizar esa energía en algo positivo.",
    "La paciencia es la clave para superar la ira.",
    "No te rindas ante la ira, sigue adelante.",
    "La ira solo te lastima a ti mismo, no dejes que te consuma.",
    "La ira es como beber veneno y esperar que el otro muera.",
    "No dejes que el enojo arruine tu día, mantén la calma y sigue adelante.",
    "El enojo es una elección, elige la paz y la felicidad.",
    "El enojo es temporal, la felicidad es duradera.",
    "La ira no te llevará a ninguna parte, enfócate en soluciones en lugar de problemas.",
    "A veces lo mejor que puedes hacer es simplemente dejar ir la ira.",
    "El perdón es la mejor manera de liberarte del enojo y la amargura.",
    "Cada vez que te enojes, pregúntate si vale la pena.",
    "La ira es una emoción humana, pero aprende a controlarla antes de que te controle a ti.",
    "El enojo es una señal de que algo no está bien, busca la raíz del problema y resuélvelo.",
    "No permitas que la ira te haga decir cosas de las que te arrepentirás.",
    "La ira es una emoción, pero no es una excusa para comportarse mal.",
    "El enojo no resuelve nada, enfócate en encontrar soluciones.",
    "La ira es como un vaso de agua, cuanto más la agites, más turbia se vuelve."
  ];
  case "enojada":
  frasesMotivacionales = [
    "Respira hondo, cuenta hasta diez y recuerda que todo pasa.",
    "No dejes que la ira te controle, tú eres más fuerte que eso.",
    "Intenta canalizar esa energía en algo positivo.",
    "La paciencia es la clave para superar la ira.",
    "No te rindas ante la ira, sigue adelante.",
    "La ira solo te lastima a ti mismo, no dejes que te consuma.",
    "La ira es como beber veneno y esperar que el otro muera.",
    "No dejes que el enojo arruine tu día, mantén la calma y sigue adelante.",
    "El enojo es una elección, elige la paz y la felicidad.",
    "El enojo es temporal, la felicidad es duradera.",
    "La ira no te llevará a ninguna parte, enfócate en soluciones en lugar de problemas.",
    "A veces lo mejor que puedes hacer es simplemente dejar ir la ira.",
    "El perdón es la mejor manera de liberarte del enojo y la amargura.",
    "Cada vez que te enojes, pregúntate si vale la pena.",
    "La ira es una emoción humana, pero aprende a controlarla antes de que te controle a ti.",
    "El enojo es una señal de que algo no está bien, busca la raíz del problema y resuélvelo.",
    "No permitas que la ira te haga decir cosas de las que te arrepentirás.",
    "La ira es una emoción, pero no es una excusa para comportarse mal.",
    "El enojo no resuelve nada, enfócate en encontrar soluciones.",
    "La ira es como un vaso de agua, cuanto más la agites, más turbia se vuelve."
  ];
       break;
       case "preocupado":
       frasesMotivacionales = [
                "Preocuparse no resolverá tus problemas, actuar sí",
                "Mantén la calma y enfócate en las soluciones",
                "Cada problema tiene una solución, no te rindas",
                "La preocupación es una pérdida de tiempo y energía, mejor utiliza ambos para avanzar",
                "En lugar de (pre)ocuparte… ¡Ocúpate!",
                "Admiro a la gente que vive sin problemas, que mira el mundo con despreocupación. A diferencia de ellos, yo sufro más de la cuenta.",
                "Concéntrese en el presente, no en el futuro.",
                "No permitas que la preocupación te robe la felicidad.",
                "La preocupación no cambia el resultado, pero sí tu actitud.",
                "A veces, las cosas no salen como planeamos, pero todo sucede por una razón.",
                "La vida es un camino lleno de altibajos, pero la actitud que tomas frente a ellos determina tu éxito.",
                "No te preocupes por el mañana, enfócate en el presente y disfruta el momento.",
                "Recuerda que eres más fuerte de lo que piensas y puedes superar cualquier obstáculo.",
                "La preocupación es como una silla mecedora, te mantiene ocupado pero no te lleva a ningún lado.",
                "Mantén la calma, respira profundo y confía en ti mismo/a.",
                "No te preocupes por lo que los demás piensan, sigue tu propio camino y haz lo que te hace feliz.",
                "No dejes que la preocupación te impida ver todas las oportunidades que tienes frente a ti.",
                "Cada problema es una oportunidad para aprender y crecer.",
                "La preocupación es como una nube que oscurece tu mente, pero siempre hay un rayo de sol detrás de ella.",
                "Enfócate en lo que sí puedes controlar y deja ir lo que no está en tus manos."
              ];
             break;
             case "preocupada":
  frasesMotivacionales = [
    "No te preocupes por el mañana, ocúpate del hoy y el mañana se ocupará de sí mismo.",
    "La preocupación no vacía el mañana de su tristeza, sino que vacía el hoy de su fuerza.",
    "No te preocupes por lo que no puedes controlar. Céntrate en lo que sí puedes controlar.",
    "Preocuparse es como una mecedora: te da algo que hacer, pero no te lleva a ninguna parte.",
    "No hay problema tan grande que no pueda ser resuelto.",
    "No te preocupes por fracasar, preocúpate por las oportunidades que pierdes al no intentarlo.",
    "No dejes que tus preocupaciones te dominen. Enfócate en lo que puedes hacer ahora mismo.",
    "Cada problema tiene una solución. No te rindas antes de encontrarla.",
    "No te preocupes por lo que otros piensan de ti. Sólo preocúpate por lo que piensas de ti mismo.",
    "La preocupación es una pérdida de tiempo y energía. Enfócate en soluciones en lugar de problemas."
  ];
  break;
  case "asustado":
  frasesMotivacionales = [
    "No tengas miedo a fallar. Ten miedo a no intentarlo.",
    "El miedo es sólo una ilusión. Supéralo y verás que no hay nada que temer.",
    "No dejes que tus miedos te impidan alcanzar tus metas.",
    "A veces el miedo es la señal de que estás haciendo algo que realmente importa.",
    "No dejes que el miedo te paralice. Atrévete a dar el primer paso.",
    "El miedo es una oportunidad para ser valiente. Supera tus temores y crece.",
    "La única forma de superar el miedo es enfrentándolo.",
    "No dejes que el miedo te impida tomar decisiones importantes en tu vida.",
    "El miedo puede ser tu mayor aliado si lo usas para motivarte.",
    "No tengas miedo de fallar. Ten miedo de no aprender nada de tus fracasos."
  ];
  break;
  case "asustada":
  frasesMotivacionales = [
    "No estás sola/o. Siempre hay alguien que te apoyará.",
    "Recuerda que los miedos están en tu mente. Afróntalos y verás que no son tan terribles como parecen.",
    "Toma un respiro profundo y relájate. Todo estará bien.",
    "No te rindas ante el miedo. Sigue adelante y supera tus temores.",
    "Concéntrate en lo que puedes controlar y deja ir lo que no puedes controlar.",
    "Visualiza el éxito y la victoria en lugar del fracaso y la derrota.",
    "Mantén una actitud positiva y enfócate en soluciones en lugar de problemas.",
    "Busca apoyo y ayuda si lo necesitas. No hay vergüenza en pedir ayuda.",
    "No permitas que el miedo te paralice. Atrévete a dar un paso adelante y verás que puedes lograrlo.",
    "Recuerda que el miedo es una emoción normal y que todos lo experimentamos en algún momento. No estás sola/o."
  ];
  break;
  case "ansiosa":
  frasesMotivacionales = [
      "Recuerda que la ansiedad es una emoción normal y que todos la experimentamos en algún momento.",
      "Toma un momento para respirar profundamente y relajarte.",
      "Mantén una actitud positiva y enfócate en soluciones en lugar de problemas.",
      "Visualiza un resultado positivo y enfócate en cómo lograrlo.",
      "No te permitas obsesionarte con los 'y si'", 
      "Enfócate en lo que puedes hacer ahora.",
      "Busca ayuda si la ansiedad te está afectando en tu vida cotidiana. No hay vergüenza en pedir ayuda.",
      "Cuida tu cuerpo y mente. Haz ejercicio, medita o practica técnicas de relajación.",
      "Recuerda que todo pasa, incluyendo la ansiedad. Mantén la esperanza y la fe en ti misma/o.",
      "Date tiempo para ti misma/o y haz cosas que te gusten. La distracción puede ser una gran herramienta para aliviar la ansiedad.",
      "Confía en ti misma/o y en tus habilidades. Puedes superar cualquier obstáculo."
    ];
  break;
  case "ansioso":
  frasesMotivacionales = [
    "No te preocupes por el futuro. Concéntrate en el presente y disfruta el momento.",
    "Respira profundamente y enfócate en lo que puedes controlar.",
    "La ansiedad no puede controlarte si tú decides controlarla a ella.",
    "No dejes que la ansiedad te impida disfrutar de las cosas que te gustan.",
    "Recuerda que la ansiedad es sólo una emoción y que no te define como persona.",
    "No te rindas ante la ansiedad. Aprende a controlarla y a superarla.",
    "Acepta tus sentimientos de ansiedad y busca formas saludables de lidiar con ellos.",
    "Recuerda que tienes el poder de cambiar tu perspectiva y tu actitud ante la ansiedad.",
    "No te sientas mal por sentir ansiedad. Todos enfrentamos momentos de incertidumbre y miedo.",
    "No dejes que la ansiedad te robe la alegría de vivir. Encuentra formas de disfrutar cada día al máximo."
  ];
             break;
             case "confundida":
             frasesMotivacionales = [
               "Cada error te acerca más a la solución, así que sigue adelante y no te rindas",
               "No puedes controlar todo lo que sucede en la vida, pero sí puedes controlar tu actitud frente a ello",
               "La confusión es temporal, la claridad es eterna. Sigue buscando hasta encontrarla",
               "No importa cuántas veces te caigas, lo importante es cuántas veces te levantas y sigues adelante",
               "La vida no siempre es fácil, ero cada desafío te hace más fuerte y más sabio",
               "A veces tienes que despejar tu mente para ver claramente. Tómate un tiempo para ti mismo/a y luego vuelve con una perspectiva fresca",
               "No tienes que tener todas las respuestas ahora mismo. Tómate el tiempo que necesites para reflexionar y tomar decisiones informadas",
               "Recuerda que incluso las personas más exitosas han pasado por momentos de confusión. Lo importante es cómo manejas esos momentos",
               "Cada paso que das te acerca un poco más a donde quieres estar. No dejes que la confusión te detenga",
               "Confía en ti mismo/a y en tu capacidad para encontrar las respuestas que necesitas. Eres más fuerte de lo que cree"
                ];
                break;
                case "confundido":
                frasesMotivacionales = [
                               "Cada error te acerca más a la solución, así que sigue adelante y no te rindas",
                               "No puedes controlar todo lo que sucede en la vida, pero sí puedes controlar tu actitud frente a ello",
                               "La confusión es temporal, la claridad es eterna. Sigue buscando hasta encontrarla",
                               "No importa cuántas veces te caigas, lo importante es cuántas veces te levantas y sigues adelante",
                               "La vida no siempre es fácil, ero cada desafío te hace más fuerte y más sabio",
                               "A veces tienes que despejar tu mente para ver claramente. Tómate un tiempo para ti mismo/a y luego vuelve con una perspectiva fresca",
                               "No tienes que tener todas las respuestas ahora mismo. Tómate el tiempo que necesites para reflexionar y tomar decisiones informadas",
                               "Recuerda que incluso las personas más exitosas han pasado por momentos de confusión. Lo importante es cómo manejas esos momentos",
                               "Cada paso que das te acerca un poco más a donde quieres estar. No dejes que la confusión te detenga",
                               "Confía en ti mismo/a y en tu capacidad para encontrar las respuestas que necesitas. Eres más fuerte de lo que cree"
                                ];
          break;
          case "depre":
          frasesMotivacionales = [
                   "Tus emociones no deben ser paralizadoras. No deberían defenderse. No deberían impedirte ser todo lo que puedes ser",
                         "Grabad esto en vuestro corazón, cada día es el mejor del año",
                         "El hombre tiene una ciega obsesión a la hora contar sus problemas, pero pocas veces cuenta sus alegrías. Si los contara como debiera, nos proveeríamos de felicidad los unos a los otros",
                         "Donde una puerta se cierra, otra se abre",
                         "Si te caes 10 veces, levántate 11",
                         "Nadie te puede hacer sentir inferior sin tu consentimiento",
                         "No tengas miedo de la soledad. Es un tiempo en el que te encuentras a ti mismo", "Cada momento es una oportunidad para comenzar de nuevo"
                 
                          ];
          break;
          case "deprimido":
          frasesMotivacionales = [
                         "Tus emociones no deben ser paralizadoras. No deberían defenderse. No deberían impedirte ser todo lo que puedes ser",
                         "Grabad esto en vuestro corazón, cada día es el mejor del año",
                         "El hombre tiene una ciega obsesión a la hora contar sus problemas, pero pocas veces cuenta sus alegrías. Si los contara como debiera, nos proveeríamos de felicidad los unos a los otros",
                         "Donde una puerta se cierra, otra se abre",
                         "Si te caes 10 veces, levántate 11",
                         "Nadie te puede hacer sentir inferior sin tu consentimiento", "No tengas miedo de la soledad. Es un tiempo en el que te encuentras a ti mismo"
                          ];
                        break;
                        case "desmotivado":
  frasesMotivacionales = [
    "No te rindas, cada fracaso es una oportunidad para comenzar de nuevo con más experiencia.",
    "La motivación es lo que te hace empezar. El hábito es lo que te mantiene.",
    "Incluso si estás en el camino correcto, te atropellarán si sólo te quedas sentado allí.",
    "Puedes encontrar la inspiración en cualquier lugar, pero la motivación sólo viene de adentro.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.",
    "No esperes a que te lo pidan, hazlo antes de que te lo pidan.",
    "No busques el éxito. Busca la paz mental y la felicidad y el éxito te alcanzará.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
    "El éxito no es la clave para la felicidad. La felicidad es la clave para el éxito. Si amas lo que haces, tendrás éxito.",
    "El fracaso es sólo la oportunidad de comenzar de nuevo de forma más inteligente.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La perseverancia es el motor del éxito.",
    "No se trata de cuántas veces caes, sino de cuántas veces te levantas.",
    "Si te caes siete veces, levántate ocho.",
    "El cambio es la ley de la vida. Y aquellos que sólo miran al pasado o al presente están seguros de perder el futuro.",
    "La disciplina es el puente entre metas y logros.",
    "Haz lo que puedas, con lo que tengas, donde estés.",
    "El verdadero éxito no es conquistar a otros, sino conquistar tus propias debilidades."
  ];
  break;
  case "desmotivada":
  frasesMotivacionales = [
    "No te rindas, cada fracaso es una oportunidad para comenzar de nuevo con más experiencia.",
    "La motivación es lo que te hace empezar. El hábito es lo que te mantiene.",
    "Incluso si estás en el camino correcto, te atropellarán si sólo te quedas sentado allí.",
    "Puedes encontrar la inspiración en cualquier lugar, pero la motivación sólo viene de adentro.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.",
    "No esperes a que te lo pidan, hazlo antes de que te lo pidan.",
    "No busques el éxito. Busca la paz mental y la felicidad y el éxito te alcanzará.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
    "El éxito no es la clave para la felicidad. La felicidad es la clave para el éxito. Si amas lo que haces, tendrás éxito.",
    "El fracaso es sólo la oportunidad de comenzar de nuevo de forma más inteligente.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La perseverancia es el motor del éxito.",
    "No se trata de cuántas veces caes, sino de cuántas veces te levantas.",
    "Si te caes siete veces, levántate ocho.",
    "El cambio es la ley de la vida. Y aquellos que sólo miran al pasado o al presente están seguros de perder el futuro.",
    "La disciplina es el puente entre metas y logros.",
    "Haz lo que puedas, con lo que tengas, donde estés.",
    "El verdadero éxito no es conquistar a otros, sino conquistar tus propias debilidades."
  ];
  break;
  case "mas o menos":
  frasesMotivacionales = [
    "Recuerda que incluso los días nublados tienen su belleza. Mantén la cabeza en alto y sonríe, porque siempre hay algo positivo en cada situación.",
    "No permitas que tus altibajos te definan. Eres mucho más fuerte de lo que crees y tienes la capacidad de superar cualquier obstáculo que se cruce en tu camino.",
    "La vida es como una montaña rusa, con sus subidas y bajadas. No te desanimes cuando te encuentres en un valle, porque pronto estarás en la cima disfrutando de las vistas más maravillosas.",
    "Recuerda que eres un ser humano único y valioso. Tienes habilidades y talentos que te hacen especial. No te compares con los demás, enfócate en tu propio progreso y crecimiento.",
    "Incluso los días grises tienen su propio encanto. Aprecia los pequeños momentos de felicidad y busca la belleza en las cosas simples. El sol siempre volverá a brillar.",
    "No te rindas cuando sientas que estás pasando por momentos difíciles. Estos desafíos son oportunidades para aprender, crecer y convertirte en una versión más fuerte de ti mismo.",
    "Recuerda que las emociones son temporales. Acepta tus sentimientos, pero no te quedes estancado en ellos. Confía en que esta sensación pasará y te sentirás mejor.",
    "La autocompasión y el amor propio son clave para superar los momentos difíciles. Trátate con amabilidad y gentileza, como tratarías a un amigo que necesita apoyo.",
    "Cada día es una nueva oportunidad para cambiar tu perspectiva y empezar de nuevo. No permitas que un mal día te desanime, mañana es otro día lleno de posibilidades.",
    "Tus emociones son válidas y es normal tener altibajos. Permítete sentir, pero no te dejes atrapar en la negatividad. Mantén la esperanza y busca activamente cosas que te hagan sentir mejor."
  ];


   }
 
   var fraseMotivacional = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];
 
   var fraseMotivacionalDiv = document.getElementById("frase");
   fraseMotivacionalDiv.innerHTML = fraseMotivacional;
   fraseMotivacionalDiv.style.display = "block";
 }
 
 
function copiarFrase() {
   var fraseMotivacionalDiv = document.getElementById("frase");
   var fraseMotivacional = fraseMotivacionalDiv.innerHTML;
 
   var input = document.createElement("input");
   input.setAttribute("value", fraseMotivacional);
   document.body.appendChild(input);
   input.select();
   document.execCommand("copy");
   document.body.removeChild(input);
 
   alert("¡La frase ha sido copiada al portapapeles!");
 }
 
 /*function copiarFrase() {
    // capturar la frase como imagen con html2canvas
    html2canvas(document.querySelector("#frase")).then(canvas => {
      // crear un elemento de imagen a partir del canvas
      const img = canvas.toDataURL();

      // crear un canvas temporal para agregar el texto
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const ctx = tempCanvas.getContext("2d");

      // dibujar la imagen en el canvas temporal
      const imageObj = new Image();
      imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);

        // dibujar el texto en la esquina inferior derecha
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "white";
        const text = "Film4k";
        const textWidth = ctx.measureText(text).width;
        const margin = 10;
        ctx.fillText(text, canvas.width - textWidth - margin, canvas.height - margin);

        // crear un elemento de enlace para descargar la imagen
        const link = document.createElement("a");
        link.download = "frase.png";
        link.href = tempCanvas.toDataURL();

        // agregar la imagen previa al div #preview
        const preview = document.querySelector("#preview");
        const imgPreview = document.createElement("img");
        imgPreview.style.width = "100%";
        imgPreview.style.height = "auto";
        imgPreview.src = link.href;
        preview.innerHTML = "";
        preview.appendChild(imgPreview);

        // agregar el enlace al cuerpo del documento y hacer clic en él para descargar la imagen
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      imageObj.src = img;
    });
  }
  html2canvas(document.querySelector("#frase")).then(canvas => {
  // código para generar la imagen
}).catch(error => {
  console.error('Error al generar la imagen:', error);
  // mostrar un mensaje de error al usuario
});*/
//prueba

/*const inputImagen = document.getElementById('imagen');
const contenedorImagen = document.getElementById('contenedor-imagen');
const botonAgregarTexto = document.getElementById('agregar-texto');
const botonDescargar = document.getElementById('descargar');
const texto = document.getElementById('texto');

inputImagen.addEventListener('change', function() {
  const imagenSeleccionada = inputImagen.files[0];
  const urlImagen = URL.createObjectURL(imagenSeleccionada);
  const imagen = new Image();
  imagen.onload = function() {
    contenedorImagen.innerHTML = '';
    contenedorImagen.appendChild(imagen);
    URL.revokeObjectURL(imagen.src);
  }
  imagen.src = urlImagen;
});

botonAgregarTexto.addEventListener('click', function() {
  const imagen = contenedorImagen.querySelector('img');
  const canvas = document.createElement('canvas');
  const contexto = canvas.getContext('2d');
  canvas.width = imagen.width;
  canvas.height = imagen.height;
  contexto.drawImage(imagen, 0, 0);
  contexto.font = '30px bold';
  contexto.fillStyle = 'white';
  contexto.textAlign = 'center';
  contexto.fillText(texto.value, canvas.width / 2, canvas.height / 2);
  contexto.fillText('FILM4K', canvas.width / 2, canvas.height / 2 + 40); // nuevo texto
  imagen.src = canvas.toDataURL();
  botonDescargar.href = canvas.toDataURL();
});*/

const darkLightToggle = document.getElementById("darkLight");
const body = document.body;

darkLightToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
