import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="options">
        <hr />
        <NavLink to="/add" className="option">
          <img src="./images/add.png" alt="" />
          <p>Add Items</p>
        </NavLink>
        <hr />
        <NavLink to="/itemList" className="option">
          <img src="./images/box.png" alt="" />
          <p>Add List Items</p>
        </NavLink>
        <hr />
        <NavLink to="/orders" className="option">
          <img src="./images/box.png" alt="" />
          <p>Orders</p>
        </NavLink>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
