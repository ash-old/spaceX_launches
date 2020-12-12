import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LaunchDetail from '../Components/LaunchDetail';
import SortLaunchDetail from '../Components/SortLaunchDetail';
import './LaunchesContainer.css';



class LaunchesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            launches: []
                // flightNumber: "",
                // missionName: "",
                // rocketName: "",
                // date: new Date()
        };
        this.handleSortSubmit = this.handleSortSubmit.bind(this);
    }
    

    componentDidMount() {

        const apiUrl = 'https://api.spacexdata.com/v3/launches';

        fetch(apiUrl)
        .then(res => res.json())
        .then(launches => this.setState({launches: launches}))
        .catch(err => console.error);
    }

    handleSortSubmit() {
        const reverseData = this.state.launches.reverse().map((launches, i) => {
            return (
                <li>
                    {launches}
                </li>
            )
        })
        this.setState({
            launches: reverseData
        })
        console.log("winning", reverseData)
    }


    render() {
        
        return(
            this.state.launches.length > 0 ?(
            <div>
                <span className="sort-detail">
                <SortLaunchDetail sortData={this.handleSortSubmit}/>
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