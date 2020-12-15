import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LaunchDetail from '../Components/LaunchDetail';
import SortLaunchDetail from '../Components/SortLaunchDetail';
import './LaunchesContainer.css';
import ReloadData from '../Components/ReloadData';
import FilterByYear from '../Components/FilterByYear';



class LaunchesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            launches: [],
            isToggleOn: true
        };
        this.handleSortSubmit = this.handleSortSubmit.bind(this);
        this.handleRefreshSubmit = this.handleRefreshSubmit.bind(this);
        this.filterByYear = this.filterByYear.bind(this);
        
    }
    
    apiFetch(){
        const apiUrl = 'https://api.spacexdata.com/v3/launches';

        fetch(apiUrl)
        .then(res => res.json())
        .then(launches => this.setState({launches: launches}))
        .catch(err => console.error);
    }

    componentDidMount() {
        this.apiFetch();
    }

    handleSortSubmit() {
        const reverseData = this.state.launches.reverse();
        
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            launches: reverseData
        })
        
    }

    filterByYear() {
        const filteredData = this.state.launches.filter(launch => {
            let launchDate = launch.launch_date_utc
            return launchDate
        });

        // this.setState({
        //     filteredData
        // })
    }

    handleRefreshSubmit() {
        this.apiFetch();
    }


    render() {
        
        return(
            this.state.launches.length > 0 ?(
            <div>
                <span className="filter-data">
                    <FilterByYear filterYear={this.filterByYear} launchDate={this.state.launches}/>
                </span>
                <span className="reload-data">
                    <ReloadData refreshData={this.handleRefreshSubmit}/>
                </span>
                <span className="sort-detail">
                    <SortLaunchDetail sortData={this.handleSortSubmit} toggle={this.state.isToggleOn} refreshData={this.handleRefreshSubmit}/>
                </span>
                <LaunchDetail launches={this.state.launches}/>
            </div>
            ) : (
                <h2 className="loading">loading...</h2>
            )
        )
    }



}

LaunchesContainer.propTypes = {
    filterYear: PropTypes.string.isRequired,
    refreshData: PropTypes.string.isRequired,
    toggle: PropTypes.string.isRequired,
    launches: PropTypes.string.isRequired,
    sortData: PropTypes.string.isRequired
};

export default LaunchesContainer;