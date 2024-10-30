import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState, useContext } from "react";

import { ToastContext } from "../../Contexts/ToastContext";
export default function Toast() {
	let { openToastStat, setOpenToastStat } = useContext(ToastContext);

	const handleClick = () => {
		setOpenToastStat((prev) => {
			return { ...prev, open: true };
		});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenToastStat((prev) => {
			return { ...prev, open: false };
		});
	};

	return (
		<div>
			<Snackbar open={openToastStat.open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
					{openToastStat.message}
				</Alert>
			</Snackbar>
		</div>
	);
}
