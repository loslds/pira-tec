import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    min-height: 100%;
    background: #66bce7;

}

body {
  display: block;
  margin: 0;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color:rgb(254, 254, 254);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 0;
}


*, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,syste-UI,sans-serif;
}

ul {
    list-style: none;
    padding-left: 0;
}

#root{
  display: block;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p{
  display: block;
  margin: 0px auto;
  padding: 0px;
}
`
export default GlobalStyles
