import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../../shared/App.css';

const GlobalStyle = createGlobalStyle`

${reset};

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color:#B6A5FB;
    
};

html{
    font-family: "";
}

a{
    text-decoration: none;
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
};
    
`;

export default GlobalStyle;
