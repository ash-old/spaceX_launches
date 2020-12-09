import React, {Component} from 'react';
import LaunchDetail from '../Components/LaunchDetail';



class LaunchesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            launches: [],
                flightNumber: "",
                missionName: "",
                rocketName: "",
                date: ""
        };
    }
    

    componentDidMount() {

        const apiUrl = 'https://api.spacexdata.com/v3/launches';

        fetch(apiUrl)
        .then(res => res.json())
        .then(launches => this.setState({launches: launches}))
        .catch(err => console.error);
    }

    render() {
        
        return(
            <div>
                <LaunchDetail launches={this.state.launches}/>
            </div>
        )
    }




}

export default LaunchesContainer;