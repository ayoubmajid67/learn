import "./App.css";
import { useState } from "react";

function App() {
	let initialFormInfo = {
		name: "",
		phone: "",
		age: 0,
		salary: "Less Than 500$",
		isEmployee: false,
	};

	let [formInfo, setFormInfo] = useState(initialFormInfo);

	function changeFormInfo(event) {
		const { id, type, value, checked } = event.target;
		setFormInfo((prevState) => ({
			...prevState,
			[id]: type === "checkbox" ? checked : value,
		}));
	}

	return (
		<div className="App">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					console.log(formInfo);
				}}
			>
				<div className="header">
					<h2>Requesting a Loan</h2>
					<hr />
				</div>

				<div className="nameContainer inputContainer">
					<input type="text" placeholder="name" id="name" value={formInfo.name} required onChange={changeFormInfo} />
				</div>
				<div className="phoneContainer inputContainer">
					<input type="number" placeholder="phone number" id="phone" value={formInfo.phone} required onChange={changeFormInfo} />
				</div>

				<div className="ageContainer inputContainer">
					<input type="number" placeholder="age" id="age" required maxLength="2" value={formInfo.age} onChange={changeFormInfo} />
				</div>

				<div className="salaryContainer inputContainer">
					<select id="salary" onChange={changeFormInfo}>
						<option>Less Than 500$</option>
						<option>Between 500$ and 2000$ </option>
						<option>Above 2000$</option>
					</select>
					<div className="employeeContainer inputContainer">
						<input type="checkbox" id="isEmployee" onChange={changeFormInfo} checked={formInfo.isEmployee} />
						<label htmlFor="isEmployee">are you an Employee</label>
					</div>
				</div>

				<input type="submit" />
			</form>
		</div>
	);
}
export default App;
