import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App/App'
import ThemeModeContextProvider from './theme/ThemeModeContextProvider'

ReactDOM.render(
  <BrowserRouter>
    <ThemeModeContextProvider>
      <App />
    </ThemeModeContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
