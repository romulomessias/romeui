import Theme from "../../styles/interfaces/Theme";
import {CSSProperties} from "jss/css";

export type TabClassKey = 'root' | 'current'

const tabStyles = (theme: Theme) : Record<TabClassKey, CSSProperties> => ({
    root: {
        color: '#000',
        fontWeight: 'bold',
        flexGrow: 1,
        flexBasis: 0,
        minWidth : 36,

        marginTop: theme.sizes.padding * 0.75,
        marginBottom: theme.sizes.padding * 0.75,

        paddingRight: theme.sizes.padding * 2,
        paddingLeft: theme.sizes.padding * 2,

        cursor: 'pointer',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: 'rgba(0, 0, 0, 0.12)',
        borderRightStyle: "solid",
    },
    current: {
        margin: 0,
        padding: theme.sizes.padding * 0.75,
        paddingRight: theme.sizes.padding * 2,
        paddingLeft: theme.sizes.padding * 2,
        borderRightColor: 'transparent',
        borderRadius: theme.sizes.spacing(1),
        backgroundColor:  '#fff',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
        WebkitBoxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
    }
});


export default tabStyles;
