import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    backgroundColor: '#212121',
    border: '1px solid hsla(0, 0%, 53.3%, 0.4);',
    borderRadius: '2px',

    '& input::placeholder': {
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
  },
  searchBar: {
    color: '#909090',
    fontSize: '22px',
    border: 'none',
    backgroundColor: '#212121',
    padding: '0 56px 0 0',
    height: '48px',
    width: '804px',
    '&:focus': {
      outline: 'none',
    },
  },
  searchArrowContainer: {
    padding: '12px 16px',
    width: '56px',
    height: '48px',
    cursor: 'pointer',
    '& :active': {
      color: '#808080',
    },
  },
  searchArrow: {
    color: '#909090',
    width: '24px',
    height: '24px',
  },
}));
