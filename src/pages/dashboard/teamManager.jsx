import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import SideNav from "../../components/nav/sideNav";

import "./teamManager.css";

class TeamManager extends Component {
    constructor() {
        super();
        this.state = {
            redirecting: false,
            redirectDestination: null
        }
    }

    onClick = destination => {
        this.setState({isRedirecting: true, redirectDestination: destination})
    };

    render() {
        const {isRedirecting, redirectDestination} = this.state;
        return (
            isRedirecting ?
                <Redirect to={redirectDestination}/> :
                <div className={"team-manager"}>
                    <SideNav onClick={this.onClick} selectedIndex={1}/>
                    <div className={"screen-content"}>
                        <p>Team manager</p>
                    </div>
                </div>
        )
    }
}

export default TeamManager;
