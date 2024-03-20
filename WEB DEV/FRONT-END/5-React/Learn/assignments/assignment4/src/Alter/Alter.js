import "./Alter.css";

export default function Alter({ msg = "Message To Show", msgColor = "green", children }) {
	return (
		<div className="alterDiv">
			<h2 style={{ color: msgColor }} className="alterDivText">
				{msg}
			</h2>
			{children}
		</div>
	);
}
