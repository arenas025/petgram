import React from "react";
import ReactDom from "react-dom";
import {App} from './App'
import {GlobalStyle} from './styles/GlobalStyles'

ReactDom.render(
    <>
    <GlobalStyle/>
    <App/>
    </>,
document.getElementById('app')
)