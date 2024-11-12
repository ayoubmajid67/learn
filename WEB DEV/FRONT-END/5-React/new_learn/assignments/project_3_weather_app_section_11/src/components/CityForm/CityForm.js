import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./CityForm.css";

const cityNames = ["Casablanca", "Rabat", "Marrakech", "Fes", "Tangier", "Agadir", "Meknes", "Oujda", "Kenitra", "Tetouan", "Safi", "El Jadida", "Nador", "Khemisset", "Khouribga", "Beni Mellal", "Taza", "Mohammedia", "Laayoune", "Errachidia"];

export default function CityForm() {
	const [cityName, setCityName] = React.useState([]);

	const handleChange = (event) => {
		const { value } = event.target;

		setCityName(value);
	};

	return (
		<FormControl sx={{ m: 1, width: 300 }} className="CityFormComponentClass">
			<InputLabel sx={{ color: "white" }} className="selectCityLabel">
				City
			</InputLabel>
			<Select
				labelId="demo-multiple-name-label"
				id="demo-multiple-name"
				value={cityName}
				onChange={handleChange}
				input={<OutlinedInput label="City" />}
				color="danger"
				sx={{
					color: "white", // Text color
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "white",
					},
					"& .MuiSvgIcon-root": {
						color: "white",
					},
				}}
			>
				{cityNames.map((name) => (
					<MenuItem key={name} value={name}>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
