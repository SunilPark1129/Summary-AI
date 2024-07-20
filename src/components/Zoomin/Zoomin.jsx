import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Zoomin() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.img;

  console.log(data);

  function closeClickHandler(e) {
    if (e.target.nodeName === "IMG") return;
    navigate(-1);
  }

  return (
    <div className="summary__zoomin">
      <div
        className="summary__zoomin__img-container"
        onClick={closeClickHandler}
      >
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
        {data && <img src={data} alt="user selected img" />}
      </div>
    </div>
  );
}
