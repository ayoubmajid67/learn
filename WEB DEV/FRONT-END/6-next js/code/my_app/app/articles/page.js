import Link from "next/link";


export default function Articles() {
	return (
		<div className="ArticlesComponentClass">
			<h1>Welcome to the articles page</h1>
            <Link href="articles/featuredArticles">visit Featured Articles</Link>
		</div>
	);
}
