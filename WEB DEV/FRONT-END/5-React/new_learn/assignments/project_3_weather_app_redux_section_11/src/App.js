import "./App.css";

// material ui imports :
import { Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppContext } from "./contexts/appContext";

// Custom components :
import WeatherCard from "./components/WeatherCard/WeatherCard";

// logic : 
import { useState } from "react";

// external library :
import { useTranslation } from "react-i18next";


const theme = createTheme({
	typography: {
		fontFamily: "",
	},
	palette: {
		primary: {
			main: "#1976d2",
			light: "#ffffff",
		},
	},
});

function App() {
	const { t, i18n } = useTranslation();
	const [transStat, setTransStat] = useState({
		lang: "en",
		dir: "ltr",
	});
	function handleChangeLang() {
		if (transStat.lang === "en") {
			setTransStat({ lang: "ar", dir: "rtl" });
			i18n.changeLanguage("ar");
		} else {
			setTransStat({ lang: "en", dir: "ltr" });
			i18n.changeLanguage("en");
		}
	}

	return (
		<AppContext.Provider value={{t,transStat}}>
		<ThemeProvider theme={theme}>
			<div className="App" dir={transStat.dir}>
				<Stack justifyContent="center" spacing="10px" alignItems="center" sx={{ flexGrow: "1" }}>
		
					<WeatherCard />
				
					<Button variant="outlined" onClick={handleChangeLang} sx={{ color: theme.palette.primary.light, borderColor: theme.palette.primary.light }}>
						{transStat.lang === "en" ? "English" : "العربية"}
					</Button>
				</Stack>
			</div>
		</ThemeProvider>
		</AppContext.Provider>
	);
}

export default App;
