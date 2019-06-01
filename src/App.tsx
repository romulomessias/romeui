import React from 'react';
import Button from "./components/buttons/Button";
import jss from 'jss';
// @ts-ignore
import preset from 'jss-preset-default';
import {JssProvider, SheetsRegistry, ThemeProvider} from 'react-jss';
import defaultTheme from "./styles/defaultTheme";

const setupJss = () => {
    jss.setup(preset());
    const sheetsRegistry = new SheetsRegistry();

    const globalStyleSheet = jss.createStyleSheet({
            '@global': {
                body: {
                    backgroundColor: '#aabbcc'
                }
            }
        }
    ).attach();

    sheetsRegistry.add(globalStyleSheet);

    return sheetsRegistry;
};

const sheet = setupJss();

const App: React.FC = () => {
  return (
    <JssProvider registry={sheet}>
        <ThemeProvider theme={defaultTheme}>
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        taget="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>

                <Button> Hello </Button>
            </div>
        </ThemeProvider>
    </JssProvider>
  );
}

export default App;
