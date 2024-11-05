import { Stack } from "@mui/material";
import TodoListItem from "../TodoListItem.js/TodoListItem";
import "./TodoList.css";
import { useMemo } from "react";

export default function TodoList({ filterStat, tasksReducer }) {
	let filteredTasks = useMemo(() => {
		return tasksReducer.filter((taskItem) => {
			if (filterStat == "completed") return taskItem.isCompleted;
			if (filterStat == "not completed") return !taskItem.isCompleted;

			return true;
		});
	}, [filterStat, tasksReducer]);

	const memoizedTasks = useMemo(() => {
		return filteredTasks.map((taskItem) => <TodoListItem key={taskItem.id} taskItem={taskItem} />);
	}, [filteredTasks]);
	return (
		<Stack spacing={1} className="TodoListComponentClass">
			{memoizedTasks}
		</Stack>
	);
}
