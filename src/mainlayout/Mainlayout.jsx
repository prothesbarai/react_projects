import { Outlet } from "react-router-dom";
import Header from "../component/headerfooter/Header";
import Footer from "../component/headerfooter/Footer";

export default function Mainlayout() {
  return (
    <div>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
