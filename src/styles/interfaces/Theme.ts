import Palette from "./Palette";

export default interface Theme {
    palette: Palette;
    spacing: (unit: number) => number;
}
