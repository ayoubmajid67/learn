import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import BoxHeader from "./Components/ToDoListHeader/BoxHeader";
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";

import TodoListFilter from "./Components/TodoListFilter/TodoListFilter";
import TodoList from "./Components/TodoList/TodoList";

import { saveTasksToLs, getTasksFromLs } from "./utils/localStorage";

import { useState, useEffect, useReducer } from "react";

import { v4 as generateUniqueId } from "uuid";
import DeleteTaskModal from "./Components/DeleteTaskModal/DeleteTaskModal";

import EditTaskModal from "./Components/EditTaskModal/EditTaskModal";

import { ToastProvider } from "./Contexts/ToastContext";
import { TodoListContext } from "./Contexts/TodoListContext";

import { reduceTasks } from "./reducers/reduceTasks";
function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#a1c110",
			},
			secondary: {
				main: "#97a267",
				light: "#ababa9",
			},
			thirdly: {
				main: "#1a68bf",
			},
		},
	});

	const [filterStat, setFilterStat] = useState("all");

	const [tasksReducer, dispatchReducer] = useReducer(reduceTasks, getTasksFromLs());

	let [deleteModalStat, setDeleteModalStat] = useState({
		taskId: "",
		isVisible: false,
	});
	let [editModalStat, setEditModalStat] = useState({
		taskId: "",
		name: "",
		description: "",
		isVisible: false,
	});

	useEffect(() => {
		saveTasksToLs(tasksReducer);
	}, [tasksReducer]);

	function getNewTaskJson(taskName) {
		return {
			id: generateUniqueId(),
			name: taskName,
			description: "description",
			isCompleted: false,
		};
	}
	function addTask(taskName, setOpenToastStat) {
		if (!taskName) {
			console.log("You can not add an empty task [task name = '']");
			return;
		}

		dispatchReducer({ type: "addTask", payload: getNewTaskJson(taskName) });

		setOpenToastStat({ message: "The Tasks added with success", open: true });
	}
	function editTask(setOpenToastStat) {
		if (!editModalStat.name.trim() || !editModalStat.description.trim()) {
			console.log("The title and the description are required");
			return;
		}

		dispatchReducer({ type: "editTask", payload: editModalStat  });
		// setArrTasksStat((prev) => prev.map((task) => (task.id === editModalStat.taskId ? { ...task, name: editModalStat.name, description: editModalStat.description } : task)));
		setOpenToastStat({ message: "The Tasks edited with success", open: true });
	}

	function completeTask(taskId) {
		dispatchReducer({ type: "completeTask", payload: { taskId } });
	}

	function deleteTask(taskId, setOpenToastStat) {
		dispatchReducer({ type: "deleteTask", payload: { taskId } });
		setOpenToastStat({ message: "The Tasks deleted with success", open: true });
	}

	function closeDeleteModal() {
		setDeleteModalStat({ taskId: "", isVisible: false });
	}

	function closeEditModal() {
		setEditModalStat({ taskId: "", name: "", description: "", isVisible: false });
	}

	return (
		<ThemeProvider theme={theme}>
			<ToastProvider>
				<div className="App">
					<Container maxWidth="md">
						<div spacing={2} className="ToDoListParent">
							<BoxHeader />
							<TodoListFilter filterStat={filterStat} setFilterStat={setFilterStat} />

							<TodoListContext.Provider value={{ setEditModalStat, editModalStat, setDeleteModalStat, deleteModalStat, completeTask }}>
								<TodoList tasksReducer={tasksReducer} filterStat={filterStat}></TodoList>
							</TodoListContext.Provider>
							<AddTaskForm addTask={addTask}></AddTaskForm>
						</div>

						<DeleteTaskModal taskId={deleteModalStat.taskId} deleteTask={deleteTask} deleteModalStat={deleteModalStat} closeDeleteModal={closeDeleteModal} />
						<EditTaskModal taskId={deleteModalStat.taskId} editTask={editTask} editModalStat={editModalStat} setEditModalStat={setEditModalStat} closeEditModal={closeEditModal} />
					</Container>
				</div>
			</ToastProvider>
		</ThemeProvider>
	);
}

export default App;
