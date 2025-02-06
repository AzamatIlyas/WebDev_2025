let task = document.getElementById("input");

let i = 0;
let j = "";

function checkTask(event) {
    let checkbox = event.target;
    let element = checkbox.nextElementSibling;

    if (checkbox.checked) {
        element.style.textDecoration = "line-through"; // Зачёркиваем текст
    } else {
        element.style.textDecoration = "none"; // Убираем зачеркивание
    }
}

function clicking(){

    let box = document.createElement("div");
    box.classList.add("items");
    box.id = i;
    i++;

    document.getElementById("list").appendChild(box);

    let inputButton = document.createElement("input");
    inputButton.type = "checkbox";
    inputButton.classList.add("done");
    inputButton.addEventListener("change", checkTask); // Добавляем обработчик
    box.appendChild(inputButton);

    let taskName = document.createElement("p");
    taskName.innerText = task.value;
    box.appendChild(taskName);

    task.value = "";

}

document.getElementById("adding").addEventListener("click", clicking);





