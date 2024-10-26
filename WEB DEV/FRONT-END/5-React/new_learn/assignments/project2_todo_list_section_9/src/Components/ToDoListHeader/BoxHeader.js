import {Typography} from "@mui/material";
import "./BoxHeader.css"
export default function BoxHeader({title="Todo List"}) {

    return (

        <header className="boxHeaderComponentClass"> 
		<Typography variant="h4" gutterBottom  className="title" >
			{title}
		</Typography>
		<hr />
	</header>

    );

}
