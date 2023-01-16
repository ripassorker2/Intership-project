import Main from "../Layout/Main";
import Impact from "../Pages/Impact/Impact";

import Stewacd from "../Pages/OurWork/Stewacd/Stewacd";
import TelentHunt from "../Pages/OurWork/TelentHunt/TelentHunt";
import VnsdgImp from "../Pages/OurWork/VnsdgImp/VnsdgImp";
import Events from "../Pages/Partners/Events/Events";
import OurPartners from "../Pages/Partners/OurPartners/OurPartners";
import PartnerWithUs from "../Pages/Partners/PartnerWithUs/PartnerWithUs";
import AboutUs from "../Pages/WhoAreWe/AboutUs/AboutUs";
import OurTeam from "../Pages/WhoAreWe/OurTeam/OurTeam";
import Vision from "../Pages/WhoAreWe/Vision/Vision";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/vision",
        element: <Vision />,
      },
      {
        path: "/ourteam",
        element: <OurTeam />,
      },
      {
        path: "/stewacd",
        element: <Stewacd />,
      },
      {
        path: "/telenthunt",
        element: <TelentHunt />,
      },
      {
        path: "/Vnsdgimp",
        element: <VnsdgImp />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/ourpartners",
        element: <OurPartners />,
      },
      {
        path: "/partnerwithus",
        element: <PartnerWithUs />,
      },
      {
        path: "/impact",
        element: <Impact />,
      },
    ],
  },
]);

export default router;