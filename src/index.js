import React from 'react';
import './style.css';
import App from './App';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

render(
    <BrowserRouter basename='/agapess'>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root')
);