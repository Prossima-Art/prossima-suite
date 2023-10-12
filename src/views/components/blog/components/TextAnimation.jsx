import React from "react";
import "./TextAnimation.css";


export function SrollimageView() {
  const SvgImg = () => {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.925293" y="0.690002" width="18" height="18" fill="black" />
      </svg>
    );
  };

  return (
    <>
      <div className="principal">
        <div className="scrolltext">
          <h2>Artificial Inteligence </h2>
          <SvgImg/>
          <h2>Augmented reality</h2>
          <SvgImg/>
          <h2>Sentiment Analisys</h2>
          <SvgImg/>
          <h2>Prototyping</h2>
          <SvgImg/>
          <h2>Virtual reality</h2>
        </div>
      </div>
    </>
  );
}
