import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="content">
        <div className="left">
          <h1>Foodii.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur aliquid eaque architecto sint fugiat quia adipisci
            error vitae quasi ducimus.
          </p>
          <div className="social-icons">
            <img src="./images/facebook_icon.png" alt="" />
            <img src="./images/twitter_icon.png" alt="" />
            <img src="./images/linkedin_icon.png" alt="" />
          </div>
        </div>
        <div className="center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-234-456-6789</li>
            <li>contact@foodii.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Foodii.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
