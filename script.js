var question = document.getElementById("#question");

var choices = Array.from(document.querySelectorAll('.choice-text'));

var questions = document.getElementById("questions");

var initials = document.getElementById("initials");

var timer = document.getElementById("time")

var time =clockTick;

timerId = setInterval(clockTick, 1000);


timer.textContent = time;


questions =[
{
    question: "Commonly used data types DO NOT include_______.",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "D"

},
    
  {
    question: "The Condition in an if/else statement is enclosed is within _______.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    answer: "C",
    
},
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    answer: "D",
    
},
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is _______.",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console log",
    answer: "D",
},
];
var scorePoints = 100
var maxQuestions = 4
startQuiz = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
};

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > maxQuestions){
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/highscore.html')
  }
};

var questionIndex =Math.floor(Math.random() = availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
  const number = choice.dataset['number']
  choice.innerText = currentQuestion['choice' + number]
})

  availableQuestions.splice (questionIndex, 1)
  acceptingAnswers = true

choices.forEach(choice => {
  choice.addEventListener("click",e =>{
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct'){
      incrementScore(scorePoints)
    }
    selectedChoice.parentElement.classlist.add(classToApply)

    setTimeout(() =>{
      selectedChoice.parentElement.classlist.remove(classToApply)
      getNewQuestion()
      
    }, 1000)
  })
});

incrementScore = num => {
  score +=num
  scoreText.innerText = score
}
start()