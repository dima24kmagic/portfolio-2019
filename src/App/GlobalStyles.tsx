import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useTheme } from '../theme/theme'

const GlobalStyle = () => {
  const theme = useTheme()
  const Inject = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Chivo:300,700,900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  ::-webkit-scrollbar {
    //width: 0px;  /* Remove scrollbar space */
    //background: transparent;  /* Optional: just make scrollbar invisible */
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
    background: ${({
      theme: {
        bg: { primary },
      },
    }) => primary};
  }
  
  #root {
    width: 100%;
    height: 100%;
    //overflow-y: auto;
  }
`
  return (
    <ThemeProvider theme={theme}>
      <Inject />
    </ThemeProvider>
  )
}
export default GlobalStyle
