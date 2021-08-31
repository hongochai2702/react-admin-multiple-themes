import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

import "./topnav.css";
import notifications from "../../assets/JsonData/notification.json";
import userImage from "../../assets/images/tuat.png";
import userMenus from "../../assets/JsonData/user_menus.json";

const userCurrent = {
  display_name: "Hai Ho",
  image: userImage,
};

const UserToggle = ({ user }) => {
  return (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt={user.display_name} />
      </div>
      <div className="topnav__right-user__name">{user.display_name}</div>
    </div>
  );
};

const UserMenuItem = ({ item, index }) => {
  return (
    <Link to="/" key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );
};
const NotificationItem = ({ item, index }) => {
  return (
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );
};

const TopNavSearch = () => {
  return (
    <div className="topnav__search">
      <input type="text" className="form-input" placeholder="Search here ..." />
      <i className="bx bx-search"></i>
    </div>
  );
};

const TopNavRight = () => {
  const notificationItemRender = useMemo(() => {
    return notifications.map((item, index) => (
      <NotificationItem key={index} item={item} index={index} />
    ));
  }, []);
  const userMenuItemRender = useMemo(() => {
    return userMenus.map((item, index) => (
      <UserMenuItem key={index} item={item} index={index} />
    ));
  }, []);

  return (
    <div className="topnav-right">
      <div className="topnav__right-item">
        <Dropdown
          customToggle={<UserToggle user={userCurrent} />}
          renderItems={userMenuItemRender}
        />
      </div>
      <div className="topnav__right-item">
        <Dropdown
          icon="bx bx-bell"
          badge="12"
          renderItems={notificationItemRender}
          renderFooter={<Link to="/">View All</Link>}
        />
      </div>
      <div className="topnav__right-item">
        <Dropdown />
      </div>
    </div>
  );
};

const TopNav = () => {
  return (
    <div className="topnav">
      <TopNavSearch />
      <TopNavRight />
    </div>
  );
};

export default TopNav;
