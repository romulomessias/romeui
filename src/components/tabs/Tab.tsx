import React from 'react';
import withStyles from "react-jss";
import tabStyles from "./Tab.styles";
import clsx from "clsx";


interface ITabProps {
    classes: any;
    isCurrent: boolean;
    value?: any;
    onClick?: (value?: any) => any;
}

export type TabProps = ITabProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const TabBase: React.FC<TabProps> = (props: TabProps) => {
    const { classes, isCurrent, children, value, onClick, ...others } = props;
    const classNames = clsx(classes.root, {
        [classes.current]: isCurrent
    });

    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    )
};

const Tab = withStyles(tabStyles)(TabBase);;
export default  Tab;
