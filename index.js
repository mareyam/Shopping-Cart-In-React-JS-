import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import {BrowserRouter} from "react-router-dom";
import Cart from "./Cart";

ReactDOM.render(
        <BrowserRouter>
        <Cart/>
        </BrowserRouter>

,document.getElementById('root'));
