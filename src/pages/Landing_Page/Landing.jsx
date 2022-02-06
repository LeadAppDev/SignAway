import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Landing.css';
import img01 from '../../assets/images/img_01.jpg';
import img02 from '../../assets/images/img_02.jpg';
import img03 from '../../assets/images/img_03.jpg';

const LandingPage = ({}) => {
    return(
        <div className='container'>
            <Navigation />
            <div className="landing">
                <div className="landing-container">
                    <div className="image-section-one">
                        {/* <img src={img01} alt='img' />
                        <img src={img02} alt='img' />
                        <img src={img03} alt='img' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;