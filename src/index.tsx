import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import axe from '@axe-core/react'

import App from './App/App'
import { checkIsMobile } from './utils'

// @ts-ignore
window.isMobile = checkIsMobile()

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
)
