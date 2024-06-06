import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="contents">
        <h2>Order your favourite food here</h2>
        <p>
          Craving something delicious? Explore our diverse menu and order your favorites with just a click!
          From mouth-watering meals to delightful desserts, we bring culinary perfection straight to your door.
          Dive into a world of flavors and enjoy the ultimate dining experience at home. Order now and savor the goodness!
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Hero;
