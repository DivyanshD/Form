import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListIcon from '@mui/icons-material/List';
import { useUserAuth } from "../../context/UserAuthContext";

const Navbar = () => {
  const {user} = useUserAuth();

  return (
    <div className='Navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
              <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
              <ListIcon className="icon"/>
          </div>
          <div className="item">
           <img src={user.photoURL} alt="" srcset="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
