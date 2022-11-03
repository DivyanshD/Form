import "./sidebar.scss"
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MedicationIcon from '@mui/icons-material/Medication';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LogoutIcon from '@mui/icons-material/Logout';
import{Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {signOut} from "firebase/auth"
import { auth } from "../../firebase";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (

    <div className='sidebar'>
        <div className="top"> <Link to="/home" style={{textDecoration :"none"}}><span className="logo">iCare</span></Link> </div>
       <hr />
        <div className="center">
            <ul>
             <Link to="/home" style={{textDecoration :"none"}}> <li><PersonIcon className="Icon"/>
                  <span>Profile</span>
                </li></Link>
                <li><ChatBubbleIcon className="Icon"/>
                  <span>Chats</span>
                </li>
                <li>
                    <HelpOutlinedIcon className="Icon"/>
                    <span>Querries</span>
                  </li>
                  <li>
                    <MedicationIcon className="Icon"/>
                  <span>Prescription</span>
                  </li>
                  <li className="sidebarListItem">
                    <VaccinesIcon className="Icon"/>
                  <span>Vaccination</span>
                  </li>
                <li><LogoutIcon className="Icon"/>
                  <span onClick={()=>signOut(auth)}>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        </div>
    </div>
  )
}

export default Sidebar
