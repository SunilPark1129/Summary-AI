import React from "react";

function Loading({ logo }) {
  return (
    <div className="loading">
      <div className="loading__circle"></div>
      <div className="loading__circle"></div>
      <div className="loading__circle"></div>
      <div className="loading__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loading;
