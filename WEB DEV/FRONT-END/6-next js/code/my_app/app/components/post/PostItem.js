"use Client";

const styles = {
	container: {
		padding: "20px",
		border: "1px solid #ddd",
		borderRadius: "5px",
		maxWidth: "400px",
		margin: "20px auto",
		backgroundColor: "#f9f9f9",
	},
	title: {
		textAlign: "center",
		color: "#333",
	},
	list: {
		listStyleType: "none",
		padding: 0,
		lineHeight: "1.8",
		color: "black",
	},
};

export default async function PostItem({ postId }) {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
	const data = await response.json();
	return (
		<div style={styles.container}>
			<h2 style={styles.title}>Post Details</h2>
			<ul style={styles.list}>
				<li>
					<strong>User ID:</strong> {data.userId}
				</li>
				<li>
					<strong> Post ID:</strong> {data.id}
				</li>
				c
				<li>
					<p className="description">{data.body}</p>
				</li>
			</ul>
		</div>
	);
}
