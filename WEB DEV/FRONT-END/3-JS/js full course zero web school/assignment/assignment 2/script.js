let body = document.querySelector("body");

class cForm {
	constructor() {
		this.fromDom = document.forms[0];
	}

	isEmpty(value) {
		return value == "";
	}
	getTaskName() {
		if (this.isEmpty(this.fromDom.TaskName.value)) {
			return "";
		} else {
			return this.fromDom.TaskName.value.trim();
		}
	}

	clearFromInput() {
		this.fromDom.TaskName.value = "";
	}
}
class cTask {
	static tasksContainerDom = document.querySelector(".tasksContainer");
	constructor(taskName = "") {
		this.taskDom = document.createElement("div");
		this.taskDom.classList.add("task");
		this.taskName = taskName;
	}

	fillTaskData() {
		let taskNameH3 = document.createElement("h3");
		if (this.taskName) {
			taskNameH3.textContent = this.taskName;
		}
		let deleteBtn = document.createElement("button");
		deleteBtn.addEventListener("click", function () {
			manageTasks.dropTask(this.parentElement);
		});

		deleteBtn.textContent = "delete";
		this.taskDom.append(taskNameH3);
		this.taskDom.append(deleteBtn);
	}
	deleteTask() {
		this.taskDom.remove();
	}
	getHtml() {
		return this.taskDom.outerHTML;
	}

	static pushTaskToDom(taskOb, cloneStatus = false) {
		if (this.tasksContainerDom) {
			if (cloneStatus) this.tasksContainerDom.append(taskOb.taskDom.cloneNode(true));
			else this.tasksContainerDom.append(taskOb.taskDom);
		}
	}
	pushTaskToDom() {
		cTask.pushTaskToDom(this);
	}
	pushCloneTaskToDom() {
		cTask.pushTaskToDom(this, true);
	}
}

class cMangeTasks {
	constructor() {
		this.arrTasksNames = JSON.parse(localStorage.getItem("tasksNames")) || [];
		if (!this.isEmpty()) {
			this.arrTasksNames.forEach((taskName) => {
				let newTask = new cTask(taskName);
				newTask.fillTaskData();
				newTask.pushTaskToDom();
			});
		}
	}
	isEmpty() {
		return this.arrTasksNames.length == 0;
	}
	checkIfTaskAlreadyExist(taskName) {
		if (this.isEmpty()) return false;

		return Boolean(this.arrTasksNames.find((taskNameE) => taskName == taskNameE));
	}

	AddTask(event) {
		let form = new cForm();
		form.fromDom.addEventListener("submit", (event) => {
			let TasksContainer = document.querySelector(".tasksContainer");
			// prevent default behavior :
			event.preventDefault();

			if (this.checkIfTaskAlreadyExist(form.getTaskName())) {
				alert("The Task is already Added change the name : ");
				form.fromDom.TaskName.focus();
				return;
			}

			let task = new cTask(form.getTaskName());
			task.fillTaskData();
			// push task to dom :
			task.pushTaskToDom();
			// push to table :
			this.arrTasksNames.push(form.getTaskName());

			// push tasks to  local storage :
			localStorage.tasksNames = JSON.stringify(this.arrTasksNames);

			// clear form input :
			form.clearFromInput();

			// scroll to end of the page :
			scrollToBottom();
		});
	}
	dropTask(thisTask) {
		let taskName = thisTask.querySelector("h3").textContent;
		thisTask.remove();

		// remove the task from arrTaskNames
		this.arrTasksNames = this.arrTasksNames.filter((itemName) => itemName != taskName);

		// push tasks to  local storage :
		localStorage.tasksNames = JSON.stringify(this.arrTasksNames);
	}
}
function scrollToBottom() {
	// Get the height of the document
	const height = document.documentElement.scrollHeight - window.innerHeight;

	// Scroll smoothly to the bottom of the page
	window.scrollTo({
		top: height,
		behavior: "smooth", // Smooth scrolling behavior
	});
}

let manageTasks = new cMangeTasks();
manageTasks.AddTask();
