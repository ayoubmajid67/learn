import "./navBar.css";
import { Link } from "react-router-dom";

export default function NabBar() {
	return (
		<nav>
			<h1>
				<span>M</span>ajid
			</h1>
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>

				<li>
					<Link to="/services">Services</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
}
