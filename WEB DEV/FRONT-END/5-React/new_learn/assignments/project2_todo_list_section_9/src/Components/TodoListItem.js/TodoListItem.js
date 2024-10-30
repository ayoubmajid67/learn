import { Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { orange, green, blue } from "@mui/material/colors";

import "./TodoListItem.css";


import { useState, useEffect ,useContext } from "react";
import { TodoListContext } from "../../Contexts/TodoListContext";
export default function TodoListItem({ taskItem }) {
 let {setEditModalStat,editModalStat,setDeleteModalStat,deleteModalStat,completeTask} = useContext(TodoListContext);  
	const [taskStat, setTaskStat] = useState({
		isEditStat: false,
		isDeleteStat: false,
	});

	useEffect(() => {
		// Reset `isDeleteStat` when the modal closes
		if (!deleteModalStat.isVisible) {
			setTaskStat((prev) => ({ ...prev, isDeleteStat: false }));
		}
	}, [deleteModalStat.isVisible]);

	useEffect(() => {
		// Reset `isEditStat` when the modal closes
		if (!editModalStat.isVisible) {
			setTaskStat((prev) => ({ ...prev, isEditStat: false }));
		}
	}, [editModalStat.isVisible]);

	function showDeleteModalStat() {
		setTaskStat((prev) => {
			return { ...prev, isDeleteStat: true };
		});

		setDeleteModalStat({
			taskId: taskItem.id,
			isVisible: true,
		});
	}
	function showEditModalStat() {
		setTaskStat((prev) => {
			return { ...prev, isEditStat: true };
		});

		setEditModalStat({
			taskId: taskItem.id,
			name: taskItem.name,
			description: taskItem.description,
			isVisible: true,
		});
	}
	let taskClassName = "TodoListItemComponentClass " + (taskItem.isCompleted ? "completeMode" : "");
	taskClassName += taskStat.isDeleteStat ? " deleteMode" : taskStat.isEditStat ? " editMode" : "";

	return (
		<Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center" className={taskClassName}>
			<Stack className="leftSide" spacing={1}>
				<h2 className="name">{taskItem.name}</h2>
				<p>{taskItem.description}</p>
			</Stack>
			<Stack className="rightSide" direction="row" spacing={1}>
				<IconButton aria-label="delete" style={{ color: orange[800], borderColor: orange[800] }} className=" controlIcon deleteIcon" onClick={showDeleteModalStat}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="edit" style={{ color: blue[800], borderColor: blue[800] }} className="controlIcon editIcon" onClick={showEditModalStat}>
					<EditIcon />
				</IconButton>

				<IconButton
					aria-label="checkout"
					style={{ color: green[800], borderColor: green[800] }}
					className="controlIcon checkIcon"
					onClick={() => {
						completeTask(taskItem.id);
					}}
				>
					<CheckIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
}

// use memo : ---[]
/* 
memo : caching , memoizing 

*/