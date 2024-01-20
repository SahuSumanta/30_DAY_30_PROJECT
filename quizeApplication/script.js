const questions = [
  {
    question: "Which is largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answer: [
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answer: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'H'?",
    answer: [
      { text: "Helium", correct: false },
      { text: "Mercury", correct: false },
      { text: "Gold", correct: false },
      { text: "Hydrogen", correct: true },
    ],
  },
];


const questionElemet = document.getElementById("Question");
const answeBtn = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElemet.innerHTML = questionNo+ ". " +currentQuestion.question;


  currentQuestion.answer.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answeBtn.appendChild(button);

    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer);
  })
}

function selectAnswer(e){
  const selectdBtn = e.target;
  const isCorrect = selectdBtn.dataset.correct == "true";
  if(isCorrect){
    selectdBtn.classList.add("correct");
    score++;
  }else{
    selectdBtn.classList.add("incorrect");
  }

  Array.from(answeBtn.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  }); 
  nextButton.style.display = 'block';
}

function resetState() {
  nextButton.style.display = "none";
  while (answeBtn.firstChild) {
    answeBtn.removeChild(answeBtn.firstChild);
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


function showScore(){
  resetState();
  questionElemet.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length){ 
    showQuestions();
  }else{
    showScore();
  }
}

startQuiz();