import { Switch } from "@mui/material";
import { useState } from "react";
export default function HeightSwitch({ onHeightChange }) {
	const [heightSwitchStat, setHeightSwitchStat] = useState(false);

	function handleChange() {
		const newHeightStat = !heightSwitchStat;

		setHeightSwitchStat(newHeightStat);
		onHeightChange(newHeightStat);
	}

	return <Switch checked={heightSwitchStat} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />;
}
