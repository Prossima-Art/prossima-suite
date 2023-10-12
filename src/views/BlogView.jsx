import React from "react";


import Footer from "../sections/footer/footer";
import Navbar from "../sections/navbar/navbar";
import BlogHero from "./components/blog/BlogHero";
import BlogPost from "./components/blog/BlogPost";

export default function BlogView() {
  return (
    <>
    <Navbar />
    
    <BlogHero/>
    <BlogPost/>
    <Footer/>
    </>
  );
}
