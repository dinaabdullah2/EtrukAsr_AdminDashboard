import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import axios from "axios";
import { useEffect, useState } from "react";

const Featured = () => {

  const [money,setMoney] = useState('')

  useEffect(() => {
    axios.get("https://otrok.invoacdmy.com/api/user/donation/money",{
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('tokenA')}`,
          "Content-Type": "multipart/form-data"

      }
  })
    .then((response) => {
      console.log(response.data.sum)
      setMoney(response.data.sum)
  
     
    }).catch((err) => { console.log(err) })
     
  }, []);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total collected money today</p>
        <p className="amount">{money}LE</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">50k LE</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">15.4k LE</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">20k LE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
