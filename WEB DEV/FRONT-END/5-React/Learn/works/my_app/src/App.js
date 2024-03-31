import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<div className="App">
				<Routes>
					<Route path="/Home" element={<h1>Hello From Home</h1>} />
					<Route path="/" element={<h1>Hello From Home</h1>} />
				</Routes>
			</div>
		</>
	);
}
export default App;
