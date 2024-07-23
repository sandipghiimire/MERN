import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import FooterO from "../components/FooterO"

const LayoutMain = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <FooterO/>       

    </div>
  )
}

export default LayoutMain