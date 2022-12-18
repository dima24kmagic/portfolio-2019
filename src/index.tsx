import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import axe from '@axe-core/react'
import { createBrowserHistory } from 'history'

import App from './App/App'
import { checkIsMobile } from './utils'

// @ts-ignore
window.isMobile = checkIsMobile()

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000)
}

const history = createBrowserHistory({
  basename: '/', // specify the base path for the router
  forceRefresh: true, // forces a page refresh when the URL changes
})

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
)
