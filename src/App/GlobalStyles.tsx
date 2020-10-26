import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = () => {
  const Inject = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu,sans-serif, roboto, noto,
    segoe ui, arial;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    user-select: text !important;
    transform: translate3d(0,0,0);
}
  html, 
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    background: #fff;
  }
  
  #root {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
`
  return <Inject />
}
export default GlobalStyle
