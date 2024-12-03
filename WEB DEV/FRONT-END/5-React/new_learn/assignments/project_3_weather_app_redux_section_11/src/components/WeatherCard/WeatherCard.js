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
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../../features/weatherApiSlice/weatherSlice";

import { CircularProgress } from "@mui/material";

export default function WeatherCard() {
	const weatherDataStat = useSelector((stat) => stat.weather.weatherData);

	const isLoading = useSelector((stat) => stat.weather.isLoading);

	const dispatch = useDispatch();

	async function handelChangeWeatherDataStat(latitude, longitude, cityName) {
		

		dispatch(fetchWeather({latitude, longitude,cityName}));
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

								{isLoading && <CircularProgress />}
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
