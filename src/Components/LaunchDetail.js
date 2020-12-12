import React from 'react';
import RocketImage from './RocketImage';
import './LaunchDetail.css';
import SpaceXLogo from './SpaceXLogo';
import SortLaunchDetail from './SortLaunchDetail'

const LaunchDetail = (props) => {

    const detail = props.launches.map(launch => {
        return (
            <div className="launch-card">
                <div className="flight-number" key={launch.flight_number}>
                    #{launch.flight_number}</div>
                    <div className="mission-name">
                        <strong>{launch.mission_name}</strong>
                    </div>
                    <div className="rocket-name">
                        <span >{launch.rocket.rocket_name}</span>
                        <span >{launch.launch_date_utc}</span>
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
                <SortLaunchDetail sort={props.handleSortSubmit}/>
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