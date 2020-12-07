import React from 'react';

const LaunchDetail = (props) => {

    const detail = props.launches.map(launch => {
        return <p key={launch.flight_number}>{launch.mission_name}</p>
    })

    return(
        <div>
            {detail}
        </div>
    )
}

export default LaunchDetail;