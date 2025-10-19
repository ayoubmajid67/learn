import "./Button.css";

export default function Button({ text, children }) {
	return (
		<div className="buttonComponentClass">
			<button >{text}</button>
			<div className="childrenContainer">{children}</div>
		
		</div>
	);
}
Button.defaultProps = {
	text: "click me",
};
