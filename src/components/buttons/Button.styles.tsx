import Theme from "../../styles/interfaces/Theme";
import {CSSProperties, Style} from "jss/css";

export type ButtonClassKey = 'root' | 'primary' | 'secondary'

const buttonStyles = (theme: Theme): Record<ButtonClassKey, CSSProperties | Record<string, CSSProperties>> => ({
    root: {
        textTransform: 'uppercase',
        color: '#000',
        fontWeight: 500,
        borderWidth: 0,
        padding: theme.sizes.padding,
        paddingLeft: theme.sizes.spacing(1.75),
        paddingRight: theme.sizes.spacing(1.75),
        cursor: 'pointer',
        boxShadow: '0px 0px 0px transparent',
        WebkitBoxShadow: '0px 0px 0px transparent',

        display: 'inline-block',
        borderRadius: theme.sizes.radius,

        '&:hover' : {
            textDecoration: 'none',
            color: '#000',
            backgroundColor: '#e0e0e0',
        },

        '&:focus' : {
            outline:0,
        },
    },

    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primaryText.main,

        '&:hover' : {
            textDecoration: 'none',
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primaryText.darker,
        },
    },

    secondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondaryText.main,

        '&:hover' : {
            textDecoration: 'none',
            backgroundColor: theme.palette.secondary.lighter,
            color: theme.palette.secondaryText.darker,
        }
    },
});


export default buttonStyles;
