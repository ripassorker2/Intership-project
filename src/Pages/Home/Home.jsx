import React from "react";
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
    </div>
  );
};

export default Home;
