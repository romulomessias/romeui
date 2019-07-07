import Theme from "./interfaces/Theme";

const defaultTheme: Theme = {
    palette: {
        primary: {
            lighter: '#69a9ff',
            main: '#0079FD',
            darker: '#0050cb'
        },
        secondary: {
            lighter: '#718792',
            main: '#455a64',
            darker: '#1c313a'
        },
        primaryText: {
            lighter: '#000',
            main: '#fff',
            darker: '#fff'
        },
        secondaryText: {
            lighter: '#fff',
            main: '#fff',
            darker: '#fff'
        },
        background: {
            lighter: '#fff',
            main: '#F3F1F7'
        }
    },
    sizes : {
        spacing: value => value * 8,
        padding: 8,
        radius: 50,
    }
};

export default defaultTheme;
