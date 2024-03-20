import "./LoanForm.css";
import { useState } from "react";
import Alter from "../Alter/Alter";

export default function Form() {
	let initialFormInfo = {
		name: "",
		phone: "",
		age: 0,
		salary: "Less Than 500$",
		isEmployee: false,
		isSubmitted: false,
	};
	let initialErrors = {
		isValidPhone: true,
		isValidAge: true,
	};

	let [formInfo, setFormInfo] = useState(initialFormInfo);
	let [Errors, setErrors] = useState(initialErrors);
	document.addEventListener("click", (event) => {
		if (formInfo.isSubmitted && !event.target.classList.contains("alterDivText")) {
			setFormInfo((prevState) => ({
				...prevState,
				isSubmitted: false,
			}));
		}
	});

	function changeFormInfo(event) {
		const { id, type, value, checked } = event.target;
		setFormInfo((prevState) => ({
			...prevState,
			[id]: type === "checkbox" ? checked : value,
		}));
	}
	function handelFormSubmission(event) {
		event.preventDefault();
		setFormInfo((prevState) => ({
			...prevState,
			isSubmitted: true,
		}));

		if (formInfo.phone.length < 10 || formInfo.phone.length > 12) {
			setErrors((prevState) => ({ ...prevState, isValidPhone: false }));
		} else {
			setErrors((prevState) => ({ ...prevState, isValidPhone: true }));
		}

		if (formInfo.age > 100 || formInfo.age < 18) {
			setErrors((prevState) => ({ ...prevState, isValidAge: false }));
		} else {
			setErrors((prevState) => ({ ...prevState, isValidAge: true }));
		}
	}

	function GeneraleAlterMsg() {
		if (formInfo.isSubmitted) {
			if (Errors.isValidAge && Errors.isValidPhone) return <Alter msg="The Form Has Been submitted Successfully"></Alter>;
			else if (!Errors.isValidPhone) return <Alter msg="Phone Number Format is incorrect" msgColor="red"></Alter>;
			else return <Alter msg="Age is Not allowed" msgColor="red"></Alter>;
		} else {
			return null;
		}
	}
	return (
		<>
			<form onSubmit={handelFormSubmission}>
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

			{GeneraleAlterMsg()}
		</>
	);
}
