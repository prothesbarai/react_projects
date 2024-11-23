import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../component/homepage/Home";
import Contact from "../component/staticpage/Contact";
import About from "../component/staticpage/About";
import WebProjects from "../component/staticpage/WebProjects";
import ToolsProjects from "../component/staticpage/ToolsProjects";
import MySkills from "../component/staticpage/MySkills";
import AnimationProjects from "../component/staticpage/AnimationProjects";
import SoftwareProjects from "../component/staticpage/SoftwareProjects";
import MyBlog from "../component/staticpage/MyBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/myskills",
        element: <MySkills></MySkills>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/webprojects",
        element: <WebProjects></WebProjects>
      },
      {
        path: "/toolsprojects",
        element: <ToolsProjects></ToolsProjects>
      },
      {
        path: "/animationprojects",
        element: <AnimationProjects></AnimationProjects>
      },
      {
        path: "/softwareprojects",
        element: <SoftwareProjects></SoftwareProjects>
      },
      {
        path: "/myblog",
        element: <MyBlog></MyBlog>
      },
    ]
  },
]);

export default router