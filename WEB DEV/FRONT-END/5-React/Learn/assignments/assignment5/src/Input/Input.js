import "./Input.css";

import { useContext } from "react";

import { LoanInputsContext } from "../contexts/LoanFormInputsContext";
import { UserContext } from "../contexts/UserContext";

export default function Input() {
	const inputContext = useContext(LoanInputsContext);
	const userContextInfo = useContext(UserContext);

	return (
		<div className="inputContent">
			<h1>The User {userContextInfo.username}</h1>
			<h2>This is the header of the Component</h2>
			<input type={inputContext.type} placeholder={inputContext.placeholder} id={inputContext.id} value={inputContext.value} onChange={inputContext.handelChange} required={inputContext.IsRequired} />
		</div>
	);
}
