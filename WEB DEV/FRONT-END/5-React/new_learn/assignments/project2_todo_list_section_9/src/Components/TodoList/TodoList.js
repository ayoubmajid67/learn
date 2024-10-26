import { Stack } from "@mui/material";
import TodoListItem from "../TodoListItem.js/TodoListItem";
import "./TodoList.css";
export default function TodoList({ arrTasksStat, setDeleteModalStat, deleteModalStat, editModalStat, setEditModalStat, completeTask, filterStat }) {
	function getTasks() {
		if (filterStat == "completed") return arrTasksStat.map((taskItem) => (taskItem.isCompleted ? <TodoListItem key={taskItem.id} taskItem={taskItem} deleteModalStat={deleteModalStat} setDeleteModalStat={setDeleteModalStat} editModalStat={editModalStat} setEditModalStat={setEditModalStat} completeTask={completeTask} /> : null));

		if (filterStat == "not completed") return arrTasksStat.map((taskItem) => (!taskItem.isCompleted ? <TodoListItem key={taskItem.id} taskItem={taskItem} deleteModalStat={deleteModalStat} setDeleteModalStat={setDeleteModalStat} editModalStat={editModalStat} setEditModalStat={setEditModalStat} completeTask={completeTask} /> : null));

		return arrTasksStat.map((taskItem) => <TodoListItem key={taskItem.id} taskItem={taskItem} deleteModalStat={deleteModalStat} setDeleteModalStat={setDeleteModalStat} editModalStat={editModalStat} setEditModalStat={setEditModalStat} completeTask={completeTask} />);
	}
	return (
		<Stack spacing={1} className="TodoListComponentClass">
			{getTasks()}
		</Stack>
	);
}
