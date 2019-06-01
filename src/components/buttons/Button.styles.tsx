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
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        borderRadius: 8,

        '&:hover' : {
            textDecoration: 'none',
        },

        '&:focus' : {
            outline:0
        }
    }
});


export default buttonStyles;
