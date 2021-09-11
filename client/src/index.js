import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';

=======
import 'semantic-ui-css/semantic.min.css'
>>>>>>> d54aaba2da8ad3bc33234352b3230f1b75b9f3d0

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
