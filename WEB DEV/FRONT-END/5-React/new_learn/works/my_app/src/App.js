import "./App.css";

import { useState } from "react";
import { usernameContext } from "./contexts/textContext";

import { useContext } from "react";
import Button from "./componentrs/Button/Button";
function App() {
	return (
		<div className="App">
			<usernameContext.Provider  value={{title:"nice",age:30}}>
				<Button></Button>
			</usernameContext.Provider>
		</div>
	);
}

export default App;
