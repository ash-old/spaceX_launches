import React from 'react';
import spacelogo from '../assets/spacex-logo.png';
import './SpaceXLogo.css';

function SpaceXLogo() {

    return (
        <div className="spacex-logo">
            <img src={spacelogo} alt="space x logo" height={40} width={250}/>
        </div>
    )

} 


export default SpaceXLogo;