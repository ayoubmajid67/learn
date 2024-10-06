import { useParams } from "react-router-dom";

import Service from "../../Service/Service";
import { servicesListContext } from "../../../contexts/ServicesContext";
import { useContext } from "react";
import ErrorPage from "./../ErrorPage/ErrorPage";
export default function ServiceDetails({ title, description }) {
	const { serviceId } = useParams();
	const servicesList = useContext(servicesListContext);

	const targetService = servicesList.find((serviceItem) => {
		return serviceItem.id == serviceId;
	});

	return (
		<>
			<h1>Welcome to the service details page </h1>;<h1> Service id : {serviceId}</h1>
			{targetService ? <Service id={targetService.id} name={targetService.name} description={targetService.description}></Service> : <ErrorPage />}
		</>
	);
}
