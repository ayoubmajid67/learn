import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherAPI } from "../../Utils/Utils";

export const fetchWeather = createAsyncThunk("weatherApi/fetchWeather", async ({ latitude, longitude, cityName }) => {
	const weatherData = await getWeatherAPI(latitude, longitude);

	if (cityName) weatherData.name = cityName;
// the returned value will be send to the  fulfilled action.payload : 
	return weatherData;
});

const weatherApiSlice = createSlice({
	name: "weatherSlice",
	initialState: {
		weatherData: {
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
		},
		isLoading: false,
	},
	reducers: {},
	extraReducers(builder) {
		// fetchWeather.pending : weatherApi/fetchWeather/pending
		builder
			.addCase(fetchWeather.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchWeather.fulfilled, (stat, action) => {
				stat.isLoading = false;
				stat.weatherData = action.payload;
			});
	},
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
