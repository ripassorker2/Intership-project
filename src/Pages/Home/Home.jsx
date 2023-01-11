import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Bannar/Bannar";
import Contact from "./Contact/Contact";
import Principal from "./Principal/Principal";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Principal></Principal>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
