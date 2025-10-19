import "./errorPage.css"
import { Link } from "react-router-dom";
export default function  ErrorPage(){
  return (
    <div className="mainContent">
        
         <figure className="ErrorContainer">
            <h1>Error</h1>
             <h2 style={{color:"red"}} >404</h2>
            <Link to="/Home" className="getBackBtn">
                <button>Get Back To Home</button>
            </Link>
         </figure>
    </div>

  );

}