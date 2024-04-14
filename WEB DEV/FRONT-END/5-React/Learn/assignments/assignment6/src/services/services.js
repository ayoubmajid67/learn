import "./services.css";
import { Link } from "react-router-dom";
import { ServicesContext } from "../context/servicesContext";
import { useContext } from "react";
export default function Services() {
	const arrServices = useContext(ServicesContext);

	return (
		<>
			<h1>Hello from Services Page</h1>
			<div className="servicesContainer">
				{arrServices.map((item) => {
					return (
						<div key={item.id} className="serviceBox">
							<h3>{item.serviceName}</h3>
							<Link to={"/services/" + item.id}>
								<button>CheckDetails</button>
							</Link>
						</div>
					);
				})}
			</div>
			<h2>CRUD OPERATIONS</h2>
			<div className="curdDiv">
				
				<Link to="/services/new">
					<button className="GetBack">Add Service</button>
				</Link>

				<Link to="/services/delete">
					<button className="GetBack">Delete Service</button>
				</Link>
			</div>
		</>
	);
}
