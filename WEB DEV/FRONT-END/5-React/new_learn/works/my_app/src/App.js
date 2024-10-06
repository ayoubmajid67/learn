import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { usernameContext } from "./contexts/textContext";

import { useContext } from "react";
import Button from "./componentrs/Button/Button";
import { Link } from "react-router-dom";
import Services from "./componentrs/Pages/Services/Services";
import ServiceDetails from "./componentrs/Pages/ServiceDetails/ServiceDetails";

import ErrorPage from "./componentrs/Pages/ErrorPage/ErrorPage";
import ServiceLayout from "./componentrs/Pages/ServicesLayout/ServicesLayout";

function App() {
	return (
		<div className="App">
			<header>
				<h1>Majjid</h1>
				<nav>
					<li>
						<Link to="./">Home</Link>
					</li>
					<li>
						<Link to="./about">About</Link>
					</li>
					<li>
						<Link to="services">Services</Link>
					</li>
				</nav>
			</header>
			<Routes>
				<Route path="/About" element={<h1>About page</h1>}></Route>
				<Route
					path="/"
					element={
						<>
							<h1>Home page</h1>
							<Button></Button>
						</>
					}
				></Route>

				<Route path="/services" element={<ServiceLayout />}>
					<Route index element={<Services />}></Route>
					<Route path=":serviceId" element={<ServiceDetails />}></Route>
				</Route>

				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
