import React from 'react';
import RocketImage from './RocketImage';

const LaunchDetail = (props) => {

    const detail = props.launches.map(launch => {
    return <p key={launch.flight_number}>{launch.mission_name}</p>
    })

    return(
        <div>
            <RocketImage />
            {detail}
        </div>
    )
}

export default LaunchDetail;