export function reduceTasks(tasksReducer, action) {
	const { type, payload } = action;
	if (type == "addTask") return [...tasksReducer, payload];
	if (type == "editTask") return tasksReducer.map((task) => (task.id === payload.taskId ? { ...task, name: payload.name, description: payload.description } : task));

	if (type == "completeTask") return tasksReducer.map((task) => (task.id === payload.taskId ? { ...task, isCompleted: !task.isCompleted } : task));
	if (type == "deleteTask") return tasksReducer.filter((task) => task.id != payload.taskId);
}