import React from 'react';
import launchSmall from '../assets/img/launch-home.png';
import launchMedium from '../assets/img/launch-home@2x.png';
import launchLarge from '../assets/img/launch-home@3x.png';
import './RocketImage.css';

function RocketImage() {

    return (
        <div className="rocket">
            <img src={launchSmall} 
                 srcSet={`${launchSmall} 1200w, ${launchMedium} 800w, ${launchLarge} 600w`}
                         alt="space x rocket" />
        </div>
    )

}


export default RocketImage;