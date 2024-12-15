import Link from "next/link";
import PostItem from "../components/post/PostItem";

export const metadata = {
	title: "Posts page",
};

export default async function Posts() {
	/*
	 cache:"force-cache"  //  SSR 
     cache:"no-store" // SSG 
     cache:"no-store" // ISG
	 next :{
	 revalidate : 60 
	 }

	*/


	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		cache: "no-store",
		next: {
			revalidate: 120,
		},
	});

	const posts = await response.json();

	return (
		<div className="postsComponentClass">
			<h1>Posts page</h1>
			<Link href="/">
				<button>Take me to the home page</button>
			</Link>
			<div className="postsContainer">
				{posts.map((post) => (
					<div>
						<Link href={`/posts/${post.id}`}>
							<p className="description">{post.body}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
