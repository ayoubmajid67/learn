import "./App.css";
import Form from "./LoanForm/LoanForm";

import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
	let defaultUser = {
		username: "",
		password: "",
	};
	let [user, setUser] = useState(defaultUser);

	window.onload = function () {
		let username = prompt("Enter Your userName : ");
		let password = prompt("Enter Your password : ");

		setUser({ username: username, password: password });
	};

	return (
		<div className="App">
			<UserContext.Provider value={user}>
				<Form />
			</UserContext.Provider>
		</div>
	);
}
export default App;
