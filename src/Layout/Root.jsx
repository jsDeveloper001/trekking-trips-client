import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root
