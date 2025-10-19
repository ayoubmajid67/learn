
import "./layout.css"
import {Outlet} from "react-router-dom"
export default function Layout(){

    return(
        <>
           <h2 className="title">CURD OPERATION </h2>
               <Outlet/>
        </>
     
    );

}