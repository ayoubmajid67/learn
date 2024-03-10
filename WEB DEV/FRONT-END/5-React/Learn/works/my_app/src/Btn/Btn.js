import { useState } from "react";
export default function Btn({ title }) {
	if (!title) title = "user title";
	const [name, setName] = useState(title);

	function changeName() {
		if (name === title) setName("Ayoub");
		else setName("Majid");
	}
	return (
		<div className="btnContainer" style={{marginTop:"20px"}}>
			<button onClick={changeName}>Click Me</button>
			<h1>{name}</h1>
		</div>
	);
}
