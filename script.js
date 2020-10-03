const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const checkArray = document.querySelectorAll(".check");
const headQuestion = document.getElementById("header__question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let score = 0;
let count = 0;
let count1 = 0;
let questionNumner = quizData.length;

function loadQuestion() {
  headQuestion.innerHTML = quizData[count].question;
  a_text.innerHTML = quizData[count].a;
  b_text.innerHTML = quizData[count].b;
  c_text.innerHTML = quizData[count].c;
  d_text.innerHTML = quizData[count].d;
  count++;
}

function reloadQuest() {
  checkArray.forEach((element) => {
    if (element.checked & (count < 4)) {
      if (element.id === quizData[count1].correct) {
        score++;
        count1++;
      }
      deselect();
      headQuestion.innerHTML = quizData[count].question;
      a_text.innerHTML = quizData[count].a;
      b_text.innerHTML = quizData[count].b;
      c_text.innerHTML = quizData[count].c;
      d_text.innerHTML = quizData[count].d;

      count++;
    } else if (element.checked & (count <= 4)) {
      if (element.id === quizData[count1].correct) {
        score++;
      }
      headQuestion.innerHTML = `당신이 맞춘 정답은 ${score}개 입니다!`;
      a_text.parentElement.classList.add("unvisible");
      b_text.parentElement.classList.add("unvisible");
      c_text.parentElement.classList.add("unvisible");
      d_text.parentElement.classList.add("unvisible");
      submitBtn.innerHTML = "다시 도전하기";
      submitBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  });
}

function deselect() {
  checkArray.forEach((element) => {
    element.checked = false;
  });
}
submitBtn.addEventListener("click", reloadQuest);
loadQuestion();
