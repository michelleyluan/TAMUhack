import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '25px 0 20px 0px',
    },
    heading: {
      color: '#29677B',
      fontWeight: 'bold',
    },
    image: {
      marginLeft: '15px',
    },
    Fab: {
      justifyContent: 'center',
      // marginLeft: 100,
      // backgroundColor: '#29677B',
      // color: 'white',
     
     
    },
    FabButton: {
      // justifyContent: 'center',

      // backgroundColor: '#29677B',
      // backgroundColor: '#215363',
      // color: 'white',
      backgroundColor: '#B6E9F9',
      color: '#215363',
      '&:hover': {
        backgroundColor: '#215363',
        color: 'white',
      },
     
     
    }
  }));