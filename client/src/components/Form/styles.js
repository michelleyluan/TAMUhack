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
    padding: theme.spacing(3),
    borderRadius: 15,
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
    backgroundColor: '#B6E9F9',
    color: '#215363',
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