export function resultReducer(currentReduceStat, action) {
	if (action.type == "addition") {
		const { firstValue, secondValue } = action.payload;

		return firstValue + secondValue;
	}
	if (action.type == "subtraction") {
		const { firstValue, secondValue } = action.payload;

		return firstValue - secondValue;
	}

	if (action.type == "multiplication") {
		const { firstValue, secondValue } = action.payload;

		return firstValue * secondValue;
	}
	if (action.type == "division") {
		let { firstValue, secondValue } = action.payload;
		if (!secondValue) secondValue = 1;
		return (firstValue / secondValue).toFixed(2);
	}
}