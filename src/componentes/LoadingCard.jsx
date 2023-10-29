import React from "react";
import "../styles/LoadingCard.css";

const LoadingCard = () => {
  return (
    <div>
      <h1 className="loading">Loading...</h1>
      <div className="div__imgLoadingCard">
        <img className="imgLoadingCard" src="/LoadingImg.gif" alt="loading" />
      </div>
    </div>
  );
};

export default LoadingCard;
