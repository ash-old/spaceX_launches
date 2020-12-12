import React from 'react';
import RocketImage from './RocketImage';
import './LaunchDetail.css';
import SpaceXLogo from './SpaceXLogo';


const LaunchDetail = (props) => {

    const detail = props.launches.map(launch => {
        return (
            <div className="launch-card">
                <span className="flight-number" key={launch.flight_number}>
                    #{launch.flight_number}</span>
                    <span className="mission-name">
                        <strong>{launch.mission_name}</strong>
                    </span>
                    <div className="rocket-name">
                        <span >{new Date().toDateString(launch.launch_date_utc)}</span>
                        <br/>
                        <span >{launch.rocket.rocket_name}</span>
                    </div>
                    
            </div>
        )
    })


    return(
        <div>
            <div>
                <SpaceXLogo />
            </div>
            <div>
                <RocketImage />
            </div>
            <ul className="launch">
                {detail}
            </ul>
        </div>
    )
}

export default LaunchDetail;