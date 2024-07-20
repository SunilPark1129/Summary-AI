import React, { useState } from "react";
import { Link } from "react-router-dom";

function SummaryScreen({ data, prevImgs }) {
  return (
    <div className="summary">
      <div className="summary__img-overflow">
        <div className="summary__img-box">
          {prevImgs.map((item, idx) => (
            <div tabIndex={0} className="summary__img-container" key={idx}>
              <Link to={"/image"} state={{ img: item }}>
                <img src={item} alt={"preview image"} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="summary__text-container">
        <textarea readOnly value={data} />
      </div>
    </div>
  );
}

export default SummaryScreen;
