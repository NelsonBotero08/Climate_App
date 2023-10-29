import React from "react";

const ErrorSuccess = () => {
  return (
    <div>
      <h1 className="loading">Error finding location</h1>
      <div className="div__imgLoadingCard">
        <img className="imgLoadingCard" src="/ErrorImg.gif" alt="Error" />
      </div>
    </div>
  );
};

export default ErrorSuccess;
