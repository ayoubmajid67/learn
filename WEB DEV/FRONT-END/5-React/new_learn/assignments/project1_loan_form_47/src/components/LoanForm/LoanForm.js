import "./LoanForm.css";

import { useState } from "react";
export default function LoanForm({ setAlertStat }) {
	const [formInfoStat, setFormInfoStat] = useState({
		name: "",
		phone: "",
		age: "",
		isEmployee: false,
		salary: "",
		isAllowToSubmit: false,
	});
	function setLoanFormInput(event) {
		const { id, type, value, checked } = event.target;

		setFormInfoStat((prev) => {
			const updatedForm = { ...prev, [id]: type === "checkbox" ? checked : value };
			return { ...updatedForm, isAllowToSubmit: isAllowToSubmit(updatedForm) };
		});
	}
	function isAllowToSubmit(currentFormInfoStat = formInfoStat) {
		let isAllowToSave = true;
		Object.keys(currentFormInfoStat).forEach((key) => {
			if (typeof currentFormInfoStat[key] === "string" && currentFormInfoStat[key].trim() === "") {
				isAllowToSave = false;
				return;
			}
		});
		return isAllowToSave;
	}

	function validateLoanFormInfo() {
		if (formInfoStat.age < 18 || formInfoStat.age >= 100) setAlertStat({ message: "Age is not allowed", type: "error" });
		else if (formInfoStat.phone.length < 10 || formInfoStat.phone.length > 12) setAlertStat({ message: "Phone Number Format is Incorrect", type: "error" });
		else if (formInfoStat.salary < 0) setAlertStat({ message: "The salary can not be a negative value", type: "error" });
		else setAlertStat({ message: "The Form has been Submitted Successfully", type: "success" });
	}

	function handleValidateLoanForm(event) {
		event.preventDefault();
		if (!isAllowToSubmit()) {
			setFormInfoStat((prev) => {
				return { ...prev, isAllowToSubmit: false };
			});
			return;
		}

		validateLoanFormInfo();
	}

	return (
		<form className="LoanFormComponentClass" onSubmit={handleValidateLoanForm}>
			<h1 className="title">Requesting a Loan</h1>
			<hr />
			<div className="inputBox">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" onChange={setLoanFormInput} value={formInfoStat["name"]} required />
			</div>
			<div className="inputBox">
				<label htmlFor="phone">Phone Number : </label>
				<input type="number" id="phone" onChange={setLoanFormInput} value={formInfoStat["phone"]} required />
			</div>
			<div className="inputBox">
				<label htmlFor="age">Age</label>
				<input type="number" id="age" onChange={setLoanFormInput} value={formInfoStat["age"]} required />
			</div>

			<div className="inputBox">
				<label htmlFor="isEmployee">Are you an employee?</label>
				<input type="checkbox" id="isEmployee" onChange={setLoanFormInput} checked={formInfoStat["isEmployee"]} />
			</div>

			<div className="inputBox">
				<label htmlFor="salary">Salary</label>
				<input type="tel" id="salary" onChange={setLoanFormInput} value={formInfoStat["salary"]} required />
			</div>

			<input type="submit" id="submitLoanFormInput" disabled={!formInfoStat["isAllowToSubmit"]} />
		</form>
	);
}
