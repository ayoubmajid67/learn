import styles from "./Button.module.css"
import { usernameContext } from "../../contexts/textContext";
 import { useContext } from "react";
export default function Button(){
   
    const username = useContext(usernameContext); 

    console.log(username); 
    

    return(

    <div className={styles.buttonContainer}>

     <h1 > My button</h1>
     <button>click me </button>
    </div>

    )
}