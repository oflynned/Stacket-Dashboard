import React, {Component} from "react";

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
        this.state = {};
    }

    render() {
        return (
            <div className={"development-board"}>
                <SideNav selectedIndex={0}/>
                <div className={"screen-content"}>
                    <p>hello world</p>
                </div>
            </div>
        );
    }
}

export default DevelopmentBoard;
