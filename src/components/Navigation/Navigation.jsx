import React from 'react';
import './Navigation.css';

const Navigation = ({}) => {
    return(
        <div className="navigation">
            <div className="navigation--logo">
                <p>SignAway</p>
                <div className='line'></div>
            </div>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Tech</a></li>
                <li><a href='#'>Sign In</a></li>
            </ul>
        </div>
    )
};

export default Navigation;