import { useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../context/servicesContext";
import { Link } from "react-router-dom";
import "./newService.css";
export default function DeleteService() {
	let arrServices = useContext(ServicesContext);
	let [serviceInfo, setServiceInfo] = useState({
		id: arrServices.length + 1,
		serviceName: "",
		body: "",
	});
	let [resultInfo, setResultInfo] = useState({
		isSubmitted: false,
		isAdded: false,
	});
	function addService(event) {
		event.preventDefault();
		let trimName = serviceInfo.serviceName.trim();

		setServiceInfo({ ...serviceInfo, serviceName: trimName });
		if (!checkExistenceOfService(trimName)) {
			let tempService = serviceInfo;
			tempService.serviceName = trimName;
			arrServices.push(tempService);

			setResultInfo({ isSubmitted: true, isAdded: true });
		} else {
			setResultInfo({ isSubmitted: true, isAdded: false });
		}
	}
	function checkExistenceOfService(serviceName) {
		let service = arrServices.find((service) => service.serviceName === serviceName);

		return service ? true : false;
	}
	function setServiceInfoInput(event) {
		setResultInfo({ ...serviceInfo, isSubmitted: false });
		setServiceInfo({ ...serviceInfo, [event.target.id]: event.target.value });
	}
	function getResult() {
		return resultInfo.isAdded ? <h2 style={{ color: "green" }}>"{serviceInfo.serviceName}" The Service Added with Success </h2> : <h2 style={{ color: "red" }}> "{serviceInfo.serviceName}" Service is Already Exist </h2>;
	}
	return (
		<>
			<h1>Delete a Service Page </h1>
			<form action="" onSubmit={addService}>
				<input type="text" id="serviceName" value={serviceInfo.serviceName} onChange={setServiceInfoInput} placeholder="Service To ADD" required />
				<textarea name="" id="body" cols="30" rows="8" value={serviceInfo.body} onChange={setServiceInfoInput} required></textarea>
				<button type="submit">Add Service</button>
			</form>

			{resultInfo.isSubmitted && getResult()}
			<Link to="/services">
				<button className="GetBack">Get Back To Services</button>
			</Link>
		</>
	);
}
