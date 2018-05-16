  function backup(){
    var questions = [
    {id: 0 , letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    {id: 1 , letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    {id: 2 , letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    {id: 3 , letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    {id: 4 , letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    {id: 5 , letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    {id: 6 , letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    {id: 7 , letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    {id: 8 , letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    {id: 9 , letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    {id: 10 , letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    {id: 11, letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    {id: 12, letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    {id: 13, letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    {id: 14, letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    {id: 15, letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    {id: 16, letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    {id: 17, letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    {id: 18, letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    {id: 19, letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    {id: 20, letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    {id: 21, letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    {id: 22, letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    {id: 23, letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    {id: 24, letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    {id: 25, letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    {id: 26, letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
  ]
    return questions;
    };
    var questions = backup();
    var totalQuestions = questions.length;
  var scoreboard = [{
        player: "SmartGuy",
        score: 27
    },
    {
      player: "BrainlessApe",
      score: 0
    }
  ];



  function showRanking() {
      var ranking = scoreboard.sort(function(a, b) {
          return b.score - a.score
      }).map(function(top, index) {
          return (index + 1) + ': ' + top.player + ' => Points: ' + top.score;
      });
      //alert(ranking.join("\n"));
      console.log(ranking.length)
      for (var i = 0; i < ranking.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = ranking[i]
        document.getElementById("ranking").appendChild(li)
      }
      //console.log(ranking);
  }

  function checkRosco(){
    if(count != totalQuestions){
      document.getElementById("question").innerHTML = questions[count].question
    }else{
      endGame();
    }

  }

  function results(){
    var qAnswered = count;
    var wAnswered = 0;
    var cAnswered = 0;
    questions.forEach(function(element){
      if (element.status == 1) ++cAnswered;
      if (element.status == -1) ++wAnswered;
    })
    alert("You ended the game!" + "\n" + "Questions answered: " + qAnswered + "\n" + "Wrong answers: " + wAnswered + "\n" + "Correct answers: " + cAnswered);
    if (count = totalQuestions){
      scoreboard.push({
        player: playerName,
        score: cAnswered
      });
    }
    showRanking();
  }

  function endGame(){
    //console.log("JUST A MARKER")
    document.getElementById("question").innerHTML = "DONE!"
    var elements = document.getElementsByClassName("ingameButton");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("hidden");
    }
    document.getElementById("playAgainButton").classList.remove("hidden");
    results();
    }


  var count = 0;
  var questionsToGo = totalQuestions;
  //w
  var playerName = undefined;
  function start(){
  playerName = document.getElementById("generalInput").value;
  document.getElementById("generalInput").value = "";
  document.getElementById("generalInput").placeholder = "Enter answer"
  document.getElementById("startButton").classList.add("hidden");
  var elements = document.getElementsByClassName("ingameButton");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("hidden");
  }

  document.getElementById("question").innerHTML = questions[0].question;
}

  function play(){
    var userAnswer = document.getElementById("generalInput").value;
    document.getElementById("generalInput").value = "";
    if (userAnswer.toLowerCase() == questions[count].answer){
      questions[count].status = 1;
    }else{
      questions[count].status = -1;
    }
    ++count;
    --questionsToGo;
    checkRosco();
  }

  function skip(){
    var skipped = questions.splice(count,1)[0]
    questions.push(skipped);
    checkRosco();
  }

  function playAgain(){
    document.getElementById("startButton").classList.remove("hidden");
    document.getElementById("playAgainButton").classList.add("hidden");
    document.getElementById("generalInput").placeholder = "Enter your name";
    document.getElementById("question").innerHTML = "";
    document.getElementById("ranking").classList.add("hidden");
    count = 0;
    questions = backup();
  }
