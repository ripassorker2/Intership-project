import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
