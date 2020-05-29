import Theme from "./interfaces/Theme";

const defaultTheme: Theme = {
    palette: {
        primary: {
            main: '#0062ff',
        },
        secondary: {
            main: '#90ff5a',
        }
    },
    spacing: unit => unit * 8,
};

export default defaultTheme;
