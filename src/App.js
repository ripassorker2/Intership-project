import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
const App = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);
   return (
      <div>
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
};

export default App;
