
export const metadata={
	title :"Article page"
}

export default function ArticlesLayout({ children }) {
	return (
		<div className="ArticlesPagesLayout">
			<hr style={{ margin: "20px auto", width: "80%" }} />
			{children}
		</div>
	);
}
