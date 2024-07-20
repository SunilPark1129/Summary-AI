import React from "react";

function ErrorComponent({ error }) {
  return (
    <div className="error">
      <div className="error__header">ERROR</div>
      <div className="error__container">
        <p className="error__big">Something is not right...</p>
        <p className="error__small">{error}</p>
        <span>Please try it again...</span>
      </div>
    </div>
  );
}

export default ErrorComponent;
