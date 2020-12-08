import React from 'react';
import launch from '../assets/img/launch-home.png';
import './RocketImage.css';

function RocketImage() {

    return (
        <div className="rocket">
            <img src={launch} alt="space x rocket" height={550} width={450} />
        </div>
    )

}


export default RocketImage;