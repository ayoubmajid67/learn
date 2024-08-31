import "./Article .css";

export default function Article({ name, email, birthDate ,children}) {

    console.log(children)

	return (
		<article className="articleComponentClass">
			<h2>{name}</h2>
			<h2>{email}</h2>
			<h2>{birthDate}</h2>

            <div className="children">
              {children}
            </div>
		</article>
	);
}
Article.defaultProps = {
    name: "Default Name",
    email: "default@example.com",
    birthDate: "01-01-1970",
  };
