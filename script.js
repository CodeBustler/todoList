let inputBox = document.querySelector(".inputTask");
let listContainer = document.querySelector(".task-list");

function addTask() {
	// ADDING TASKS
	console.log("Hello");
	if (inputBox.value == "") {
		alert("Add some text");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);

		// Trash Icon
		let trashIcon = document.createElement("img");
		trashIcon.src = "./img/trash.png";
		trashIcon.classList.add("trash-icon");
		li.appendChild(trashIcon);

		// Edit Icon
		let editIcon = document.createElement("img");
		editIcon.src = "./img/edit.png";
		editIcon.classList.add("edit-icon");
		li.appendChild(editIcon);
	}
	inputBox.value = "";
	saveData();
}

// ON ENTER KEY PRESS RUN FUNCTION
inputBox.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});

// ADDING FUNCTIONALITY
listContainer.addEventListener("click", function (e) {
	if (e.target.tagName == "LI") {
		e.target.classList.toggle("checked");
		saveData();
	} else if (e.target.classList.contains("trash-icon")) {
		e.target.parentElement.remove();
		saveData();
	}
	e.stopPropagation();
});

listContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("edit-icon")) {
		e.target.parentElement.setAttribute("contenteditable", "true");
		setTimeout(() => {
			e.target.parentElement.setAttribute("contenteditable", "false");
			saveData();
		}, 6000);
	}
	e.stopPropagation();
});

// SET DATALIST
function saveData() {
	localStorage.setItem("todoListData", listContainer.innerHTML);
}

// GET DATALIST
function getData() {
	listContainer.innerHTML = localStorage.getItem("todoListData");
}
getData();
