import React from  'react';
import withStyles from 'react-jss'
import buttonStyles from "./Button.styles";

interface IButtonProps {
    classes: any
}

export type ButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonBase: React.FC<ButtonProps> = ({classes, children , ...others}) => {
    return (<button className={classes.root} {...others}> { children } </button>)
};
const Button = withStyles(buttonStyles)(ButtonBase);
export default  Button;
