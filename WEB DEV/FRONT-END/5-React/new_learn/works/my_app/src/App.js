import logo from "./logo.svg";
import "./App.css";

import MyButton from "./myButton/myButton";
import Article from "./Article/Article";

function MyHeader() {
	return <h1>Youbista header</h1>;
}

function App() {
	return (
		<div className="App">
			<div className="articleContainer">
				<Article name="ahmed" email="ahmed@gmail.com" birthDate="1996">
					<h1>nice</h1>
				</Article>
				<Article name="kamal" email="kamal@gmail.com" birthDate="1912"></Article>
				<Article  email="amira@gmail.com" birthDate="1926"></Article>
			</div>
		</div>
	);
}

export default App;
