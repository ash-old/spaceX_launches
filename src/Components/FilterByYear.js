import React from 'react';
import selectSmall from '../assets/icon/select.png';
import selectMedium from '../assets/icon/select@2x.png';
import selectLarge from '../assets/icon/select@3x.png';
import './FilterByYear.css';


function FilterByYear(props) {

    const selectOptions = props.launchData.map(launch => {
        return <option
            value={launch.launch_year}
            key={launch.flight_number}>
            {launch.launch_year}
        </option>
    })
    // onChange={value => props.filterByYear(value)}

    function handleChange(event) {
        props.filterByYear(event.target.value);
    }

    return (
        <select id="date-selection" onChange={handleChange} className="filter-select">
            <option value="" className="select-text">
                Filter By Year
                {/* <img src={selectSmall} 
                 srcSet={`${selectSmall} 1200w, ${selectMedium} 800w, ${selectLarge} 600w`}
                 alt="reload-data" /> */}
            </option>
            {selectOptions}
        </select>
    )

}

export default FilterByYear;