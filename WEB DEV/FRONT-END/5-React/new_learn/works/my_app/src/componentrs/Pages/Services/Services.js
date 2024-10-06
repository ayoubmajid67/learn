import Service from "../../Service/Service";

import { servicesListContext } from "./../../../contexts/ServicesContext";
import { useContext } from "react";
export default function Services() {
	let servicesList = useContext(servicesListContext);

	return (
		<>
			<h1>Services page</h1>

			<div className="servicesContainer">
				{servicesList.map((serviceItem) => (
					<Service id={serviceItem.id} name={serviceItem.name} key={serviceItem.id}></Service>
				))}
			</div>
		</>
	);
}
