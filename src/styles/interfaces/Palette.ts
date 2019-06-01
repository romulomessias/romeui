export default interface Palette {
    primary: Partial<PalleteColor>;
    seconndary: Partial<PalleteColor>;
}

export interface PalleteColor {
    main: string;
    lighter: string;
    darker: string;
    text: string;
}
