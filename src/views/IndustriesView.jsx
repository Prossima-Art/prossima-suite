import React from "react";
import "./components/industries/style.scss"
import Hero from "./components/industries/HeroView"

import { Ecommerce, Education, Finance, Food, Healthcare, SaaS } from "./components/industries/infoTitle/info";
import { InfoTextEcommerce, InfoTextEducation, InfoTextFinance, InfoTextFood, InfoTextSaaS, InfoTexthealthcare } from "./components/industries/infoText/infoText";
import Footer from "../sections/footer/footer";
import Navbar from "../sections/navbar/navbar";


function IndustriesView() {
    return (
        <>
            <Navbar />
            <Hero />
            <Ecommerce id="Ecommerce"
            />
            <InfoTextEcommerce/>
            <Finance id="Finance"/>
            <InfoTextFinance/>
            <Healthcare id="Healthcare"/>
            <InfoTexthealthcare/>
            <Education id="Education"/>
            <InfoTextEducation/>
            <Food id="FoodService"/>
            <InfoTextFood/>
            <SaaS id="Saas"/>
            <InfoTextSaaS/>
            <Footer/>
        </>
    );
}

export default IndustriesView;
