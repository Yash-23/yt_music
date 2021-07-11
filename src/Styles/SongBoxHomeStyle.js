import { makeStyles } from '@material-ui/styles';
import logo from '../logo.svg';

export default makeStyles ({
    thumbnail:{
        backgroundImage: `${logo}`,
        borderRadius: '4px',
        width:'180px',
        cursor:'pointer',
        //position:'absolute',
        '&:hover': {
            boxShadow: 'inset 0px 0px 100px rgba(0, 0, 0, 0.6)'
        },
    },
    dotIcon:{
        position:'relative',
        color:'white'
    }
})