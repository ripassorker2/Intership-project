import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Bannar/Bannar";
import Contact from "./Contact/Contact";
import Founder from "./Founder/Founder";
import Principal from "./Principal/Principal";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Principal></Principal>
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
