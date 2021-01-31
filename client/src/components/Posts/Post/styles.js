import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
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
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
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
    // backgroundColor: 'green',
    marginBottom: 25,
  },
  cardSubtitle: {
    color: '#07222B',
    fontSize: 21,
    fontWeight: 'bold',
  },
  sectionTextBlock: {
    // backgroundColor: 'green',
    padding: 10,
    margin: 5,
    marginLeft: 0,
    borderLeft: '3px solid #215363',
    // borderRadius: '5px',
    // boxShadow: '3px 3px 2px 0.3px #c7d1f0',
  }
});