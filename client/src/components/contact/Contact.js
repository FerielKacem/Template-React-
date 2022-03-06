
import { TextField , Button, Typography, Paper} from "@material-ui/core";
import useStyles from'./Style.js';

import axios from "axios"
const Contact =()=>{
    const classes = useStyles();
return(<div>

<Paper className={classes.paper}>
 <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `}>
   <Typography variant ="h6">Contact Us </Typography>
 <TextField 
 name="Name" 
 variant="outlined"
  label="Name"
   fullWidth 
 
  />
 <TextField 
 name="Family Name" 
 variant="outlined"
  label="Family Name"
   fullWidth 
   
  
/>
<TextField 
 name="Object" 
 variant="outlined"
  label="Object"
   fullWidth 
   
  />

<TextField 
 name="Message" 
 variant="outlined"
  label="Message"
   fullWidth 

  />



<Button className={classes.buttonSubmit} variant="contained"  size="large" type="submit"fullWidth>Submit </Button>


 </form>


</Paper>
    </div>)
}
export default Contact;
 