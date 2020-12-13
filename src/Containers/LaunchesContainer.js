import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LaunchDetail from '../Components/LaunchDetail';
import SortLaunchDetail from '../Components/SortLaunchDetail';
import './LaunchesContainer.css';
import ReloadData from '../Components/ReloadData';



class LaunchesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            launches: [],
            isToggleOn: true
        };
        this.handleSortSubmit = this.handleSortSubmit.bind(this);
        this.refreshDataSubmit = this.refreshDataSubmit.bind(this);
    }
    

    componentDidMount() {

        const apiUrl = 'https://api.spacexdata.com/v3/launches';

        fetch(apiUrl)
        .then(res => res.json())
        .then(launches => this.setState({launches: launches}))
        .catch(err => console.error);
    }

    handleSortSubmit() {
        const reverseData = this.state.launches.sort((a,b) => {
           return new Date(b.launch_date_utc) - new Date(a.launch_date_utc)});
        
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            launches: reverseData
        })
        
    }

    refreshDataSubmit() {
        const apiUrl = 'https://api.spacexdata.com/v3/launches';

        fetch(apiUrl)
        .then(res => res.json())
        .then(launches => this.setState({launches: launches}))
        .catch(err => console.error);

        // console.log(this.state.launches)
    }


    render() {
        
        return(
            this.state.launches.length > 0 ?(
            <div>
                <span className="reload-data">
                    <ReloadData refreshData={this.refreshDataSubmit}/>
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