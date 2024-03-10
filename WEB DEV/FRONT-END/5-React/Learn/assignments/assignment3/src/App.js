import "./App.css";

import Nav from "./cNav/Nav";
import Post from "./cPost/Post";
import Tag from "./cTag/Tag";

function getPostsContent() {
	let PostList = [
		{
			title: "First title",
			body: "content",
		},
		{
			title: false,
			body: false,
		},
		{
			title: false,
			body: false,
		},
		{
			title: "ayoub Majid",
			body: "nice to meet you",
		},
		{
			title: "Lorem Ipsum",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: false,
			body: false,
		},
		{
			title: "Random Title",
			body: "Random body content.",
		},
		{
			title: "Hello World",
			body: "This is a test message.",
		},
		{
			title: false,
			body: false,
		},
		{
			title: "Another Title",
			body: "Another body content.",
		},
	];
	return PostList.map((post, index) => <Post title={post.title} body={post.body} key={index} />);
}

function getTagsContent() {
	let TagList = [
		{
			btnContent: "Open Button",
			children: <h2>Content 1</h2>,
		},
		{
			btnContent: "Tag Button",
			children: "",
		},
		{
			btnContent: "Open Button",
			children: <img src="https://picsum.photos/id/101/200/200" width="100px" />,
		},
		{
			btnContent: "Tag Button",
			children: <p>Some text</p>,
		},
		{
			btnContent: "Open Button",
			children: <div>Some content</div>,
		},
		{
			btnContent: "Open Button",
			children: <img src="https://picsum.photos/id/202/200/200" width="100px" />,
		},
		{
			btnContent: "Open Button",
			children: <span>Some other text</span>,
		},
		{
			btnContent: "Tag Button",
			children: <p>More content</p>,
		},
		{
			btnContent: "Open Button",
			children: <p>Even more content</p>,
		},
	];
	return TagList.map((tag, index) => <Tag tagBtn={tag.btnContent} children={tag.children} key={index} />);
}
function App() {
	let PostsContent = getPostsContent();
	let TagsContent = getTagsContent();
	return (
		<div className="App">
			<Nav />
			<main className="mainContainer container">
				<div className="posts">{PostsContent}</div>
				<div className="tags">{TagsContent}</div>
			</main>
		</div>
	);
}

export default App;
