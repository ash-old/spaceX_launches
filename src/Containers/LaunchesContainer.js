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
        const reverseData = this.state.launches.sort((a,b) => {
           return new Date(b.launch_date_utc) - new Date(a.launch_date_utc)});
        
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            launches: reverseData
        })
        
    }

    filterByYear() {
        //something
    }

    handleRefreshSubmit() {
        this.apiFetch();
        // console.log(this.state.launches)
    }


    render() {
        
        return(
            this.state.launches.length > 0 ?(
            <div>
                <span className="filter-data">
                    <FilterByYear filterData={this.filterByYear}/>
                </span>
                <span className="reload-data">
                    <ReloadData refreshData={this.handleRefreshSubmit}/>
                </span>
                <span className="sort-detail">
                    <SortLaunchDetail sortData={this.handleSortSubmit} toggle={this.state.isToggleOn}/>
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
    launches: PropTypes.string,
    sortData: PropTypes.string
};

export default LaunchesContainer;