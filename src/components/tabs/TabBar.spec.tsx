import React from 'react';
import ReactDOM from 'react-dom';

import defaultTheme from "../../styles/defaultTheme";
import {ThemeProvider} from "react-jss";
import Tab from "./Tab";
import TabBar from "./TabBar";

it('renders tab without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ThemeProvider theme={defaultTheme}>
            <TabBar>
                <Tab>Hello</Tab>
            </TabBar>
        </ThemeProvider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
