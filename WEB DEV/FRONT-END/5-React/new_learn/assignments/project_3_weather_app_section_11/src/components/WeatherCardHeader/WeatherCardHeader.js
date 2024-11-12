// material ui imports :

import { Stack, Typography } from "@mui/material";
export default function WeatherCardHeader() {
	return (
		<div className="WeatherCardHeader">
			<Stack className="topDiv" direction="row" alignItems="flex-end" spacing="20px">
				<h1 style={{ fontSize: "2.5em" }}>Riyadh</h1>
				<span className="DateSpan" style={{ fontSize: "15px" }}>
				
					May 28th 2023
				</span>
			</Stack>
			<hr />
		</div>
	);
}
