import React from 'react';
import injectSheet from "react-jss";
import tabBarStyles from "./TabBar.styles";

interface ITabBarProps {
    classes: any;
}

type TabBarProps = React.PropsWithChildren<ITabBarProps>;

const TabBarBase: React.FC<TabBarProps> = (props: TabBarProps) => {
    const { classes, children } = props;
    const [currenttab, setCurrentTab] = React.useState(0);



    const childrens = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
            return null;
        }

        const isCurrent = index == currenttab;
        const onChildClick = (value: any) => {
            setCurrentTab(index)
        };

        return React.cloneElement(child, {
            isCurrent,
            onClick: onChildClick
        })

    });

    return (
        <div className={classes.root}>
            {/*{children}*/}
            {childrens}
        </div>
    )
};

const TabBar = injectSheet(tabBarStyles)(TabBarBase);
export default TabBar;

