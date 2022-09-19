import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>IONIA WEB</span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <AccessibilityNewOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/cars" style={{ textDecoration: "none" }}>
                        <li>
                            <TimeToLeaveOutlinedIcon className='icon' />
                            <span>Cars</span>
                        </li>
                    </Link>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                    <li>
                        <HomeRepairServiceOutlinedIcon className='icon' />
                        <span>Services</span>
                    </li>
                    </Link>
                    <li>
                        <DeliveryDiningOutlinedIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <FavoriteBorderOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <VpnKeyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountBoxOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='buttom'>
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar