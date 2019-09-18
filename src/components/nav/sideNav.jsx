import React from "react";

import AppsIcon from "../../assets/images/appsIcon";

import "./sideNav.css";
import SettingsIcon from "../../assets/images/settingsIcon";
import ScheduleIcon from "../../assets/images/scheduleIcon";
import TeamIcon from "../../assets/images/teamIcon";

const icons = [
    {
        title: "Projects",
        url: "/projects",
        unselectedIcon: <AppsIcon fill={"#A0AAB0"}/>,
        selectedIcon: <AppsIcon fill={"#02BCC8"}/>
    },
    {
        title: "Team",
        url: "/team",
        unselectedIcon: <TeamIcon fill={"#A0AAB0"}/>,
        selectedIcon: <TeamIcon fill={"#02BCC8"}/>
    },
    {
        title: "Roadmap",
        url: "/roadmap",
        unselectedIcon: <ScheduleIcon fill={"#A0AAB0"}/>,
        selectedIcon: <ScheduleIcon fill={"#02BCC8"}/>
    },
    {
        title: "Settings",
        url: "/settings",
        unselectedIcon: <SettingsIcon fill={"#A0AAB0"}/>,
        selectedIcon: <SettingsIcon fill={"#02BCC8"}/>
    }
];

const SideNav = ({selectedIndex, onClick}) =>
    <div className={"side-nav"}>
        <img alt={"menu link"}
             className={"action icon hamburger"}
             src={require("../../assets/images/baseline-hamburger-24px.svg")}/>
        <ul>
            {
                icons.map(({title, url, selectedIcon, unselectedIcon}, index) => {
                        const isSelected = selectedIndex === index;
                        return (
                            <li key={index} onClick={() => onClick(url)}>
                                <div className={"action circle " + (isSelected ? "selected" : "unselected")}>
                                    <div className={"icon"}>
                                        {isSelected ? selectedIcon : unselectedIcon}
                                    </div>
                                </div>
                            </li>
                        );
                    }
                )
            }
        </ul>

        <img alt={"logout link"} className={"action icon log-out"}
             src={require("../../assets/images/baseline-power_settings_new-24px.svg")}/>
    </div>;

export default SideNav;
