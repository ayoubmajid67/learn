import "./HomePageMainContent.css";

import Post from "../Post/Post";
import Button from "../Button/Button";

export default function HomePageMainContent() {
	return (
		<main className="homePageMainContentComponentClass">
			<div className="leftSide">
				{postsData.map((postData, index) => (
					<Post key={index} title={postData.title} body={postData.body}></Post>
				))}
			</div>
			<div className="rightSide">
				{ButtonsData.map((buttonData, index) => (
					<Button key={index} text={buttonData.text}>
						{buttonData.children ? <div>{buttonData.children}</div> : null}
					</Button>
				))}
			</div>
		</main>
	);
}

const postsData = [
	{
		title: "Introduction to React",
		body: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
	},
	{
		title: "Understanding Props and State",
		body: "Props are read-only components, meaning they should not be modified. State, on the other hand, is a private and fully controlled data structure that affects how the component behaves.",
	},
	{
		title: "Lifecycle Methods in React",
		body: "React components have several lifecycle methods that you can override to run code at particular times in the process.",
	},
	{
		title: "Hooks in React",
		body: "Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8.",
	},
	{
		title: "React Context API",
		body: "The Context API is a way to effectively create global variables that can be passed around in a React app. It eliminates the need for prop drilling.",
	},
];

const ButtonsData = [
	{
		text: "JavaScript",
		children: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="20" height="20" />,
	},
	{
		text: "React",
		children: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="20" height="20" />,
	},
	{
		text: "CSS",
		children: <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" width="20" height="20" />,
	},
	{
		text: "HTML",
		children: <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" width="20" height="20" />,
	},
	{
		text: "Node.js",
		
	},
];
