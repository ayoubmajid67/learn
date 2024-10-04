import "./Input.css";
import { loanInputContext } from "../../contexts/laonFormContext";
import { useContext } from "react";
export default function Input() {
	 
	const loanInputInfo = useContext(loanInputContext); 


   
	
	return (
		<div className="inputComponentClass">
			<label htmlFor={loanInputInfo.id}>{loanInputInfo.text}</label>
			<input type={loanInputInfo.type} id={loanInputInfo.id} onChange={loanInputInfo.changeHandler} value={loanInputInfo.value} placeholder={loanInputInfo.text} required={loanInputInfo["isRequired"]} checked={loanInputInfo["checked"]} />
		</div>
	);
}
