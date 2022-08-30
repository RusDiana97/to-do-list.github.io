const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
});

function toDoList(task) {
    let newTask = input.value;

    if (task) {
        newTask = task.name;
    }

    const li = document.createElement("li");


    li.innerHTML = newTask;
    ul.appendChild(li);

    
    if (task && task.checked) {
        li.classList.add("checked");
    }

    input.value = "";

    const checkButton = document.createElement("div");
    checkButton.innerHTML = ` <i class="fa-solid fa-circle-check">`
    li.appendChild(checkButton);

    const deleteButton = document.createElement("div");
    deleteButton.innerHTML = `<i class="fa-solid fa-circle-xmark">`;
    li.appendChild(deleteButton);

    checkButton.addEventListener("click", () => {
        li.classList.toggle("checked");
    });

    deleteButton.addEventListener("click", () => {
        li.remove();
    });
};
