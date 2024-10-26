import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Typography from "@mui/material/Typography";


export default function AccordionComp({ title = "Accordion", body = "Body" ,children }) {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{body}</Typography>
			   {children}
			</AccordionDetails>
		</Accordion>
	);
}
