import "./App.css";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

import { orange, green } from "@mui/material/colors";

import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
	  backgroundColor: '#1A2027',
	}),
  }));
  
const theme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
		secondary: {
			main: green[500],
		},
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
			<Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
			
			</div>
		</ThemeProvider>
	);
}  

export default App;
