import React, { useContext, useEffect } from "react";
import "./ThankyouPage.scss";
import { Navigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContex";
import axios from "axios";

const ThankYouPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="thank-you-page">
      {success === "true" ? (
        <>
          <h1>Thank you for doing business with us!</h1>
          <div className="emoji">😊</div>
          <p>Your order (ID: {orderId}) has been successfully processed.</p>
        </>
      ) : (
        <>
          <h1>Payment Failed</h1>
          <div className="emoji">😞</div>
          <p>
            Unfortunately, your payment was not successful. Please try again.
          </p>
        </>
      )}
      <Navigate to="/myorders">
        <button className="home-button">GO TO HOME PAGE</button>
      </Navigate>
    </div>
  );
};

export default ThankYouPage;
