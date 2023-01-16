import React from "react";
import Contact from "./Contact/Contact";
import Founder from "./Founder/Founder";
import Principal from "./Principal/Principal";

const Home = () => {
  return (
    <div>
      <Principal></Principal>
      <Founder />
      <Contact />
    </div>
  );
};

export default Home;
