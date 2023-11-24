//finding elements by class from html to store in a variable created in a DOM
var questionTitle = document.querySelector(".questionTitle");
var listsOfOptionElement = document.querySelector(".listsOfOption");
var display = document.querySelector(".displayRightOrWrong");
var groupOfLiElement = document.querySelectorAll("li");
var questionWrapper = document.querySelector(".question-wrapper");
var startQuizButton = document.querySelector(".start-quiz");
var saveFinalScore = document.querySelector(".save-final-score");
var userInitial = document.querySelector(".user-initial");
var sectionGameOver = document.querySelector(".section-gameover");
var restartButton = document.querySelector(".restart-button");
var saveFinalScoreForm = document.querySelector(".save-final-score-form");
var timer = document.querySelector(".timer");

var time = 5;
var timerInterval;
timer.textContent = time;

timer.style.display = "none";
questionWrapper.style.display = "none";
saveFinalScoreForm.style.display = "none";
sectionGameOver.style.display = "none";

startQuizButton.addEventListener("click", function () {
  questionWrapper.style.display = "block";
  timer.style.display = "block";
  startQuizButton.style.display = "none";

  timerInterval = setInterval(function () {
    time = Math.max(0,time-1);
    if (time <= 0) {
      clearInterval(timerInterval);
      sectionGameOver.style.display = "block";
      questionWrapper.style.display = "none";
    }
    timer.textContent = time;
  }, 1000);
});

restartButton.addEventListener("click", function(){
    location.reload();
});

saveFinalScore.addEventListener("click", function (event) {
  event.preventDefault();
  if (userInitial.value.trim() === "") {
    return;
  }
  localStorage.setItem(userInitial.value.trim(), time);
  userInitial.value = "";
  location.href = "highscore.html";
});
//Creating set of questions
var setOfQuestions = [
  {
    question: "What is your name?",
    answers: [
      {
        name: "salida",
        correctAnswer: "correct",
      },
      {
        name: "aman",
        correctAnswer: "incorrect",
      },
      {
        name: "maharjan",
        correctAnswer: "incorrect",
      },
      {
        name: "tuladhar",
        correctAnswer: "incorrect",
      },
    ],
  },
  {
    question: "Where do you live?",
    answers: [
      {
        name: "nepal",
        correctAnswer: "correct",
      },
      {
        name: "uk",
        correctAnswer: "incorrect",
      },
      {
        name: "Italy",
        correctAnswer: "incorrect",
      },
      {
        name: "none",
        correctAnswer: "incorrect",
      },
    ],
  },
  {
    question: "What color is the sky?",
    answers: [
      {
        name: "blue",
        correctAnswer: "correct",
      },
      {
        name: "red",
        correctAnswer: "incorrect",
      },
      {
        name: "pink",
        correctAnswer: "incorrect",
      },
      {
        name: "green",
        correctAnswer: "incorrect",
      },
    ],
  },
];

//creating a variable to store index of setOfQuestions
var indexOfSetOfQuestions = 0;

//creating a function and associating question and to questionTitle element and li element to make visible in the browser
function prepareQuestion() {
  questionTitle.textContent = setOfQuestions[indexOfSetOfQuestions].question;
  prepareAnswerOption();
}
//function created to loop to change the textContent of the li element
function prepareAnswerOption() {
  for (var i = 0; i < groupOfLiElement.length; i++) {
    groupOfLiElement[i].textContent =
      setOfQuestions[indexOfSetOfQuestions].answers[i].name;
    groupOfLiElement[i].setAttribute(
      "data-correct",
      setOfQuestions[indexOfSetOfQuestions].answers[i].correctAnswer
    );
  }
}
prepareQuestion();
//using addEventListener property when clicked on listsOfOptionElement
listsOfOptionElement.addEventListener("click", function (event) {
  // We have to make sure the event.target is li
  // We item is li
  if (!event.target.matches("li")) {
    return;
  }
  //checking the clicked answer is correct or not
  if (event.target.getAttribute("data-correct") === "correct") {
    display.textContent = "correct!";
    setTimeout(function () {
      display.textContent = "";
    }, 250);
    time = time + 5;
    timer.textContent = time;
  } else {
    display.textContent = "incorrect";
    setTimeout(function () {
      display.textContent = "";
    }, 250);
    time = Math.max(0, time - 10);
    timer.textContent = time;
  }
  //increasing the indexOfSetOfQuestions by one to change the question on click
  indexOfSetOfQuestions++;
  //checking if the index is less than setOfQuestion to enter the if block
  if (indexOfSetOfQuestions < setOfQuestions.length) {
    // - if indexOfSetOfQuestion less than setOfQuestion.length is  render the new question
    prepareQuestion();
  } else {
    questionWrapper.remove();
    clearInterval(timerInterval);
    saveFinalScoreForm.style.display = "block";
  }
});
