const queAndAnsEl = document.querySelector(".que-ans");
const submitBtn = document.querySelector(".btn-submit");

const questionsAndAnswer = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "Javascript"],
    correctAnswer: "Javascript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    correctAnswer: "1995",
  },
];

let current = 0,
  currectAns = 0;

function showQuestion() {
  if (current >= questionsAndAnswer.length) {
    const h1El = document.createElement("h1");
    h1El.innerHTML = `You answered ${currectAns}/${questionsAndAnswer.length} questions correctly`;
    queAndAnsEl.innerHTML = "";
    queAndAnsEl.insertAdjacentElement("afterbegin", h1El);
    submitBtn.innerHTML = "Reload";
    return;
  }
  const questionEl = document.createElement("h2");
  const optionsEl = document.createElement("ul");
  questionEl.innerHTML = questionsAndAnswer[current].question;
  optionsEl.innerHTML = `
    <li>${questionsAndAnswer[current].options[0]}</li>
    <li>${questionsAndAnswer[current].options[1]}</li>
    <li>${questionsAndAnswer[current].options[2]}</li>
    <li>${questionsAndAnswer[current].options[3]}</li>
  `;
  queAndAnsEl.innerHTML = "";
  queAndAnsEl.insertAdjacentElement("afterbegin", optionsEl);
  queAndAnsEl.insertAdjacentElement("afterbegin", questionEl);

  queAndAnsEl.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== "li") return;
    const ele = e.target.closest("li");
    if (!ele) return;
    queAndAnsEl
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("selected"));
    ele.classList.add("selected");
  });
}

showQuestion();

submitBtn.addEventListener("click", (e) => {
  if (e.target.innerText === "Reload") {
    current = 0;
    currectAns = 0;
    e.target.innerText = "Submit";
    showQuestion();
    return;
  }
  let selectedLi;
  queAndAnsEl.querySelectorAll("li").forEach((li) => {
    if (li.classList.contains("selected")) {
      selectedLi = li;
      return;
    }
  });
  if (!selectedLi) return;
  // questionsAndAnswer[current].selected = selectedLi.innerText;
  if (selectedLi.innerText === questionsAndAnswer[current].correctAnswer)
    currectAns++;
  current++;
  showQuestion();
});
