import React from 'react';
import reloadSmall from '../assets/icon/refresh.png';
import reloadMedium from '../assets/icon/refresh@2x.png';
import reloadLarge from '../assets/icon/refresh@3x.png';


function ReloadData(props) {

    return (
        <button onClick={() => props.refreshData()} className="reload-button">
            <span className="button-text">Reload Data</span>
            <img src={reloadSmall} 
                 srcSet={`${reloadSmall} 1200w, ${reloadMedium} 800w, ${reloadLarge} 600w`}
                 alt="reload-data" />
        </button>
    )

}

export default ReloadData;