import React from 'react';
// @ts-ignore
import {storiesOf} from '@storybook/react';
// @ts-ignore
import {action} from '@storybook/addon-actions';
// @ts-ignore
import {linkTo} from '@storybook/addon-links';
// @ts-ignore
import {Welcome} from '@storybook/react/demo';
import Tab from "./Tab";
import {ThemeProvider} from 'react-jss';
import defaultTheme from "../../styles/defaultTheme";
import TabBar from "./TabBar";

storiesOf('Tab Bar', module)
// .addDecorator(withThemesProvider(defaultTheme, Theme))
    .add('tabs with text', () =>
        <ThemeProvider theme={defaultTheme}>
            <div style={{maxWidth: 720, marginLeft: 'auto', marginRight: 'auto'}}>
            <TabBar>
                <Tab isCurrent={true}>D</Tab>
                <Tab isCurrent={false}>W</Tab>
                <Tab isCurrent={false}>M</Tab>
                <Tab isCurrent={false}>Y</Tab>
            </TabBar>
            </div>
        </ThemeProvider>
    );


