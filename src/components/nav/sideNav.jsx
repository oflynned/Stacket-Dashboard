import React from "react";

import "./sideNav.css";

const icons = [
    {
        title: "Projects",
        url: "/projects",
        icon: "round-apps-24px.svg"
    },
    {
        title: "Team",
        url: "/team",
        icon: "baseline-people_outline-24px.svg"
    },
    {
        title: "Roadmap",
        url: "/roadmap",
        icon: "baseline-schedule-24px.svg"
    },
    {
        title: "Settings",
        url: "/settings",
        icon: "baseline-settings-20px.svg"
    }
];

const loadSvg = (path, fillColour) => {
    const svg = require("../../assets/images/" + path);
    return svg;
}

const SideNav = ({selectedIndex}) =>
    <div className={"side-nav"}>
        <img className={"action icon hamburger"} src={require("../../assets/images/baseline-hamburger-24px.svg")}/>
        <ul>
            {
                icons.map(({title, url, icon}, index) =>
                    <li>
                        <div className={"action circle " + (selectedIndex === index ? "selected" : "unselected")}>
                            <img className={"icon"} src={loadSvg(icon)}/>
                        </div>
                    </li>
                )
            }
        </ul>

        <img className={"action icon log-out"}
             src={require("../../assets/images/baseline-power_settings_new-24px.svg")}/>
    </div>;

export default SideNav;
