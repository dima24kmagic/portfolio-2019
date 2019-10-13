import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App/App'
import ThemeModeContextProvider from './theme/ThemeModeContextProvider'

// document.addEventListener(
//   'wheel',
//   e => {
//     e.preventDefault()
//     console.log(e)
//   },
//   { passive: false },
// )

ReactDOM.render(
  <BrowserRouter>
    <ThemeModeContextProvider>
      <App />
    </ThemeModeContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
