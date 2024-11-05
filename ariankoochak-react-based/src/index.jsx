import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './utils/store/store';
import './Assets/fontawesome/css/fontawesome.css'
import "./Assets/fontawesome/css/brands.css" 
import "./Assets/fontawesome/css/solid.css" 
import  "./Assets/fontawesome/css/v5-font-face.css" 
import "./Assets/fontawesome/css/all.css" 
import  "./Assets/fontawesome/css/v4-shims.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
