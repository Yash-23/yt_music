import {makeStyles} from "@material-ui/styles";

export default makeStyles({
    main: {
        boxSizing: 'border-box',
        backgroundColor: '#030303',
        padding: '0 16px',
        alignItems: 'center',
        position: 'fixed',
        height: '64px',
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        borderBottom: '1px solid #333333',
        zIndex: 3,
    },
    logo:{
        lineHeight: 1,
        zIndex: 3,
    },
    navItems:{
        boxSizing: 'border-box',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '64px',
        padding: '8px 0',
        right: 0,
        zIndex: 1,
        '& a': {},
        '& h6': {
            color: '#ffffffb3',
            margin: '0 24px',
            lineHeight: 1.2,
            cursor: 'pointer',
            '&:hover': {
                color: '#fff',
            },
        },
    },
    link:{
        textDecoration:"none"
    },
    boxEnd:{
        alignItems: 'center',
        zIndex: 1,
        '& .MuiIconButton-root': {
            padding: '8px',
        },
        '& .MuiButton-root': {
            margin: '0 0 0 8px',
        },
    },
    searchBar: {
        alignItems: 'center',
        gap: '16px',
    },
})