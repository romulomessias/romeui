import React, {ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren} from 'react';
import withStyles from "react-jss";
import tabStyles from "./Tab.styles";
import clsx from "clsx";

interface ITabProps {
    classes: any;
    isCurrent?: boolean;
    value?: any;
}

export type TabProps = PropsWithChildren<ITabProps> & HTMLAttributes<HTMLElement>

const TabBase: React.FC<TabProps> = (props: TabProps) => {
    const { classes, isCurrent, children, value, onClick, ...others } = props;
    const classNames = clsx(classes.root, {
        [classes.current]: isCurrent
    });

    const onTabClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if(onClick) {
          onClick(e);
      }
    };

    return (
        <div {...others} className={classNames} onClick={onTabClick}>
            {children}
        </div>
    )
};

TabBase.defaultProps = {
    isCurrent: false,
}

const Tab = withStyles(tabStyles)(TabBase);;
export default  Tab;
