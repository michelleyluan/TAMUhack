import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

