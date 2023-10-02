import React from "react";
import "./components/industries/style.scss"
import Hero from "./components/industries/HeroView"

import { Ecommerce, Education, Finance, Food, Healthcare, SaaS } from "./components/industries/infoTitle/info";
import { InfoTextEcommerce, InfoTextEducation, InfoTextFinance, InfoTextFood, InfoTextSaaS, InfoTexthealthcare } from "./components/industries/infoText/infoText";
import Footer from "../sections/footer/footer";
import Navbar from "../sections/navbar/navbar";


function IndustriesView() {
    const heroText = "Productivity and Efficiency tools for all companies."
    const videoUrl = "https://s3-figma-videos-production-sig.figma.com/video/835212680197847456/TEAM/961f/0f7b/-419e-460b-87ae-f4cab050476e?Expires=1695600000&Signature=mqfK8E5sPt8I32L19Ll4sr-Crgg3kvW1XKHQoJ-SrttW1RNdOk9a~SCSUN9Zj8zHpYZROXnQFFi3pFub9UEN0onI4CU1OBnAYkM7xUiQNNLKj0jw80QqrOLLc3AyObPZm4vpx68eU6QD6gczVMO~Gtbvug723oHTdInwbnKNa5HiXJNtWnORDYBnFGEWmmaD5GyTU0nraqJm3OgilQwSH541zvD5haqei~X0zg9MAygKe88y3bKGZSP8FcpDEEJmUzBUPoO7S1~TdbpfG-dIsSBzHI-g-b-BmT0CMefN86cCGGMWAOQzDDb4zvBFjX0YDEmyEEZ88DHJytdEZ9fZ-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    return (
        <>
            <Navbar />
            <Hero />
            <Ecommerce/>
            <InfoTextEcommerce/>
            <Finance/>
            <InfoTextFinance/>
            <Healthcare/>
            <InfoTexthealthcare/>
            <Education/>
            <InfoTextEducation/>
            <Food/>
            <InfoTextFood/>
            <SaaS/>
            <InfoTextSaaS/>
            <Footer/>
        </>
    );
}

export default IndustriesView;
