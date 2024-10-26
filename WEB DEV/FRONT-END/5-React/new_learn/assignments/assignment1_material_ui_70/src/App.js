import "./App.css";
import AccordionComp from "./Components/Accordion/Accordion";
import { createTheme, ThemeProvider,Container } from "@mui/material";
import { useState } from "react";

import { green,orange } from "@mui/material/colors";
import HeightSwitch from "./Components/HeightSwitch/HeightSwitch";
const theme = createTheme({
	palette: {
		primary: {
			main: green[500],
		},
	},
});


function App() {
	const [divHeightStat, setDivHeightStat] = useState("400px");
	function handleChangeHeightStat(newHeightStat) {
		setDivHeightStat(newHeightStat ? "100px":"400px");
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
        <Container style={{marginTop:"30px"}}>

				<AccordionComp title="Accordion 1" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat sequi! Tempore voluptatem architecto sint dolorem nemo quia sit pariatur consequuntur placeat provident saepe, non perferendis ex sapiente odit minus." />
				<AccordionComp title="Accordion 2" body=""  >
        <HeightSwitch onHeightChange={handleChangeHeightStat} ></HeightSwitch>
          </AccordionComp>

        <div className="bottomDiv"  style={{height:divHeightStat ,backgroundColor:orange[300]}} >
          <h4>Hello world</h4>
        </div>
                  
        </Container>
			</div>
		</ThemeProvider>

	);
}

export default App;
