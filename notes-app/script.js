const containerEl = document.querySelector(".container");
const addNoteBtnEl = document.querySelector(".btn");

const notes = JSON.parse(localStorage.getItem("notes"));
notes.forEach((note) => {
  if (note !== "") insertElement(note);
});

let editEl, clearEl, textAreaEl, markDownEl;

addNoteBtnEl.addEventListener("click", (e) => insertElement());

containerEl.addEventListener("click", (e) => {
  const ele = e.target.closest(".card-note");
  if (!ele) return;
  editEl = ele.querySelector(".fa-pen-to-square");
  clearEl = ele.querySelector(".fa-trash-can");
  textAreaEl = ele.querySelector(".note");
  markDownEl = ele.querySelector(".mark-down");
  textAreaEl.addEventListener("input", (e) => updateLS());
  if (e.target === editEl) {
    editFunctionality();
  }
  if (e.target === clearEl) {
    textAreaEl.value = "";
    ele.remove();
    updateLS();
  }
});

function editFunctionality() {
  if (textAreaEl.hasAttribute("disabled")) {
    textAreaEl.removeAttribute("disabled");
    markDownEl.innerHTML = "";
    textAreaEl.style.height = "100%";
  } else {
    markDownEl.innerHTML = marked(textAreaEl.value);
    textAreaEl.setAttribute("disabled", "");
    textAreaEl.style.height = "0";
  }
}

function updateLS() {
  const allNoteEls = document.querySelectorAll(".note");
  const notes = [];
  allNoteEls.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}

function insertElement(value = "") {
  const cardNote = document.createElement("div");
  cardNote.classList.add("card-note");
  cardNote.innerHTML = `
    <div class="controls">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash-can"></i>
    </div>
    <div class="text-content">
      <textarea class="note"></textarea>
      <div class="mark-down"></div>
    </div>
  `;
  cardNote.querySelector(".note").value = value;
  containerEl.insertAdjacentElement("beforeend", cardNote);
}
