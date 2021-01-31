import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'grid',
    gridGap: '3em 2em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
    justifyContent: 'center',
    padding: 40,
    paddingTop: 0,
  },
  formContainer: {
    maxWidth: '400px',
    minWidth: '315px',
    justifySelf: 'center',
  },
  postContainer:{
    minWidth: '300px',
    maxWidth: '320px',
    justifySelf: 'center',
  }
}));