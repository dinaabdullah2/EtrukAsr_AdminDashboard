import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BsCalendarEvent from "@mui/icons-material/CalendarTodayOutlined"
import AiFillBankIcon from '@mui/icons-material/Home'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Widget = ({ type }) => {
  const [count, setCount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data 

  switch (type) {
    case "cases":
      data = {
        title: "CASES",
        isMoney: false,
        link: "See all cases",
        linkSrc : '/cases',
        seqLink: 'https://otrok.invoacdmy.com/api/dashboard/case/index',
        query:"cases",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
  
    case "charities":
      data = {
        title: "CHARITIES",
        isMoney: true,
        linkSrc : '/charities',
        link: "View all charities",
        seqLink: 'https://otrok.invoacdmy.com/api/dashboard/charity/index',
        icon: (
          <AiFillBankIcon
            className="icon"
            style={{  
                backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "events":
      data = {
        title: "EVENTS",
        query:"events",
        link: "See all events",
        linkSrc : '/event',
        seqLink: 'https://otrok.invoacdmy.com/api/dashboard/events/index',
        icon: (
          <BsCalendarEvent
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green"  
            }}
          />
        ),
      };
      break;
      case "volunteers":
      data = {
        title: "VOLUNTEERS",
        query:"volunteers",
        link: "See all volunteers",
        linkSrc : '/volunteer',
        seqLink: 'https://otrok.invoacdmy.com/api/dashboard/volunteer/index',
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod", 
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    axios.get(data.seqLink,{
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('tokenA')}`,
          "Content-Type": "multipart/form-data"

      }
  })
    .then((response) => {
      console.log(response.data.count)
      setCount(response.data?.count)
     
    }).catch((err) => { console.log(err) })
     
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {count}
        </span>
        <Link style={{TextDecoder : 'none'}} to={data?.linkSrc} className="link">{data?.link}</Link>
      </div>
      <div className="right">
      
         {data.icon}
      </div>
    </div>
  );
};

export default Widget;
