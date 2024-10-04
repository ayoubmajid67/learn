import "./LoanForm.css";
import Input from "../Input/Input";
import { loanInputContext } from "../../contexts/laonFormContext";

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
			<loanInputContext.Provider value={{ type: "text", id: "name", text: "Name", changeHandler: setLoanFormInput, value: formInfoStat["name"] }}>
				<Input id="name" text="Name" changeHandler={setLoanFormInput} value={formInfoStat["name"]}></Input>
			</loanInputContext.Provider>

			<loanInputContext.Provider value={{ type: "number", id: "phone", text: "Phone Number", changeHandler: setLoanFormInput, value: formInfoStat["phone"], required: true }}>
				<Input />
			</loanInputContext.Provider>

			<loanInputContext.Provider value={{ type: "number", id: "age", text: "Age", changeHandler: setLoanFormInput, value: formInfoStat["age"], required: true }}>
				<Input />
			</loanInputContext.Provider>

			<loanInputContext.Provider value={{ type: "checkbox", id: "isEmployee", text: "Are you an employee?", changeHandler: setLoanFormInput, checked: formInfoStat["isEmployee"], required: false }}>
				<Input />
			</loanInputContext.Provider>

			<loanInputContext.Provider value={{ type: "tel", id: "salary", text: "Salary", changeHandler: setLoanFormInput, value: formInfoStat["salary"], required: true }}>
				<Input />
			</loanInputContext.Provider>
			<input type="submit" id="submitLoanFormInput" disabled={!formInfoStat["isAllowToSubmit"]} />
		</form>
	);
}
