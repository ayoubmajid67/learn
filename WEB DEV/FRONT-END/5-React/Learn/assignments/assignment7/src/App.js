import "./App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { orange } from "@mui/material/colors";
function App() {
	let [divWidth, setDivWidth] = useState(100);

	function handelWidth() {
		divWidth === 100 ? setDivWidth(300) : setDivWidth(100);
		console.log(divWidth);
	}

	return (
		<Container>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
					Accordion 1
				</AccordionSummary>
				<AccordionDetails style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
					Accordion 1
				</AccordionSummary>
				<AccordionDetails style={{ textAlign: "center" }}>
					<Switch name="" color="success" onChange={handelWidth} />
				</AccordionDetails>
			</Accordion>

			<div style={{ height: divWidth, backgroundColor: orange[600], transition: "0.3s",display:"flex",alignItems:"center",justifyContent:"center" ,overflow:"hidden"}}>
				<h2  >Hello world</h2>
			</div>
		</Container>
	);
}

export default App;
