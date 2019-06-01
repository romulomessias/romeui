import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
import defaultTheme from "../../styles/defaultTheme";
import {ThemeProvider} from "react-jss";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ThemeProvider theme={defaultTheme}>
        <Button> Hello </Button>
      </ThemeProvider>
      , div);
  ReactDOM.unmountComponentAtNode(div);
});
