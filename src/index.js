import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'typeface-roboto';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

render(
    <div>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </div>, document.getElementById('root'))
