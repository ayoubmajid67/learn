import logo from "./logo.svg";
import "./App.css";
import Content from  './content'


 const elemStyling={ 
  fontWeight:"bold"
 }
function App() {
	return (
		<div className="App">
			<header className="App-header" style={elemStyling}>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to save.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<Content>nice to meet you</Content>
			</header>
		</div>
	);
}


export default App;
