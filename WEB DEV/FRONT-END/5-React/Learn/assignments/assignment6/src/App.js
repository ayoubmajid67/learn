import "./App.css";
import { Route, Routes } from "react-router-dom";
import Services from "./services/services";
import Home from "./Home/Home";
import NabBar from "./navBar/NavBar";
import About from "./about/About";
import ServiceDetails from "./serviceDetails/ServiceDetails";
import { ServicesContext } from "./context/servicesContext";
import { arrServices } from "./services/servicesData";
import ErrorPage from "./404Page/ErrorPage";
import NewService from "./newService/NewService";
import DeleteService from "./deleteService/DeleteService";
import Layout from "./layout/Layout";
function App() {
	return (
		<>
			<ServicesContext.Provider value={arrServices}>
				<div className="App container">
					<NabBar></NabBar>
					<Routes>
						<Route path="/Home" element={<Home></Home>} />
						<Route path="/" element={<Home></Home>} />
						<Route path="/About" element={<About />}></Route>

						<Route path="/services" element={<Services />} />
						<Route path="/services" element={<Layout />}>
							<Route path=":serviceId" element={<ServiceDetails />} />

							<Route path="new" element={<NewService />} />
							<Route path="delete" element={<DeleteService />} />
						</Route>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
			</ServicesContext.Provider>
		</>
	);
}
export default App;
