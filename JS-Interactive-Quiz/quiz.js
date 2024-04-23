

const questionElement = document.getElementById("question");

const optionsElement = document.getElementById("options");





const quizData = [
  {
      question: "What is the TOP predator in Alberta?",
      options: ["Bears", "Cougars", "Wolves", "Coyotes"],
      correct: 3
  },
  {
      question: "Which lake is the LARGEST in Alberta?",
      options: ["Lake Athabasca", "Bistcho Lake", "Lake Claire", "Lesser Slave Lake"],
      correct: 0
  },
  {
      question: "What is Alberta's TALLEST mountain?",
      options: ["Twin Peaks Massif", "Mount Alberta", "Mount Assiniboine", "Mount Columbia"],
      correct: 3
  },
  {
      question: "What mineral is ONLY found in Alberta?",
      options: ["Sandstone", "Ammolite", "Potash", "Vanadium"],
      correct: 1
  },
  {
      question: "Which ingredient is 80% PROVIDED to the world by Alberta & Saskatchewan?",
      options: ["Wheat", "Mustard", "Beef", "Barely"],
      correct: 1
  }

 ];


let currentQuestionIndex = 0;

function loadQuestion() {

   const currentQuestion = quizData[currentQuestionIndex];
   questionElement.textContent = currentQuestion.question;

   optionsElement.innerHTML = "";
   currentQuestion.options.forEach((option, index) => {
        const optionsButton = document.createElement("button");
        optionsButton.textContent = option;
        optionsButton.addEventListener("click", () =>checkAnswer(index));
        optionsElement.appendChild(optionsButton);
});

}

function checkAnswer(selectedIndex) {
   const currentQuestion = quizData[currentQuestionIndex];
   if (selectedIndex === currentQuestion.correct) {
      alert("Correct!");
} else {
    alert("Incorrect. Correct answer is: " + currentQuestion.options[currentQuestion.correct]);  
}

currentQuestionIndex++;
if (currentQuestionIndex < quizData.length) {
    loadQuestion();
} else {
     alert("Quiz Completed!");
}
}


;

loadQuestion();


