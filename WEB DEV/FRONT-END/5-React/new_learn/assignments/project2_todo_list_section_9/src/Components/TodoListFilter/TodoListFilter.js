import { Button, Stack } from "@mui/material";
import "./TodoListFilter.css";

import { useState } from "react";
export default function TodoListFilter({ filterStat, setFilterStat }) {

	return (
		<Stack className="TodoListFilterClass" direction="row" spacing={0} justifyContent="center">
			<Button
				variant="outlined"
			
				onClick={() => {
					setFilterStat("all");
				}}
				className={filterStat != "all" ? "disabled":""}
			>
				All
			</Button>
			<Button
				variant="outlined"
				
				onClick={() => {
					setFilterStat("completed");
				}}
				className={filterStat != "completed" ? "disabled":""}
			>
				Completed
			</Button>
			<Button
				variant="outlined"
				
				onClick={() => {
					setFilterStat("not completed");
				}}
				className={filterStat != "not completed" ? "disabled":""}
			>
				Not completed
			</Button>
		</Stack>
	);
}
