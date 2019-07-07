import React from 'react';
import ReactDOM from 'react-dom';

import defaultTheme from "../../styles/defaultTheme";
import {ThemeProvider} from "react-jss";
import Tab from "./Tab";

it('renders tab without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ThemeProvider theme={defaultTheme}>
            <Tab>TAB</Tab>
        </ThemeProvider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
