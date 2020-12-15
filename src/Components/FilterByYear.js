import React from 'react';
import selectSmall from '../assets/icon/select.png';
import selectMedium from '../assets/icon/select@2x.png';
import selectLarge from '../assets/icon/select@3x.png';
import './FilterByYear.css';


function FilterByYear(props) {

    const filterDate = props.launchDate.map(year => {
        return <option value={year.launch_year} key={year.launch_year}>{year.launch_year}</option>
    })

    return (
        <select id="date-selection" onChange={props.filterYear()} className="filter-select">
            <option diabled value ="default" className="select-text">
                Filter By Year
                {/* <img src={selectSmall} 
                 srcSet={`${selectSmall} 1200w, ${selectMedium} 800w, ${selectLarge} 600w`}
                 alt="reload-data" /> */}
            </option>
            <option>
                <li>{filterDate}</li>
            </option>
        </select>
    )

}

export default FilterByYear;