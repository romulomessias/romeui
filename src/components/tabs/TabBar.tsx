import React, {FC, PropsWithChildren} from 'react';
import injectSheet from "react-jss";
import tabBarStyles, {TabBarClassKey} from "./TabBar.styles";
import {TabProps} from "./Tab";

interface ITabBarProps {
    classes: Record<TabBarClassKey, string>;
}

type TabBarProps = PropsWithChildren<ITabBarProps>;

const TabBarBase: React.FC<TabBarProps> = (props: TabBarProps) => {
    const { classes, children } = props;
    const [currenttab, setCurrentTab] = React.useState(0);

    const childrens = React.Children.map(children, (child, index) => {
        if (!React.isValidElement<TabProps>(child)) {
            throw Error(`${child} is not a valid Tab`);
        }
        const onChildClick = (value: any) => {
            setCurrentTab(index)
        };

        return React.cloneElement<TabProps>(child, {
            isCurrent: index == currenttab,
            onClick: onChildClick
        })

    });

    return (
        <div className={classes.root}>
            {childrens}
        </div>
    )
};

const TabBar = injectSheet(tabBarStyles)(TabBarBase);
export default TabBar;

