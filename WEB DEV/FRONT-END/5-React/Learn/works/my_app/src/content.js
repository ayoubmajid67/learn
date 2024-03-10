import "./content.css";
export default function ({ name = "no name", email = "no email", phone = "no phone", children }) {
	return (
		<div className="content">
			<h1>{name}</h1>
			<h3>{email}</h3>
			<h4>{phone}</h4>
			{children}
		</div>
	);
}
