import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
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
    // backgroundColor: 'red',
    marginBottom: 15,
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