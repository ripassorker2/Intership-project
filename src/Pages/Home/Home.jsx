import React from "react";
import Banner from "./Bannar/Bannar";

import Footer from "../../Shared/Footer/Footer";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
