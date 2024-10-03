import "./App.css";
import LoanForm from "./components/LoanForm/LoanForm";
import Alert from "./components/Alert/Alert";
import { useState,useEffect } from "react";

function App() {
	const [alertStat, setAlertStat] = useState({ message: "", type: "" });

	// Add event listener using useEffect to ensure it's added only once and cleaned up on unmount
	useEffect(() => {
		const handleClick = (event) => {
			if (event.target.classList.contains("AlertComponentClass")) {
				setAlertStat({ message: "", type: "" });
			}
		};

		// Add the event listener
		document.addEventListener("click", handleClick);

		// Cleanup the event listener when the component unmounts
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []); // The empty array ensures this effect runs only once when the component mounts

	return (
		<div className="App">
			{alertStat.message && <Alert message={alertStat.message} type={alertStat.type}></Alert>}

			<LoanForm setAlertStat={setAlertStat} ></LoanForm>
		</div>
	);
}

export default App;
