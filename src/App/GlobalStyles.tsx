import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = () => {
  const Inject = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Chivo:300,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu,sans-serif, roboto, noto,
    segoe ui, arial;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
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
