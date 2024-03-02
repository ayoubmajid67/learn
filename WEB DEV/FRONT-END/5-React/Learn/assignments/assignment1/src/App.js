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
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
				<div className="tags">
        <Tag/>
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
