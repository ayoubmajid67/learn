import { createSlice } from "@reduxjs/toolkit";

const initialStat = {
	result: 0,
};

export const calcSlice = createSlice({
	// the slice name :
	name: "calc",
	// the stat var :
	initialState: initialStat,

	reducers: {
		sum: (currentStat, action) => {
			setTimeout(()=>{
				console.log('changing the stat of the result'); 
				
				currentStat.result=100;
	
			},2000); 
			const { firstInputValue, secondInputValue } = action.payload;
			currentStat.result = firstInputValue + secondInputValue;

			console.log("hi"); 

		
			
		},
		subtract: (currentStat, action) => {
			const { firstInputValue, secondInputValue } = action.payload;
			currentStat.result = firstInputValue - secondInputValue;
		},
		multiply: (currentStat, action) => {
			const { firstInputValue, secondInputValue } = action.payload;
			currentStat.result = firstInputValue * secondInputValue;
		},
		divide: (currentStat, action) => {
			const { firstInputValue, secondInputValue } = action.payload;
			currentStat.result = firstInputValue / (secondInputValue === 0 ? 1:secondInputValue );
		},
	},
});

export const { sum ,divide,multiply,subtract} = calcSlice.actions;

export default calcSlice.reducer;
