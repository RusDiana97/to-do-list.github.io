const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

// get the data from the local storage
let list = JSON.parse(localStorage.getItem("listData"));

if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

// press enter for submiting a task
form.addEventListener("submit", (event) => {
  // do not refresh the page when you submit a task (pressing enter)
  event.preventDefault();

  toDoList();
});

// create the to do list
function toDoList(task) {
  let newTask = input.value;

  if (task) {
    newTask = task.name;
  }

  const li = document.createElement("li");

  if (task && task.checked) {
    li.classList.add("checked");
  }

  li.innerText = newTask;
  ul.appendChild(li);

  // when we are pressing enter for submiting the task the input will be empty
  input.value = "";

  // check button
  const checkBtn = document.createElement("div");

  checkBtn.innerHTML = `
  <i class="fa-solid fa-circle-check">
  `;
  li.appendChild(checkBtn);

  // delete button
  const delBtn = document.createElement("div");

  delBtn.innerHTML = `
  <i class="fa-solid fa-circle-xmark">
  `;
  li.appendChild(delBtn);

  // when we click the check button the task will be checked
  checkBtn.addEventListener("click", () => {
    li.classList.toggle("checked");
    updateLocalStorage();
  });

  // when we click the delete button the task will be deleted
  delBtn.addEventListener("click", () => {
    li.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

// create a local storage for the data
function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");

  list = [];

  liEls.forEach((li) => {
    list.push({
      name: li.innerText,
      checked: li.classList.contains("checked"),
    });
  });

  localStorage.setItem("listData", JSON.stringify(list));
}
