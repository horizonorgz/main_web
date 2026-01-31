import React from "react";
import mwLogo from "../../assets/logoyashraj1white.svg";

const Logo = () => {
  return (
    <img
      src={mwLogo}
      alt="MW Logo"
      className="w-24 h-24 p-4 sm:w-24 sm:h-24 sm:p-2  md:w-24 md:h-24 md:p-2 object-contain"
    />
  );
};

export default Logo;

