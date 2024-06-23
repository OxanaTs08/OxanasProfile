import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/pages/Header/Header";
import Intro from "./components/pages/Intro/Intro";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Footer from "./components/pages/Footer/Footer";
import SelectedWorks from "./components/pages/SelectedWorks/SelectedWorks";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/selectedworks" element={<SelectedWorks />} />
        <Route path="/contacts" element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
    
  )
}
export default AppRouter;