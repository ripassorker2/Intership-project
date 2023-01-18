import Main from "../Layout/Main";
import Impact from "../Pages/Impact/Impact";

import Stewacd from "../Pages/OurWork/Stewacd/Stewacd";
import TelentHunt from "../Pages/OurWork/TelentHunt/TelentHunt";
import VnsdgImp from "../Pages/OurWork/VnsdgImp/VnsdgImp";
import August20 from "../Pages/Partners/Events/August20/August20";
import August19 from "../Pages/Partners/Events/August2019/August19";
import AwardsCeremony from "../Pages/Partners/Events/Awards Ceremony/AwardsCeremony";
import Events from "../Pages/Partners/Events/Events";
import GenderAwarness from "../Pages/Partners/Events/Gender Awarness/GenderAwarness";
import GoodTouch from "../Pages/Partners/Events/Good Touch/GoodTouch";
import NutritousFood from "../Pages/Partners/Events/Nutritous food/NutritousFood";
import QualityEducation from "../Pages/Partners/Events/Quality Education/QualityEducation";
import SkillEnhancement from "../Pages/Partners/Events/Skill Enhancement/SkillEnhancement";
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
      {
        path: "/august19",
        element: <August19/>,
      }, 
      {
        path: "/august20",
        element: <August20/>,
      },
      {
        path: "/AwardsCeremony",
        element: <AwardsCeremony/>,
      }, 
      {
        path: "/GenderAwarness",
        element: <GenderAwarness/>,
      }, 
      {
        path: "/GoodTouch",
        element: <GoodTouch/>,
      },
       {
        path: "/NutritousFood",
        element: <NutritousFood/>,
      },
      {
        path: "/QualityEducation",
        element: <QualityEducation/>,
      },
      {
        path: "/SkillEnhancement",
        element: <SkillEnhancement/>,
      },
    ],
  },
]);

export default router;