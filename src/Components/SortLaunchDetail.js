import React from 'react';
import sortSmall from '../assets/icon/sort.png';
import sortMedium from '../assets/icon/sort@2x.png';
import sortLarge from '../assets/icon/sort@3x.png';


function SortLaunchDetail(props, {launches}) {

    

    return (
        <button onClick={() => props.sort(test)} className="sort">
            <img src={sortSmall} 
                 srcSet={`${sortSmall} 1200w, ${sortMedium} 800w, ${sortLarge} 600w`}
                 alt="sort-data" />
        </button>
    )

}

export default SortLaunchDetail;