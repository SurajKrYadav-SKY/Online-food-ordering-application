import React from "react";
import "./AppDownload.scss";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        <span className="highlight">Foodii.</span> App
      </p>
      <div className="download-platform">
        <img src="./images/play_store.png" alt="" />
        <img src="./images/app_store.png" alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
