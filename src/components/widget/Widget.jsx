import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const Widget = ({ type }) => {




  let data;
  const amount = 100
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        IsMoney: false,
        link: "see all users",
        icon: <PersonOutlinedIcon className='icon' style={{
          color: "crimson",
          backgroundColor: "rgba(255,0,0,0.2)",
        }} />,
      };
      break;

    case "service":
      data = {
        title: "SERVICES",
        IsMoney: false,
        link: "view all services",
        icon: <DesignServicesOutlinedIcon className='icon' style={{
          color: "goldenrod",
          backgroundColor: "rgba(218,165,32,0.2)",
        }} />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        IsMoney: true,
        link: "see net earning",
        icon: <AttachMoneyOutlinedIcon className='icon' style={{
          color: "green",
          backgroundColor: "rgba(0,168,0,0.2)",
        }} />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        IsMoney: true,
        link: "see details",
        icon: <BalanceOutlinedIcon className='icon' style={{
          color: "purple",
          backgroundColor: "rgba(128,0,128,0.2)",
        }} />,
      };
      break;
    default:
      break;

  }




  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.IsMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>

      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget