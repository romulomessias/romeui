export default interface Palette {
    primary: Partial<PalleteColor>;
    secondary: Partial<PalleteColor>;
}

export interface PalleteColor {
    main: string;
    lighter: string;
    darker: string;
    text: string;
}
