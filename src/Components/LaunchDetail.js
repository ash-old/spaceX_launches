import React from 'react';
import RocketImage from './RocketImage';
import './LaunchDetail.css';
import SpaceXLogo from './SpaceXLogo';

const LaunchDetail = (props) => {

    const detail = props.launches.map(launch => {
        return (
            <div className="launch-card">
                <div className="flight-number" key={launch.flight_number}>
                    #{launch.flight_number}</div>
                    <div className="mission-name"><strong>{launch.mission_name}</strong></div>
                    {launch.rocket.rocket_name}
                    {launch.launch_date_utc}
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