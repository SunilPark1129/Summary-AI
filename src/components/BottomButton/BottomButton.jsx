import React from "react";

const BottomButton = ({ setIsUploading, isLoading }) => {
  return (
    <button
      className="btn"
      onClick={() => setIsUploading(true)}
      disabled={isLoading}
    >
      Upload Image
    </button>
  );
};

export default BottomButton;
