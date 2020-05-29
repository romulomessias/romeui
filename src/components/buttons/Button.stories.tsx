import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
// @ts-ignore
import { action } from '@storybook/addon-actions';
// @ts-ignore
import { linkTo } from '@storybook/addon-links';
// @ts-ignore
import { Welcome } from '@storybook/react/demo';
import Button from "./Button";
import { ThemeProvider } from 'react-jss';
import defaultTheme from "../../styles/defaultTheme";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
// .addDecorator(withThemesProvider(defaultTheme, Theme))
    .add('with text', () =>
        <ThemeProvider theme={defaultTheme}>
            <Button onClick={action('clicked')}>Hello Button</Button>
        </ThemeProvider>
    )
    .add('with some emoji', () =>
        <ThemeProvider theme={defaultTheme}>
            <Button onClick={action('clicked')}>
              <span role="img" aria-label="so cool">
                😀 😎 👍 💯
              </span>
            </Button>
        </ThemeProvider>
    )
    .add('with primary color', () =>
        <ThemeProvider theme={defaultTheme}>
            <Button onClick={action('clicked')} color={"primary"}>
                Primary Color
            </Button>
        </ThemeProvider>
    )
    .add('with secondaty color', () =>
        <ThemeProvider theme={defaultTheme}>
            <Button onClick={action('clicked')} color={"secondary"}>
                Secondary Color
            </Button>
        </ThemeProvider>
    )


