import React from "react";
import PrivacyPolicyPage from "./components/security/privacy";

import Footer from "../sections/footer/footer";
import Navbar from "../sections/navbar/navbar";

export default function Security() {
  return (
    <>
    
    <Navbar />
    <PrivacyPolicyPage/>
    <Footer/>
    </>
  );
}
