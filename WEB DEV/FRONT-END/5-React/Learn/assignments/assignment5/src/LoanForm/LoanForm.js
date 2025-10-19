import "./LoanForm.css";
import { useState } from "react";
import Alter from "../Alter/Alter";
import Input from "../Input/Input";
import { LoanInputsContext } from "../contexts/LoanFormInputsContext";

export default function Form() {
	let initialFormInfo = {
		name: "",
		phone: "",
		age: "",
		salary: "Less Than 500$",
		isEmployee: false,
		isSubmitted: false,
	};
	let initialErrors = {
		isValidPhone: true,
		isValidAge: true,
	};

	let [formInfo, setFormInfo] = useState(initialFormInfo);
	let [errors, setErrors] = useState(initialErrors);
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

		const isValidPhone = formInfo.phone.length >= 10 && formInfo.phone.length <= 12;
		const isValidAge = formInfo.age >= 18 && formInfo.age <= 100;

		setErrors({
			isValidPhone,
			isValidAge,
		});
	}

	function GeneraleAlterMsg() {
		return formInfo.isSubmitted && <>{errors.isValidAge && errors.isValidPhone ? <Alter msg="The Form Has Been submitted Successfully" /> : !errors.isValidPhone ? <Alter msg="Phone Number Format is incorrect" msgColor="red" /> : <Alter msg="Age is Not allowed" msgColor="red" />}</>;
	}

	return (
		<>
			<form onSubmit={handelFormSubmission}>
				<div className="header">
					<h2>Requesting a Loan</h2>
					<hr />
				</div>

				<div className="nameContainer inputContainer">
					<LoanInputsContext.Provider value={{ value: formInfo.name, id: "name", handelChange: changeFormInfo, placeholder: "Enter Your Name" }}>
						<Input />
					</LoanInputsContext.Provider>
				</div>
				<div className="phoneContainer inputContainer">
					<LoanInputsContext.Provider value={{ value: formInfo.phone, id: "phone", handelChange: changeFormInfo, placeholder: "Enter Your Phone " }}>
						<Input />
					</LoanInputsContext.Provider>
				</div>

				<div className="ageContainer inputContainer">
					<LoanInputsContext.Provider value={{ type: "number", value: formInfo.age, id: "age", handelChange: changeFormInfo, placeholder: "Enter Your Age " }}>
						<Input />
					</LoanInputsContext.Provider>
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
