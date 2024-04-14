import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Slider from '@mui/material/Slider';

export default function Comp(){
 return (
    <div  color='primary'>
        <Stack direction="row" spacing={3}>
    <Button color="primary"  variant='contained' onClick={ ()=> { console.log("You clicked me ")}} >Primary</Button>
    <Button color="secondary" onClick={ ()=> { console.log("You clicked me ")}} >Secondary</Button>
    <Button variant="contained" color="success" size="large">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
  </Stack>

 <Stack  direction="column" spacing={3} >
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
<Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
<Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />

<Stack direction="row" spacing={3}>
    <Avatar>H</Avatar>
<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
</Stack>


 </Stack>

        <Slider aria-label="Volume" />
  

    </div>


  

 );

}