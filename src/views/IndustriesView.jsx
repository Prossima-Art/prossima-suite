import React from "react";
import "./components/industries/style.scss";
import Hero from "./components/industries/HeroView";

import {
  Ecommerce,
  Education,
  Finance,
  Food,
  Healthcare,
  SaaS,
} from "./components/industries/infoTitle/info";
import {
  InfoTextEcommerce,
  InfoTextEducation,
  InfoTextFinance,
  InfoTextFood,
  InfoTextSaaS,
  InfoTexthealthcare,
} from "./components/industries/infoText/infoText";
import Footer from "../sections/footer/footer";
import Navbar from "../sections/navbar/navbar";

function IndustriesView() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="Ecommerce">
        <Ecommerce />
        <InfoTextEcommerce />
      </section>
      <section id="Finance">
        <Finance />
        <InfoTextFinance />
      </section>
      <section id="Healthcare">
        <Healthcare />
        <InfoTexthealthcare />
      </section>

      <section id="Education">
        <Education />
        <InfoTextEducation />
      </section>

      <section id="FoodService">
        <Food />
        <InfoTextFood />
      </section>
      <section id="Saas">
        <SaaS />
        <InfoTextSaaS />
      </section>

      <Footer />
    </>
  );
}

export default IndustriesView;
