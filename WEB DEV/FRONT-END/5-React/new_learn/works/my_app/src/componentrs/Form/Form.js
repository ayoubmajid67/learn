import "./Form.css";
import { useState } from "react";
export default function Form() {
	const defaultFormInfoValues = {
		email: "",
		password: "",
		generalInfo: "",
		isStudent: true,
		gender: "mal",
		accountType: "user",
	};

	const [formInfo, setFormInfo] = useState(defaultFormInfoValues);

	function setFormInfoValue(event) {
		const { id, type, value, checked } = event.target;
		console.log(id);
		console.log(value);
		setFormInfo({ ...formInfo, [id]: type === "checkbox" ? checked : value });
	}
	function handelSubmitFormInfo(event) {
		event.preventDefault();
		console.log("form info :", formInfo);
	}

	return (
		<form className="formComponentClass loginForm">
			<label htmlFor="email">Email</label>
			<input type="text" name="email" id="email" onChange={setFormInfoValue} value={formInfo["email"]} />

			<label htmlFor="password">Password</label>
			<input type="password" name="password" id="password" onChange={setFormInfoValue} value={formInfo["password"]} />

			<textarea name="generalInfo" id="generalInfo" onChange={setFormInfoValue} value={formInfo["generalInfo"]}></textarea>

			<label htmlFor="isStudent">Are you a student</label>
			<input type="checkbox" name="isStudent" id="isStudent" onChange={setFormInfoValue} checked={formInfo["isStudent"]} />

			<select name="gender" id="gender" onChange={setFormInfoValue}>
				<option value="mal" selected={formInfo["gender"] === "mal"}>
					Male
				</option>
				<option value="fem" selected={formInfo["gender"] === "fem"}>
					female
				</option>
			</select>

			<label htmlFor="accountType">Account Type</label>
			<div className="inputContainer">
				<input type="radio" name="accountType" id="accountType" value="owner" onChange={setFormInfoValue} checked={formInfo["accountType"] === "owner"} />
				<label>Owner</label>
			</div>
			<div className="inputContainer">
				<input type="radio" name="accountType" id="accountType" value="admin" onChange={setFormInfoValue} checked={formInfo["accountType"] === "admin"} />
				<label>Admin</label>
			</div>
			<div className="inputContainer">
				<input type="radio" name="accountType" id="accountType" value="user" onChange={setFormInfoValue} checked={formInfo["accountType"] === "user"} />
				<label>User</label>
			</div>
			<button id="submitLoginFormBtn" onClick={handelSubmitFormInfo}>
				Submit
			</button>
		</form>
	);
}
