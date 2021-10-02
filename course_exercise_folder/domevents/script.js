var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	const delButton = document.createElement("button")
	li.appendChild(delButton)
	delButton.classList.add("delClass");
	 
	delButton.innerHTML = 'X';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function deleteItems(element){
	if(element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}
function doneTask(task){
	if(task.target.tagName=== 'LI'){
		task.target.classList.toggle("done")
	}
}
function addToggle(element){
	doneTask(element);
	deleteItems(element);

}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', addToggle);
