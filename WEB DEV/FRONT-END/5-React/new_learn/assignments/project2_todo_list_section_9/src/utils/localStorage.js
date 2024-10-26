export function saveTasksToLs(arrTasks) {
	localStorage.setItem("tasks", JSON.stringify(arrTasks));
}

export function getTasksFromLs() {
	return JSON.parse( localStorage.getItem("tasks")) || [];
}
