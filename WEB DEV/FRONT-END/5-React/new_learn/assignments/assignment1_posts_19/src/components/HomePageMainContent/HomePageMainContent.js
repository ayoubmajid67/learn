import "./HomePageMainContent.css";

import Post from "../Post/Post";
import Button from "../Button/Button";
export default function HomePageMainContent() {
	return (
		<main className="homePageMainContentComponentClass">
			<div className="leftSide">{loadPostContent(5)}</div>
			<div className="rightSide">
				{Array(13)
					.fill(null)
					.map((_, index) => (
						<Button key={index}></Button>
					))}
			</div>
		</main>
	);
}

function loadPostContent(nbrPosts) {
	let posts = [];
	for (let i = 0; i < nbrPosts; i++) {
		posts.push(<Post key={i}></Post>);
	}

	return posts;

 
}
