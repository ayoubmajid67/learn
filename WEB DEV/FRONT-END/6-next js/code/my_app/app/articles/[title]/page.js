export default async function Article({params}) {
	const {title} = params; 
  return (
		<div className="ArticleComponentClass">
			<h1>Show Article</h1>
			<h1>{title}</h1>
		</div>
	);
}
