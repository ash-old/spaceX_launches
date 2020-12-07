import React, {useEffect, useState} from 'react';

const apiUrl = 'https://api.spacexdata.com/v3/launches';

function LaunchesContainer() {

    const [launch, setLaunches] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setLaunches(data[0].mission_name)
        })
        .catch(err => console.error);
    }, [])

    return (
        <div>
           {launch} 
        </div>
    )




}

export default LaunchesContainer;