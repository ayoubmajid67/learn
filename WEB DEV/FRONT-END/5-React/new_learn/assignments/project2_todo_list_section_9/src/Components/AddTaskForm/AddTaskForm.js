import { Box, TextField, Button } from "@mui/material";
import "./AddTaskForm.css";
import { useState} from "react";
import { useToast } from "../../Contexts/ToastContext";

export default function AddTaskForm({ addTask }) {
	const [addTaskFormStat, setAddTaskFormStat] = useState({ name: "" });
    const {setOpenToastStat} = useToast(); 
	


	return (
		<Box component="form" className="AddTaskFormComponentClass" onSubmit={submitAddTaskForm}>
			<TextField label="Task title" type="text" onChange={handleTaskNameChange} variant="outlined" margin="normal" placeholder="Task title" value={addTaskFormStat["name"]} fullWidth />
			<Button type="submit" variant="contained" disabled={!addTaskFormStat["name"].trim()}>
				Add
			</Button>
		</Box>
	);

	function handleTaskNameChange(event) {
		setAddTaskFormStat({ ...addTaskFormStat, name: event.target.value });
	}
	function clearTaskName() {
		setAddTaskFormStat({ ...addTaskFormStat, name: "" });
	}
	function submitAddTaskForm(event) {
		event.preventDefault();
		const taskName = addTaskFormStat["name"].trim();

		if (taskName) {
			addTask(taskName,setOpenToastStat);
			clearTaskName();
		}
	}
}
