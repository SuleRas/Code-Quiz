//get start button
let startButton = document.querySelector("#start-btn");
let questions = [
  {
    text: "Which is the largest country in the world?",
    choices: ["a . Canada", "b . Russia", "c . China", "d . United States"],
    answer: "b . Russia",
  },
  {
    text: "Which is longest river in the world",
    choices: ["a . Nile", "b . Missisipi", "c . Yenisei", "d . Amazon River"],
    answer: "a . Nile",
  },
  {
    text: "What is Capital of Madagascar",
    choices: [
      "a . Oslo ",
      "b . Nicosia ",
      "c . Buenos Aires",
      "d . Antananarivo ",
    ],
    answer: "d . Antananarivo ",
  },
  {
    text: "What is Earth largest continent",
    choices: ["a . Africa ", "b . South America", "c . Asia", "d . Europe"],
    answer: "c . Asia",
  },
  {
    text: "Which African Nation has the most pyramids",
    choices: ["a . Egypt", "b . Sudan", "c . Libya", "d . Algeria"],
    answer: "b . Sudan",
  },
];
let index = 0;
let score = 0;
let timeLeft = 60;
let timeEl = document.querySelector("#time-el");
var intervalHolder;
//add click function
startButton.addEventListener("click", function () {
  //start timer
  intervalHolder = setInterval(runClock, 1000);
  //hide start div
  document.getElementById("banner").classList.add("hide");
  document.getElementById("quiz").classList.remove("hide");

  askQuestion();
});
function askQuestion() {
  document.getElementById("question-text").textContent = questions[index].text;
  let buttonDiv = document.querySelector(".button-control"); //empty it  innerHtml
  buttonDiv.innerHTML = "";
  questions[index].choices.forEach(function (choice) {
    let button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("class", "btn");
    button.setAttribute("value", choice);
    button.onclick = evaluateAnswer;
    buttonDiv.appendChild(button);
  });
}
// click function (right or wrong)
function evaluateAnswer() {
  console.log(this);
  if (this.value !== questions[index].answer) {
    timeLeft -= 10;
  } else {
    score++;
  }
  index++;
  if (index === questions.length) {
    endGame(); //call end game in both places when out of question.
  } else {
    askQuestion();
  }
}

function endGame() {
  clearInterval(intervalHolder);
  document.getElementById("quiz").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
}

function runClock() {
  timeLeft--;
  timeEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame();
  }
}
