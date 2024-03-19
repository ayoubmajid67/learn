import "./Frm.css";
import { useState } from "react";

export default function Frm() {
	const [formInfo, setFormInfo] = useState({ name: "", age: 0, generalInfo: "", isStudent: false, userCountry: "MR", gender: "" });

	function handleChange(event) {
		const { id, type, value, checked } = event.target;
		setFormInfo((prevState) => ({
			...prevState,
			[id]: type === "checkbox" ? checked : value,
		}));
	}

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				console.log(formInfo);
			}}
		>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" onChange={handleChange} />

			<label htmlFor="age">Age:</label>
			<input id="age" type="number" onChange={handleChange} />

			<label htmlFor="generalInfo">General Info:</label>
			<textarea id="generalInfo" onChange={handleChange} />

			<div className="checkedBoxes">
				<input type="checkbox" id="isStudent" onChange={handleChange} />
				<label htmlFor="isStudent">Is Student</label>
			</div>

			<select id="userCountry" onChange={handleChange}>
				<option>MR</option>
				<option>KSA</option>
				<option>UAI</option>
				<option>US</option>
			</select>

			<label>Gender:</label>

			<div>
				<label>Male</label>
				<input type="radio" id="gender" name="gender" value="Male" onChange={handleChange} checked={formInfo.gender === "Male"} />
			</div>

			<div>
				<label>Female</label>
				<input type="radio" name="Female" id="gender" value="Female" onChange={handleChange} checked={formInfo.gender === "Female"} />
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}
