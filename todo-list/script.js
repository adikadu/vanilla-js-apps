const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const todosEl = document.querySelector(".todos");

inputEl.value = "";

const todosList = [];
localStorageTodos = localStorage.getItem("todos");
if (localStorageTodos) {
  JSON.parse(localStorageTodos).forEach((todo) => todosList.push(todo));
}
todosList.forEach((todo, idx) => {
  const newTodo = document.createElement("p");
  newTodo.dataset.num = todo.num;
  newTodo.innerText = todo.todo;
  if (todo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
    newTodo.style.color = "#b6b6b6";
  }
  todosEl.insertBefore(newTodo, formEl.nextSibling);
});

let ttlNumTodos = todosList.length;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;
  todosList.push({
    todo: inputEl.value,
    isCompleted: false,
    num: ++ttlNumTodos,
  });
  localStorage.setItem("todos", JSON.stringify(todosList));
  const newTodo = document.createElement("p");
  newTodo.dataset.num = ttlNumTodos;
  newTodo.innerText = inputEl.value;
  todosEl.insertBefore(newTodo, formEl.nextSibling);
  inputEl.value = "";
});

todosEl.addEventListener("click", (e) => {
  const ele = e.target.closest("p");
  if (!ele) return;
  todosList.forEach((todo) => {
    if (+ele.dataset.num === todo.num) {
      todo.isCompleted = !todo.isCompleted;
      if (todo.isCompleted) {
        ele.style.textDecoration = "line-through";
        ele.style.color = "#b6b6b6";
      } else {
        ele.style.textDecoration = "none";
        ele.style.color = "black";
      }
      localStorage.setItem("todos", JSON.stringify(todosList));
      return;
    }
  });
});

todosEl.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const ele = e.target.closest("p");
  if (!ele) return;
  let idxToRemove;
  todosList.forEach((todo, idx) => {
    if (+ele.dataset.num === todo.num) {
      idxToRemove = idx;
      return;
    }
  });
  if (idxToRemove !== undefined) todosList.splice(idxToRemove, 1);
  localStorage.setItem("todos", JSON.stringify(todosList));
  ele.remove();
  return false;
});
