import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LaunchDetail from '../Components/LaunchDetail';
import SortLaunchDetail from '../Components/SortLaunchDetail';
import './LaunchesContainer.css';



class LaunchesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            launches: [],
                // flightNumber: "",
                // missionName: "",
                // rocketName: "",
                // date: new Date()
        };
    }
    

    componentDidMount() {

        const apiUrl = 'https://api.spacexdata.com/v3/launches';

        fetch(apiUrl)
        .then(res => res.json())
        .then(launches => this.setState({launches: launches}))
        .catch(err => console.error);
    }

    handleSortSubmit(launches) {
        this.setState({launches: launches.sort()  
        })
    }

    render() {
        
        return(
            this.state.launches.length > 0 ?(
            <div>
                <span className="launch-detail">
                <SortLaunchDetail sort={this.handleSortSubmit}/>
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
    launches: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired
};

export default LaunchesContainer;