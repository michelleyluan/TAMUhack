import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255,0.6))',
    boxShadow: '6px 6px 20px rgba(122, 122, 122, 0.2)',
    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',

  },
  grid: {
    display: 'flex',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardHeader: {
    backgroundColor: '#29677B',
    display: 'flex',
    justifyContent: 'space-between',
  },
  eventName: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 35,
    padding: '20px 0',
  },
  cardContent: {
    padding: 35,
    paddingTop: 20,
    paddingBottom: 5,
  },
  cardActions: {
    // backgroundColor: 'green',
  },
  cardSection: {
    marginBottom: 25,
  },
  cardSubtitle: {
    color: '#07222B',
    fontSize: 19,
    fontWeight: 'bold',
  },
  sectionTextBlock: {
    padding: '6px 10px',
    margin: '7px 5px 5px 0px',
    borderLeft: '3px solid #215363',
  },
  iconButton: {
    '&:hover': {
      backgroundColor: '#0583a9',
    },
  }
});