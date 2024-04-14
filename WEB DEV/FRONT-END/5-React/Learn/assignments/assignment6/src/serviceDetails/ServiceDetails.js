import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ServicesContext } from "../context/servicesContext";
import "./serviceDetails.css";
import ErrorPage from "../404Page/ErrorPage";
import { Link } from "react-router-dom";
export default function ServiceDetails() {
	const arrServices = useContext(ServicesContext);
	const serviceIndex = useParams()["serviceId"] - 1;
	
	if(isNaN(serviceIndex)  || serviceIndex < 0 || serviceIndex > arrServices.length -1 ){
        return (
			<ErrorPage/>
		);
	}


	return (
		<div className="serviceDetails">
			<h3>{arrServices[serviceIndex].serviceName}</h3>
			<p>{arrServices[serviceIndex].body}</p>
			<Link to="/services">
			 <button>Get Back to Services Page</button>
			</Link>
		</div>
	);
}
