import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import "./widgetSm.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import pic2 from './Capture.PNG';
import BoltIcon from '@mui/icons-material/Bolt';
import LayersIcon from '@mui/icons-material/Layers';
import PanoramaPhotosphereIcon from '@mui/icons-material/PanoramaPhotosphere';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          
          <div className="logo"> 
          <img className="or" src={pic2}  alt='' />
          </div>
        
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
       
          <li>
            <LayersIcon className="icon" />
            <span>My Courses</span>
          </li>
           
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <FolderOpenIcon className="icon" />
              <span>BookMarks</span>
            </li>
          </Link>
          <li>
            <BoltIcon className="icon" />
            <span>trending Courses</span>
          </li>
          <li>
            <SportsSoccerIcon className="icon" />
            <span>Help Articles</span>
          </li>
         
          <li>
            <EmojiEventsIcon className="icon" />
            <span>Completed Courses</span>
          </li>
           <div className='hey'></div>
          
           <div className="widgetSm">
      <span className="widgetSmTitle">My Tutors</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MapsUgcIcon className="widgetSmIcon" />
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MapsUgcIcon className="widgetSmIcon" />
            
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <MapsUgcIcon className="widgetSmIcon" />
          
          </button>
        </li>
        </ul></div>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
