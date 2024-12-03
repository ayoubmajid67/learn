import { configureStore } from "@reduxjs/toolkit";

import weatherApiSliceReducer from "../features/weatherApiSlice/weatherSlice";

export default configureStore({
	reducer: {
		weather: weatherApiSliceReducer,
	},
});
