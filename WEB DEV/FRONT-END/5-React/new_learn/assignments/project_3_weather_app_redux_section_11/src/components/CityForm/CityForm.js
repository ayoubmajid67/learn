import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./CityForm.css";
import Typography from "@mui/material/Typography";
// logic :
import { enCitiesList, arCitiesList } from "../../Utils/Utils";
import { useState } from "react";
import { useAppContext } from "../../contexts/appContext";

export default function CityForm({ handelChangeWeatherDataStat }) {
	const [cityName, setCityName] = useState("");
	const { t, transStat } = useAppContext();

	let citiesList = transStat.lang == "en" ? enCitiesList : arCitiesList;

	const handleChange = (cityName, index) => {
		setCityName(cityName);

		const { lat, lng } = citiesList[index];

		handelChangeWeatherDataStat(lat, lng, cityName);
	};

	return (
		<FormControl sx={{ m: 1, width: 300 }} className="CityFormComponentClass">
			<InputLabel sx={{ color: "white" }} className="selectCityLabel">
				{t("City")}
			</InputLabel>
			<Select
				value={cityName}
				input={<OutlinedInput label="City" />}
				color="danger"
				sx={{
					color: "white",
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "white",
					},
					"& .MuiSvgIcon-root": {
						color: "white",
					},
				}}
			>
				{citiesList.map((city, index) => (
					<MenuItem key={city.city} value={city.city} onClick={() => handleChange(city.city, index)}>
						<Typography>{city.city}</Typography>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
