import Theme from "../../styles/interfaces/Theme";

const tabBarStyles = (theme: Theme) => ({
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
