import { Outlet } from "react-router-dom";
export default function ServiceLayout() {
	return (
		<div>
			<h1 style={{ width: "100vw", background: "red", color: "white" }}>Services</h1>

			<Outlet />
		</div>
	);
}
