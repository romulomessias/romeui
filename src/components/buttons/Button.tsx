import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import withStyles from 'react-jss'
import buttonStyles, {ButtonClassKey} from "./Button.styles";
import clsx from "clsx";

interface IButtonProps {
    classes: Record<ButtonClassKey, string>;
    color?: 'default' | 'primary' | 'secondary'
    // onClick?: (e?: React.MouseEvent) => any
}

export type ButtonProps = PropsWithChildren<IButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonBase: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {classes, color, children, ...buttonProps} = props;
    const classNames = clsx(classes.root, {
        [classes.primary]: color == "primary",
        [classes.secondary]: color == "secondary"
    });

    return <button className={classNames} {...buttonProps}> {children} </button>
};
const Button = withStyles(buttonStyles)(ButtonBase);
export default Button;
