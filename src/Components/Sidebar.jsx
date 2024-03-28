// import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-nav active">
                    <FaHome />
                </div>
                <div className="sidebar-nav ">
                    <PiProjectorScreenChartFill />
                </div>
                <div className="sidebar-nav">
                    <GiSkills />
                </div>
                <div className="sidebar-nav">
                    <BsPersonWorkspace />
                </div>
                <div className="sidebar-nav">
                    <MdPermContactCalendar />
                </div>
            </div>
        </>
    )
}

export default Sidebar