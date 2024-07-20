import React, { useState } from "react";

function SummaryScreen({ data, prevImgs }) {
  const [selectedImg, setSelectedImg] = useState(null);

  function imgClickHandler(item) {
    setSelectedImg(item);
  }

  function closeClickHandler() {
    setSelectedImg(null);
  }

  return (
    <div className="summary">
      <div className="summary__img-overflow">
        <div className="summary__img-box">
          {prevImgs.map((item, idx) => (
            <div
              tabIndex={0}
              className="summary__img-container"
              key={idx}
              onClick={() => imgClickHandler(item)}
            >
              <img src={item} alt={"preview image"} />
            </div>
          ))}
        </div>
      </div>
      <div className="summary__text-container">
        <textarea readOnly value={data} />
      </div>
      {selectedImg && (
        <>
          <div className="summary__zoomin">
            <div className="bg-black" onClick={closeClickHandler}></div>
            <div className="summary__zoomin__img-container">
              <div className="close-icon" onClick={closeClickHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </div>
              <img src={selectedImg} alt="user selected img" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SummaryScreen;
