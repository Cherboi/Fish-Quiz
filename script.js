var totaScore = 0,
    questionNumber = 0,
    i = 0;
function setnextQuestion( ) {

}

var question = [
  {
    question: "What is the most commonly bought fish?",
    choices: ["Tetra's", "Pufferfish","Beta Fish","African Chiclids"],
    answer: "Tetra's",
  },
  {
    question: 
      "What Type of Fish can move it's body backwards?",
    choices: ["Stingray","Eel","Knifefish","Shark"],
    answer: "Knifefish",
  },
  {
    question:
     "What is the largest type of Freshwater Fish?",
     choices: ["Arowana","Stingray","Pirahna","Arapaima"],
     answer: "Arapaima",
  },
  {
    question:
    "What are the fish that eat Sea Lice off Salmon?",
    choices: ["Pistol Shrimp", "Lumpsucker", "Trout", "Anglefish"],
    answer: "Lumpsucker",
  }
];


var questionEl = document.querySelector("#questions");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

function renderQuestion() {
  questionEl.textContent = question[questionIndex].question;

  optionListEl.innerHTML = "";

  var choices = question[questionIndex].choices;
  
  var choicesLength = choices.length;
 

  for ( var i  = 0; i< choicesLength; i++) {
    var questionItem = document.createElement("button");
    questionItem.textContent = choices[i];
    optionListEl.appendChild(questionItem);
  }

  optionListEl.addEventListener("click", myFunction);


  function myFunction(event) {
    console.log(event.target.innerHTML)
  };
};

window.onload = function() {
  var minute = 1;
  var sec = 0;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    if (sec == 00) {
      minute --;
      sec = 60;
    }
    if (sec > 0) {
      sec--;
      setTimeout(1000);
  }
  }, 1000);
}


renderQuestion();
