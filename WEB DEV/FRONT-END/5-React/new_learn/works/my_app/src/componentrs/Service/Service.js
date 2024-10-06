import { Link } from "react-router-dom";
export default function ServicesPage({ id, name, description }) {
	return (
		<div className="ServiceComponent"  id={id}  >
			<h2 >{name}</h2>
			<p>{description}</p>
            <Link to={`/services/${id}`} >Details</Link>
		</div>
	);
}
