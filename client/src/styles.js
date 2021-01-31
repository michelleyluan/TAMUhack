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
    page: {
      padding: '5%',
      display: 'flex',
      alignContent: 'center',
    },
    bigContainerGlass: {
      background: 'white',
      minHeight: '80vh',
      width: '95%',
      background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255,0.3))',
      borderRadius: '2rem',
      padding: '3px 30px 15px 30px',
      backdropFilter: 'blur( 15px )',
      webkitBackdropFilter: 'blur( 15px )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    },
  }));