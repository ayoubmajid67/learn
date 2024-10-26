import "./DeleteTaskModal.css";
import { Button, Typography, Box, Modal, Stack } from "@mui/material";

export default function BasicModal({ taskId, deleteTask, deleteModalStat, closeDeleteModal }) {
	function handelDeleteTask() {
		deleteTask(taskId);
		closeDeleteModal();
	}
	return (
		<div>
			<Modal open={deleteModalStat.isVisible} onClose={closeDeleteModal} className="DeleteTaskModalComponentClass taskModalComponentClass" aria-labelledby=" the delete Task modal" aria-describedby="the delete Task modal">
				<Box className="box">
					<Typography id="deleteModalTitle" variant="h5" component="h2">
						Delete Task
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Are you sure you want to delete this task ? You can not cancel this operation!
					</Typography>
					<Stack direction="row" spacing={1} sx={{ mt: 2 }}>
						<Button variant="contained" sx={{ backgroundColor: "secondary.light" }} onClick={closeDeleteModal}>
							Cancel
						</Button>
						<Button variant="contained" color="primary" onClick={handelDeleteTask}>
							Delete Task
						</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}
