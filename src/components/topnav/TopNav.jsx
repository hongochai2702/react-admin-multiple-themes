import React from "react";
import Dropdown from "../dropdown/Dropdown";

import "./topnav.css";

const TopNavSearch = () => {
  return (
    <div className="topnav__search">
      <input type="text" className="form-input" placeholder="Search here ..." />
      <i className="bx bx-search"></i>
    </div>
  );
};

const TopNavRight = () => {
  return (
    <div className="topnav-right">
      <div className="topnav__right-item">
        {/* dropdown item */}
        <Dropdown />
      </div>
      <div className="topnav__right-item">
        {/* dropdown item */}
        <Dropdown />
      </div>
      <div className="topnav__right-item">
        {/* theme setting */}
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
