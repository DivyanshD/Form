import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Feed from "../../components/feed/Feed";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
// import { auth } from "../../firebase";
// import { db } from "../../firebase";
import { useContext } from 'react'

// import Datatable from "../../components/datatable/Datatable";

const Profile = () => {
  const {user} = useUserAuth();

  // console.log(user);
  return (
    <div className="profile">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.photoURL}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="new">
                  <Link to="/new" className="link">
                    Add New
                  </Link>
                </div>
                <div className="new">
                  <Link to="/form" className="link">
                    Add New
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
        </div>
        <div className="bottom">
          {/* <h1 className="title">Recent reports</h1>
          <Datatable head={"Add New Reports"}/> */}
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
