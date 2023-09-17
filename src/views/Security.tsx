import React from "react";
import PrivacyPolicyPage from "./components/security/privacy";
import Navbar from '../sections/navbar/navbar.tsx';
import Footer from "../sections/footer/footer";

export default function Security() {
  return (
    <>
    
    <Navbar />
    <PrivacyPolicyPage/>
    <Footer/>
    </>
  );
}
