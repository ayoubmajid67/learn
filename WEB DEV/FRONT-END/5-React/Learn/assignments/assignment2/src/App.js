import "./App.css";

import Nav from "./cNav/Nav";
import Post from "./cPost/Post";
import Tag from "./cTag/Tag"; 
function App() {
	return (
		<div className="App">
			<Nav />
			<main className="mainContainer container">
				<div className="posts">
					<Post title="First title" body="content" />
					<Post />
					<Post />
					<Post title="ayoub Majid" body="nice to meet you" />
				</div>
				<div className="tags">
        <Tag>
           <h1>Content</h1>

		</Tag>
        <Tag>
        <img src="https://ayoubmajid67.github.io/Portfolio//back/webp/about.webp" width="100px" />
		</Tag>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
        </div>
			</main>
		</div>
	);
}

export default App;
