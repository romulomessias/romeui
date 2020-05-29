import Theme from "../../styles/interfaces/Theme";

export type ButtonClassKey = 'root'

const buttonStyles = (theme: Theme) => ({
    root: {
        textTransform: 'uppercase',
        fontWeight: 400,
        borderWidth: 0,
        padding: theme.spacing(1),
        cursor: 'pointer',
        boxShadow: '0px 0px 0px transparent',
        webkitBoxShadow: '0px 0px 0px transparent',
        display: 'inline-block',
        borderRadius: 5,

        '&:hover' : {
            textDecoration: 'none',
            backgroundColor: '#e0e0e0',
        },

        '&:focus' : {
            outline:0,
        },
    },

    primary: {
        backgroundColor: theme.palette.primary.main,
        // color: theme.palette.primaryText.main,

        '&:hover' : {
            textDecoration: 'none',
            backgroundColor: theme.palette.primary.lighter,
            // color: theme.palette.primaryTextColor.darker,
        },
    },

    secondary: {
        backgroundColor: theme.palette.secondary.main,
        // color: theme.palette.secondaryTextColor.main,

        '&:hover' : {
            textDecoration: 'none',
            backgroundColor: theme.palette.secondary.lighter,
            // color: theme.palette.secondaryTextColor.darker,
        },
    },
});


export default buttonStyles;
