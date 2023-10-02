import React from "react";
import IconText from "../assets/Vector.svg"

function IndustriesView() {
    const heroText = "Productivity and Efficiency tools for all companies."
    return (
        <>
            <div className="hero-industries">
                <div className="redirect-vide">go</div>
                <a className="go-to" href="https://youtu.be/u7dtZ9tL_k4?si=rSGvrdI0ekJWlkSC" target="_black" rel="noopener noreferrer " ><img src={IconText}></img></a>
                <div className="content-center">
                    <h1>{heroText}</h1>
                </div>
            </div>
        </>
    );
}

export default IndustriesView;
