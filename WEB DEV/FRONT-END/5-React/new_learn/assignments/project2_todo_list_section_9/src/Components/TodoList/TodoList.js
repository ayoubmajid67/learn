import { Stack } from "@mui/material";
import TodoListItem from "../TodoListItem.js/TodoListItem";
import "./TodoList.css";
import { useMemo ,useContext} from "react";
import { TodoListContext } from "../../Contexts/TodoListContext";
export default function TodoList({ arrTasksStat,filterStat }) {
 
	let filteredTasks = useMemo(() => {
		
		return arrTasksStat.filter((taskItem) => {
			if (filterStat == "completed") return taskItem.isCompleted;
			if (filterStat == "not completed") return !taskItem.isCompleted;

			return true;
		});
	}, [arrTasksStat, filterStat]);

	const memoizedTasks = useMemo(() => {
		console.log("hi"); 
		
		return filteredTasks.map((taskItem) => <TodoListItem key={taskItem.id} taskItem={taskItem}  />);
	}, [filteredTasks]);
	return (
		<Stack spacing={1} className="TodoListComponentClass">
			{memoizedTasks}
		</Stack>
	);
}
