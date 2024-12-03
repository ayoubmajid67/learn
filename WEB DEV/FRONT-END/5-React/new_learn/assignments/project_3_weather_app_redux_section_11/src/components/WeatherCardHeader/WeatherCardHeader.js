// material ui imports :
import { Stack, Typography } from "@mui/material";

// logic :
import moment from "moment";
import { useEffect, useRef } from "react";
import { useAppContext } from "../../contexts/appContext";

// convert date to arabic :
import "moment/min/locales";
// moment.locale("ar");

export default function WeatherCardHeader({ cityName }) {
	const currentDate = useRef(null);
	const { t, transStat } = useAppContext();

	moment.locale(transStat.lang);
	currentDate.current = moment().format("MMMM Do YYYY, h:mm:ss a");

	return (
		<div className="WeatherCardHeader">
			<Stack className="topDiv" direction="column" flexWrap="wrap" justifyContent="space-between" spacing="5px">
				<Typography variant="h1" style={{ fontSize: "2.2em" }}>
					{t(cityName)}
				</Typography>
				<Typography variant="span" className="DateSpan" style={{ fontSize: "15px", alignSelf: "flex-end", marginBottom: "5px" }}>
					{currentDate.current}
				</Typography>
			</Stack>
			<hr />
		</div>
	);
}
