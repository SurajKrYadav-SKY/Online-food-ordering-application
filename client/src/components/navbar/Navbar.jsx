import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";
import { StoreContext } from "../../context/StoreContex";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Foodii.</h1>
      </Link>
      <ul className="menu">
        <Link
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="right">
        <SearchIcon className="icon" />
        <div className="search-icon">
          <Link to="/cart">
            <ShoppingBagIcon className="icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sing In</button>
        ) : (
          <div className="navbar-profile">
            <img src="./images/profile_icon.png" alt="" />
            <ul className="profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src="./images/bag_icon.png" alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src="./images/logout_icon.png" alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
