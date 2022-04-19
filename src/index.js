import React from "react";
import ReactDom from "react-dom";
import {App} from './App'
import {GlobalStyle} from './GlobalStyles'

ReactDom.render(
    <>
    <GlobalStyle/>
    <App/>
    </>,
document.getElementById('app')
)