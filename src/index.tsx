import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './App/App'
import ThemeModeContextProvider from './theme/ThemeModeContextProvider'
import { checkIsMobile } from './utils'

// @ts-ignore
window.isMobile = checkIsMobile()

ReactDOM.render(
  <HashRouter>
    <ThemeModeContextProvider>
      <App />
    </ThemeModeContextProvider>
  </HashRouter>,
  document.getElementById('root'),
)
