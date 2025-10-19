import "./Inp.css";
import { useState } from "react";
export default function Inp() {
	let [content, setContent] = useState("");
	function changeName(e) {
		setContent(e.target.value);
	}
	return (
		<div className="inputContainer">
			<input placeholder="enter your name" onChange={changeName} />
			<h2>{content}</h2>
		</div>
	);
}
