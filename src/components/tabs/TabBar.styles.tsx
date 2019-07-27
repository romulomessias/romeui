import Theme from "../../styles/interfaces/Theme";
import {CSSProperties} from "jss/css";
import {ButtonClassKey} from "../buttons/Button.styles";

export type TabBarClassKey = 'root';

const tabBarStyles = (theme: Theme): Record<TabBarClassKey, CSSProperties | Record<string, CSSProperties>> => ({
    root: {
        display: 'flex',
        padding: 2,
        backgroundColor: '#EFEDEF',
        borderRadius: theme.sizes.spacing(1),

        '& :last-child': {
            borderColor: '#EFEDEF'
        }
    }
});

export default tabBarStyles
