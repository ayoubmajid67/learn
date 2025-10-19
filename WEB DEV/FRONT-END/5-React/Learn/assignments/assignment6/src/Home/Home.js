import "./home.css"
import { Link } from 'react-router-dom';
export default function home() {
	return (
		<>
			<h1>Hello from Home Page</h1>
            <div>
              <Link to="/Services">
              <button >Go to Services Page</button>
              </Link> 
            
            </div>
		</>
	);
}
