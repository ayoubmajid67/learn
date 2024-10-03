import "./Alert.css";
export default function Alert({ message = "", type = "",  }) {
	return (
		<div className={`AlertComponentClass`}>
			<figure className={`alertContent`}>
				<h1 className={`message ${type}`}>{message}</h1>
			</figure>
		</div>
	);
}
