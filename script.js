let addButton = document.getElementById("addButton");
let newTask = document.getElementById("newtask");
let ol = document.querySelector("ol");
let taskList = document.querySelectorAll("#items li");
let deleteItem = document.querySelectorAll("li + .delete");

addButton.addEventListener("click", addTaskOnClick);
newTask.addEventListener("keypress", addTaskOnPress);

function addTask() {
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(newTask.value));
    newItem.addEventListener("click", toggleDone);
    ol.appendChild(newItem);
    newTask.value = "";

    let buttonEvent = document.createElement("button");
    buttonEvent.classList.add("delete");
    buttonEvent.appendChild(document.createTextNode("X"));
    buttonEvent.addEventListener("click", deleteTask);
    ol.appendChild(buttonEvent);
}

function newTaskLength() {
	return newTask.value.trim().length && newTask.value.length;
}

function addTaskOnPress(event) {
    if(newTaskLength() > 0 && event.keyCode === 13)
        addTask();
    if(event.keyCode === 27)
        newTask.value = "";
}

function addTaskOnClick() {
    if(newTaskLength() > 0)
        addTask();
}

function toggleDone() {
	event.target.classList.toggle("completed");
}

function deleteTask() {
	event.target.previousElementSibling.remove();
	event.target.remove();
}

for(var buttonEvent of deleteItem) {
	buttonEvent.addEventListener("click", deleteTask);	
}