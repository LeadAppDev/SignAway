import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Landing.css';
import img01 from '../../assets/images/img_01.jpg';
import img02 from '../../assets/images/img_02.jpg';
import img03 from '../../assets/images/img_03.jpg';

const LandingPage = ({}) => {
    return(
        
        <div className="landing-container">
            <Navigation />

            <section>
                <div className='landing-container-grid'>
                    <div className="image-section-one">
                        <div>
                            <img src={img01} alt='img' />
                            <img src={img02} alt='img' />
                            <img src={img03} alt='img' />
                        </div>
                    </div>
                    <div className='landing-container-grid slogan'>
                        <h3>Simply Easy </h3>
                        <h3>Lease With Confidence</h3>
                    </div>
                    <div className='landing-container-grid saying'>
                        <p>
                            The ways people travel, work and live are blurring. 
                            From product innovations, to the latest travel trends, 
                            discover how the future of travel is 
                            being shaped by SignAway.
                        </p>
                    </div>
                </div>
            </section>
            
        </div>
    )
};

export default LandingPage;

// <div className='container'>
        //     <div className="landing-grid">
        //         <Navigation />
        //         <div className='landing-content'>
        //             <div className="image-section-one">
        //                 <img src={img01} alt='img' />
        //                 <img src={img02} alt='img' />
        //                 <img src={img03} alt='img' />
        //             </div>
        //         </div>
        //     </div>
        // </div>