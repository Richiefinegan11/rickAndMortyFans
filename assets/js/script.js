/* HIDES QUESTIONS WHEN PAGE IS FULLY LOADED */
$(document).ready(function () {
    $(".question").hide();
  });

/* QUIZ QUESTIONS */
let questions = [
    {
        question: "What is Rick's second name?",
        answers: [
            { text: "James", correct: false},
            { text: "Astley", correct: false},
            { text: "Sanchez", correct: true},
            { text: "Moranis", correct: false},
        ],
    },
    {
        question: "What's the name of Morty's high school crush?",
        answers: [
            { text: "Jessica", correct: true},
            { text: "Mary", correct: false},
            { text: "Tammy", correct: false},
            { text: "Sarah", correct: false},
        ],
    },
    {
        question: "What is Rick's favourit method of transportation?",
        answers: [
            { text: "Bus", correct: false},
            { text: "Hover-Craft", correct: false},
            { text: "Portal Gun", correct: true},
            { text: "The Luas", correct: false},
        ],
    },
    {
      question: "What is the name of the song Rick & Morty create in epsiode 16?",
      answers: [
          { text: "Backstreets Back", correct: false},
          { text: "Get With It", correct: false},
          { text: "Safety Dance", correct: false},
          { text: "Get Schwifty", correct: true},
      ],
    },
    {
    question: "What Rick have we been watching throughout the entire first season of the show?",
    answers: [
        { text: "C-137", correct: true},
        { text: "C-330", correct: false},
        { text: "E-138", correct: false},
        { text: "D-137", correct: false},
      ]
    },
    {
    question: "What is Morty Jr.'s first word?",
    answers: [
        { text: "Death", correct: false},
        { text: "Domination", correct: true},
        { text: "Destroy", correct: false},
        { text: "Decimate", correct: false},
      ]
    },
    {
      question: "Which salad ingredient does Rick turn himself in to, to avoid family therapy?",
      answers: [
          { text: "A Cashew Nut", correct: false},
          { text: "A Piece of Lettuce", correct: false},
          { text: "A Pickle", correct: true},
          { text: "A Crouton", correct: false},
      ]
    },
    {
      question: "What's the name of the hospital Beth works at?",
      answers: [
          { text: "Hoarse Horse", correct: false},
            { text: "Equestrian General", correct: false},
            { text: "St. Equis", correct: true},
            { text: "St. Horrace", correct: false},
      ]
    },
    {
      question: "What does Summer and Morty's dog want to be called?",
      answers: [
          { text: "Larry", correct: false},
          { text: "Snowball", correct: true},
          { text: "Rex", correct: false},
          { text: "Snuggles", correct: false},
      ]
    },
    {
      question: "What's the name of Beth's coworker?",
      answers: [
          { text: "Davin", correct: true},
          { text: "Gavin", correct: false},
          { text: "Gary", correct: false},
          { text: "Barry", correct: false},
     ]
    },
];

let questionContainer = document.getElementById("quiz-questions");
let questionElement = document.getElementById("question-info");
let answersButtonsClass = document.getElementsByClassName("answer-btn");
let nextButton = document.getElementById("next-button");
let shuffledQuestions, currentQuestion;
let imageElement = document.getElementById("image");
let scoreElement = document.getElementById("score");
let scoreContainer = document.getElementById("score-page");
let tryAgain = document.getElementById("try-again-btn");
let restartGame = document.getElementById("restart-button");
let score = 0;
let answerButtonsArray;
startGame();


function startGame() {
  /***ON CLICK Start Quiz BUTTON HIDE LANDING PAGE AND SHOW QUESTION IN QUIZ***/
  $("#start-button").click(function () {
    $("#landing-page").hide("slow");
    $(".question").show("slow");
  });
  /***SHUFFLING QUESTIONS SO THE ORDER IS NOT ALWAYS SAME***/
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  /*CURRENT QUESTION INDEX*/
  currentQuestion = 0;
  nextQuestion(); 
}

function showQuestion(question) {
  /***POPULATING QUESTION CONTAINER WITH QUESTION, IMAGE AND ANSWERS***/  
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const button = document.getElementById("answer-btn-" + (index + 1));
    button.innerText = answer.text;
    button.removeAttribute('data-correct');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  /***CREATING AN EMPTY ARRAY FOR RESETING STATE OF THE BUTTONS***/  
  answerButtonsArray = [];  
  const selectedButton = e.target;
  if (selectedButton.dataset.correct === "true"){
      score++;
  }
   /***DISABLING ANSWER BUTTONS AFTER CLICK***/
   $(".answer-btn").prop("disabled", true);
  Array.from(answersButtonsClass).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    answerButtonsArray.push(button);
  });
  if (shuffledQuestions.length > currentQuestion + 1) {
     nextButton.classList.remove("d-none");
  } else {
    scoreContainer.classList.remove("d-none");
    questionContainer.classList.add("d-none");
    $("h3").hide();
    scoreElement.innerText = "Your score is: " + score + "/" + questions.length;
    quizEndFeedback();
    tryAgain.addEventListener('click', () => {
    scoreContainer.classList.add("d-none");
    score = 0;
    startGame();
    resetButtonState();
    questionContainer.classList.remove("d-none");
    $("h3").show();   
});
  }
}

function quizEndFeedback(){
  if (score > 8) {
    $("#feedback").html(`<div>
    <h4 class="feedback-b" >Well done!</h4>
    <video autoplay="autoplay" loop="loop" width="500" height="500" class="img-fluid mx-auto">
    <source src="/assets/images/wellDone.mp4" type="video/mp4" />
    </video>`)
  }else if (score > 5) {
    $(`#feedback`).html(`<div>
    <h4 class="feedback-b" >Not !</h4>
    <video autoplay="autoplay" loop="loop" width="500" height="500" class="img-fluid mx-auto">
    <source src="/assets/images/notBad.mp4" type="video/mp4" />
    </video>`)
  }else {
    $(`#feedback`).html(`<div>
    <h4 class="feedback-b" >Very Bad!</h4>
    <video autoplay="autoplay" loop="loop" width="500" height="500" class="img-fluid mx-auto">
    <source src="/assets/images/veryBad.mp4" type="video/mp4" />
    </video>`)
  }
}

/***ADDING CLASS TO BUTTON CLICKED***/
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("green");
    } else {
      element.classList.add("red");
    }
  }
  /***CLEARING CLASSES OF BUTTONS CLICKED***/
  function clearStatusClass(element) {
    element.classList.remove("green");
    element.classList.remove("red");
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    resetButtonState();
    nextQuestion();
  });
  /***RESETING BUTTONS STATE***/
  function resetButtonState(){
    answerButtonsArray.forEach( element => {
      clearStatusClass(element);
    });
  }
  /***SHOWING NEXT QUESTION AND ENABLING ANSWER BUTTONS***/
  function nextQuestion() {
    nextButton.classList.add("d-none");
    showQuestion(shuffledQuestions[currentQuestion]);
     $(".answer-btn").prop("disabled", false);
  }
  restartGame.addEventListener ("click", ()=>{
      score = 0;
      startGame();
      resetButtonState();
  });
  