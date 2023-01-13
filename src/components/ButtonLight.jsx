import React from "react";

const handleClick = () => {
  window.location.href = "https://cira.exchange"
}

const ButtonLight = ({ styles }) => (
  <button type="button" onClick={handleClick} className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimBlue bg-accent rounded-[10px] outline-none ${styles}`}>
    Launch App
  </button>
);


export default ButtonLight;
