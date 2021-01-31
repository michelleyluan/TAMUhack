import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& label': {
      fontWeight: '500',
    },
    '& label.Mui-focused': {
      color: '#215363',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderWidth: '2px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#215363',
      },
    },
  },

    
  paper: {
    background: 'white',
    padding: theme.spacing(3),
    borderRadius: 15,
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255,0.6))',
    boxShadow: '6px 6px 20px rgba(122, 122, 122, 0.2)',
    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formHeader: {
    marginBottom: 10,
    padding: 10,
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  button: {
    fontWeight: 'bold',
    width: '100px',
  },
  buttonSave: {
    background: '#c2e0eb',
    color: '#215363',
    // border: '2px solid #21536355',
    '&:hover': {
      backgroundColor: '#215363',
      color: 'white',
    },
  },
  buttonClear: {
    backgroundColor: '#818181',
    color: 'white',
  },
  buttonRow: {
    margin: '10px 8px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
}));