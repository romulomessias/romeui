import React from  'react';
import withStyles from 'react-jss'
import buttonStyles from "./Button.styles";
import clsx from "clsx";

interface IButtonProps {
    classes: any;
    color?: 'default' | 'primary' | 'secondary'
    onClick?: (e?: any) => any
}

export type ButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonBase: React.FC<ButtonProps> = ( props ) => {
    const {classes, color, children, ...others} = props;

    const classNames = clsx(classes.root, {
        [classes.primary]: color == "primary",
        [classes.secondary]: color == "secondary"
    });

    return (<button className={classNames} {...others}> { children } </button>)
};
const Button = withStyles(buttonStyles)(ButtonBase);
export default  Button;
