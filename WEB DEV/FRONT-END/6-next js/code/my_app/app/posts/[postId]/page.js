import PostItem from "@/app/components/post/PostItem";
import { Suspense } from "react";
export default async function PostDetails({ params }) {
	const { postId } = params;

      const loading =(
		<div>
			<h4>loading post details ...</h4>
		</div>
	  )

	return (
		<div className="PostDetailsPage">
			<h1>Posts details</h1>
			<Suspense fallback={loading}>
				<PostItem postId={postId}  />
			</Suspense>
		</div>
	);
}
