import "./myButton.css";


export default function MyButton() {
	const { title, githubLink, class: buttonClass } = ManageByButton.myButtonInfo;

	const styling = {
		backgroundColor: "#eee",
		color :"black",
		border : "4px solid black",
		borderRadius : "12px",
		padding: "10px",
	};

	return (
		<div className={`content ${buttonClass}`} onClick={ManageByButton.showCurrentDate}>
			<h1 style={styling}>{title}</h1>
			<a href={githubLink}>my github account</a>
		</div>
	);
}

class ManageByButton {
	static myButtonInfo = {
		title: "Hello world",
		githubLink: "https://github.com",
		class: "contentButton",
	};

	static showCurrentDate() {
		console.log(new Date());
	}
}
