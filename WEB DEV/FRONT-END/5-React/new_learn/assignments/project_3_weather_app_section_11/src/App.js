import logo from './logo.svg';
import './App.css';

// material ui imports : 
import { Stack ,Container } from '@mui/material';


// Custom components : 
import WeatherCard from './components/WeatherCard/WeatherCard';
function App() {
  return (
    <div className="App">  
    <Stack justifyContent="center" alignItems="center" sx={{flexGrow:"1"}} >
        
        
        <WeatherCard/>

     
    

    </Stack>
      
    </div>
  );
}

export default App;
