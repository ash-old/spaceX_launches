import React from 'react';
import RocketImage from './RocketImage';
import './LaunchDetail.css';
import SpaceXLogo from './SpaceXLogo';

const LaunchDetail = (props) => {

    const detail = props.launches.map(launch => {
        return (
            <div className="launch-card">
            <h2 key={launch.flight_number}>{launch.mission_name}</h2>
            <p>{launch.rocket.rocket_name}</p>
            <p>{launch.launch_date_utc}</p>
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