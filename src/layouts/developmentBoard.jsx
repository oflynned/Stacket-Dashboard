import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import SideNav from "../components/nav/sideNav";

import "./developmentBoard.css";

const columns = [
    {
        title: "Committed",
        reference: "COMMITTED",
        position: 0
    },
    {
        title: "In Progress",
        reference: "IN_PROGRESS",
        position: 1
    },
    {
        title: "In Review",
        reference: "IN_REVIEW",
        position: 2
    },
    {
        title: "Done",
        reference: "DONE",
        position: 3
    }
];

class DevelopmentBoard extends Component {
    constructor() {
        super();
        this.state = {
            isRedirecting: false,
            redirectDestination: null
        };
    }

    onClick = destination => {
        this.setState({isRedirecting: true, redirectDestination: destination})
    };

    render() {
        const {isRedirecting, redirectDestination} = this.state;
        return (
            isRedirecting ?
                <Redirect to={redirectDestination}/> :
                <div className={"development-board"}>
                    <SideNav onClick={this.onClick} selectedIndex={0}/>
                    <div className={"screen-content"}>
                        <p>Development board</p>
                    </div>
                </div>
        );
    }
}

export default DevelopmentBoard;
