import { useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../context/servicesContext";
import "./deleteService.css";
import { Link } from "react-router-dom";
export default function DeleteService() {
	let arrServices = useContext(ServicesContext);
	let [serviceName, setServiceName] = useState("");
	let [resultInfo, setResultInfo] = useState({
		isSubmitted: false,
		isDeleted: false,
	});
	let [isEmpty, setIsEmpty] = useState(false);

	function deleteService() {
		if (arrServices.length === 0) {
			setResultInfo({ ...resultInfo, isSubmitted: false });
			setIsEmpty(true);
		} else if (serviceName) {
			let serviceIndex = 0;
          
			if ((serviceIndex = checkExistenceOfService(serviceName.trim())) !== -1) {
				if (arrServices.length === 1) {
					arrServices.shift();
				} else arrServices.splice(serviceIndex, 1);
				setResultInfo({ isSubmitted: true, isDeleted: true });
			} else {
				setResultInfo({ isSubmitted: true, isDeleted: false });
			}
		}
	}
	function checkExistenceOfService(serviceName) {
		let service = arrServices.find((service) => service.serviceName === serviceName);
		if (service) {
			return service.id - 1;
		} else {
			return -1;
		}
	}
	function setServiceNameStat(event) {
		setResultInfo({ ...resultInfo, isSubmitted: false });
		setServiceName(event.target.value);
	}
	function getResult() {
		return resultInfo.isDeleted ? <h2 style={{ color: "green" }}>"{serviceName}" The Service Deleted with Success </h2> : <h2 style={{ color: "red" }}> "{serviceName}" Service not found </h2>;
	}
	return (
		<>
			<h1>Delete a Service Page </h1>
			<input type="text" id="serviceName" value={serviceName} onChange={setServiceNameStat} placeholder="Service To Delete" />
			<button onClick={deleteService}>Delete Service</button>
			{resultInfo.isSubmitted && getResult()}
			{isEmpty && <h2 style={{ color: "red", textAlign: "center" }}>There is not service To Remove </h2>}
			<Link to="/services">
				<button className="GetBack">Get Back To Services</button>
			</Link>
		</>
	);
}
