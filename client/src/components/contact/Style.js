
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
  },
  paper: {
    padding: theme.spacing(2),
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight : '100px',
    marginLeft : '100px',
    marginTop : '50px'

  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 20,
    backgroundColor : `#f5cdf1`,
    hover :`#f5cdf1`
  }
}));
