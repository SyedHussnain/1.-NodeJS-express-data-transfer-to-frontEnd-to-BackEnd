import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar"
import HeroSection from "../HeroSection"
import SignUp from "../SignUp"
import SignIn from "../SignIn"
import Admin from "../Admin"
import NotificationContainer from "react-notifications/lib/NotificationContainer"
import "react-notifications/lib/notifications.css";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/admin" element={<Admin/>} />
          {/* <Route path="/" element={</>} /> */}
          {/* <Route path="/" element={</>} /> */}
          {/* <Route path="/" element={</>} /> */}
          {/* <Route path="/" element={</>} /> */}
          {/* <Route path="/" element={</>} /> */}
        </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </>
  )
}

export default Home