import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../../shared/App.css';

const GlobalStyle = createGlobalStyle`

${reset};

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
};

html{
    font-family: "regular";
    background-color:#9FBAFF;
}

a{
    text-decoration: none;
    color:black;
}

input, textarea{
    outline: 1px solid lightgrey;
    border:none;
    border-radius: 5px;
    padding: 5px;
}

button{
    outline: none;
    border:none;
    /* border-radius: 5px; */
    cursor: pointer;
    background-color:#9FBAFF;
};
    
`;

export default GlobalStyle;
