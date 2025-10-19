import "./Post.css";

export default function Post({ title, body }) {
	return (
		<figure className="postComponentClass">
			<h2 className="title">{title}</h2>
			<hr />
			<p className="body">{body}</p>
		</figure>
	);
}
Post.defaultProps = {
	title: "This is the post title",
	body: "this is the post body",
};
