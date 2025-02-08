let task = document.getElementById("input");

let i = 0;
let j = "";

function deleteItem(event) {
    let del = event.target.closest(".items");
    if (del) del.remove();
}

function checkTask(event) {
    let checkbox = event.target;
    let element = checkbox.nextElementSibling;

    if (checkbox.checked) {
        element.style.textDecoration = "line-through";
    } else {
        element.style.textDecoration = "none";
    }
}

function clicking(){

    let box = document.createElement("div");
    box.classList.add("items");
    box.id = i;
    i++;

    document.getElementById("list").appendChild(box);

    let leftPart = document.createElement("div");
    leftPart.classList.add("left");
    box.appendChild(leftPart);

    let inputButton = document.createElement("input");
    inputButton.type = "checkbox";
    inputButton.classList.add("done");
    inputButton.addEventListener("change", checkTask); // Добавляем обработчик
    leftPart.appendChild(inputButton);

    let taskName = document.createElement("p");
    taskName.innerText = task.value;
    leftPart.appendChild(taskName);

    let rightPart = document.createElement("div");
    rightPart.classList.add("right");
    box.appendChild(rightPart);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleting");
    rightPart.appendChild(deleteButton);

    let trashImg = document.createElement("img");
    trashImg.classList.add("trash");
    trashImg.src = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/15-64.png";
    deleteButton.appendChild(trashImg);
    deleteButton.addEventListener("click", deleteItem);

    task.value = "";
}

document.getElementById("adding").addEventListener("click", clicking);





