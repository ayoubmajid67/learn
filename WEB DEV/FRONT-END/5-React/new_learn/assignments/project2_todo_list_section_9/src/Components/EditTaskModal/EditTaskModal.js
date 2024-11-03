import { Title } from "@mui/icons-material";
import "./EditTaskModal.css";
import { Button, Typography, Box, Modal, Stack, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { useToast } from "../../Contexts/ToastContext";

export default function EditTaskModal({ taskId, editTask, editModalStat, setEditModalStat, closeEditModal }) {
	const {setOpenToastStat} = useToast(); 
	function handelEditTask() {
		editTask(setOpenToastStat);
		closeEditModal();
	}

	function handleChange(event) {
		setEditModalStat((prev) => {
			return { ...prev, [event.target.id]: event.target.value };
		});
	}

	return (
		<div>
			<Modal open={editModalStat.isVisible} onClose={closeEditModal} className="EditTaskModalComponentClass taskModalComponentClass" aria-labelledby=" the delete Task modal" aria-describedby="the delete Task modal">
				<Box className="box" component="form">
					<Typography id="deleteModalTitle" variant="h5" component="h2">
						Edit Task
					</Typography>

					<TextField label="Task title" id="name" type="title" sx={{ mt: 2 }} onChange={handleChange} variant="outlined" margin="normal" placeholder="Task title" value={editModalStat["name"]} fullWidth />
					<TextField label="Task description" id="description" type="title" sx={{ mt: 2 }} onChange={handleChange} variant="outlined" margin="normal" placeholder="Task description" value={editModalStat["description"]} fullWidth />

					<Stack direction="row" spacing={1} sx={{ mt: 2 }}>
						<Button variant="contained" sx={{ backgroundColor: "secondary.light" }} onClick={closeEditModal}>
							Cancel
						</Button>
						<Button variant="contained" sx={{ backgroundColor: "thirdly" }} disabled={editModalStat["name"].trim() == "" || editModalStat["description"].trim() == ""} onClick={handelEditTask}>
							Edit Task
						</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}
