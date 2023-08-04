import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Treatments from "./components/allTreatments/Treatments"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Hospitals from './components/hospitals/Hospitals'
import EducationalConsultancy from "./components/educational-consultancy"
import MedicalTourism from "./components/medical-tourism"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/treatments' element={<Treatments/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/hospitals' element={<Hospitals/>} />
          <Route exact path='/educational-consultancy' element={<EducationalConsultancy/>} />
          <Route exact path="/medical-tourism" element={<MedicalTourism />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
