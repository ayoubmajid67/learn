import "./App.css";
import LoanForm from "./components/LoanForm/LoanForm";
import Alert from "./components/Alert/Alert";
import { useState, useEffect } from "react";

function App() {
	const [alertStat, setAlertStat] = useState({ message: "", type: "" });


	useEffect(() => {
		const handleClick = (event) => {
			if (event.target.classList.contains("AlertComponentClass")) {
				setAlertStat({ message: "", type: "" });
			}
		};

	
		document.addEventListener("click", handleClick);


		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []); // The empty array ensures this effect runs only once when the component mounts

	return (
		<div className="App">
			{alertStat.message && <Alert message={alertStat.message} type={alertStat.type}></Alert>}

			<LoanForm setAlertStat={setAlertStat}></LoanForm>
		</div>
	);
}

export default App;
