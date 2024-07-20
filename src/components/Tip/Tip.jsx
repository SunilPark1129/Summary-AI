import React from "react";

function Tip() {
  return (
    <section className="screen__tip">
      <h1>Summary AI</h1>
      <div className="screen__tip__boxs">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8h.01" />
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 15h15" />
            <path d="M21 19h-15" />
            <path d="M15 11h6" />
            <path d="M21 7h-6" />
            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
          </svg>
        </div>
      </div>
      <p>
        When you upload a photo, the AI will read the text from the image,
        identify the key points, and summarize them in the language you choose
      </p>
    </section>
  );
}

export default Tip;
