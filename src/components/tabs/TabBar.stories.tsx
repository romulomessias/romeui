import React from 'react';
// @ts-ignore
import {storiesOf} from '@storybook/react';
import Tab from "./Tab";
import {ThemeProvider} from 'react-jss';
import defaultTheme from "../../styles/defaultTheme";
import TabBar from "./TabBar";

storiesOf('Tab Bar', module)
    .add('tabs with text', () =>
        <ThemeProvider theme={defaultTheme}>
            <div style={{maxWidth: 720, marginLeft: 'auto', marginRight: 'auto'}}>
                <TabBar>
                    <Tab isCurrent={true}>First</Tab>
                    <Tab isCurrent={false}>Second</Tab>
                    <Tab isCurrent={false}>Third</Tab>
                </TabBar>
            </div>
        </ThemeProvider>
    );


