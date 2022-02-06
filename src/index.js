import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/Landing_Page/Landing';
import './styles/styles.css';

ReactDOM.render(
   <LandingPage/>,
    document.getElementById('root')
);

module.hot.accept();