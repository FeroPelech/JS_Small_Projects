const quizQuestions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JS",
    correct: "d",
  },
  {
    question: "On what continent would you find the world’s largest desert?",
    a: "Africa",
    b: "Antarctica",
    c: "Asia",
    d: "America",
    correct: "b",
  },
  {
    question: "What is the capital of Canada?",
    a: "Ottawa",
    b: "Montreal",
    c: "Toronto",
    d: "Vancouver",
    correct: "a",
  },
  {
    question: "Which is the best football team ?",
    a: "Liverpool",
    b: "AC Milan",
    c: "Arsenal FC",
    d: "SK Odeva Lipany",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizQuestions[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizQuestions.length} question</h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
