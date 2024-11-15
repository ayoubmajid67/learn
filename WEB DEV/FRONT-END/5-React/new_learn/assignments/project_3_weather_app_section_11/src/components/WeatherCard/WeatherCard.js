// custom css import :
import "./WeatherCard.css";

// material ui imports :
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CardActionArea from "@mui/material/CardActionArea";
import WeatherCardHeader from "./../WeatherCardHeader/WeatherCardHeader";
import { Stack } from "@mui/material";

// weather stats imgs :
import cloudImg from "../../static/cloud.webp";

import CityForm from "../CityForm/CityForm";

// logic  :
import { useEffect, useState } from "react";
import { getUserCurrentLocation, getWeatherAPI } from "../../Utils/Utils";
import { useAppContext } from "../../contexts/appContext";

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function WeatherCard() {
	const [weatherDataStat, setWeatherDataStat] = useState({
		coord: {
			lon: -7.0266,
			lat: 33.8535,
		},
		weather: [
			{
				id: 804,
				main: "Clouds",
				description: "overcast clouds",
				icon: "04d",
			},
		],
		base: "stations",
		main: {
			temp: 293.51,
			feels_like: 293.25,
			temp_min: 293.28,
			temp_max: 293.94,
			pressure: 1010,
			humidity: 63,
			sea_level: 1010,
			grnd_level: 999,
		},
		visibility: 10000,
		wind: {
			speed: 7.01,
			deg: 255,
			gust: 8.82,
		},
		clouds: {
			all: 100,
		},
		dt: 1731513550,
		sys: {
			type: 2,
			id: 2011223,
			country: "MA",
			sunrise: 1731481130,
			sunset: 1731518774,
		},
		timezone: 3600,
		id: 2562055,
		name: "Skhirate",
		cod: 200,
	});

	async function handelChangeWeatherDataStat(latitude, longitude, cityName) {
		const weatherData = await getWeatherAPI(latitude, longitude);
		if (cityName) weatherData.name = cityName;

		setWeatherDataStat(weatherData);
	}

	useEffect(() => {
		let isMounted = true;

		const fetchLocationAndWeather = async () => {
			let userLocation = await getUserCurrentLocation();

			if (!isMounted) return;
			if (!userLocation || Object.keys(userLocation).length === 0) {
				userLocation = {
					latitude: "34.0333",
					longitude: "-6.8416",
				};
			}

			handelChangeWeatherDataStat(userLocation.latitude, userLocation.longitude, "Rabat");
		};

		fetchLocationAndWeather();

		return () => {
			isMounted = false;
		};
	}, []);

	const { t } = useAppContext();

	return (
		<Card sx={{ minWidth: "345px", maxWidth: "500px", marginTop: "-40px" }} className="weatherCardComponentClass">
			<CardActionArea>
				<CardContent>
					<WeatherCardHeader cityName={weatherDataStat.name} />
					<Stack className="bodyContent" direction="row" spacing="20px">
						<Stack className="leftSide" direction="row" spacing="20px" justifyContent="space-between">
							<Stack className="textContent" justifyContent="space-between">
								<Typography variant="h1">{Math.round(weatherDataStat.main.temp - 273.15)}</Typography>

								<Typography variant="h4" sx={{ marginBottom: "20px", textWrap: "nowrap" }}>
									{t(weatherDataStat.weather[0].description)}
								</Typography>
								<Typography variant="p" component="p">
									{t("min")}: <Typography variant="span">{Math.round(weatherDataStat.main.temp_max)}</Typography>&nbsp; | &nbsp;{t("max")}: <Typography variant="span">{Math.round(weatherDataStat.main.temp_min)}</Typography>
								</Typography>
							</Stack>

							<Stack className="weatherImgStatContainer">
								<img src={`https://openweathermap.org/img/wn/${weatherDataStat.weather[0].icon}.png`} style={{ width: "80px", height: "80px", marginTop: "10px" }} alt="sun image" />
							</Stack>
						</Stack>
						<Stack className="rightSide" justifyContent="center" alignItems="center">
							<img src={cloudImg} style={{ width: "85%" }} alt="cloud image" />
						</Stack>
					</Stack>
				</CardContent>
			</CardActionArea>

			<CityForm handelChangeWeatherDataStat={handelChangeWeatherDataStat} />
		</Card>
	);
}
