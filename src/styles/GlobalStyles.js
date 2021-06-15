import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle` 
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

html {
    min-height: 100%;
    background: #202020;
    
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
`
export default GlobalStyles
