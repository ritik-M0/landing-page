import "./App.css";
import Component from "./components/LandingPage";
import ContactUs from "./components/Contact-Us/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About-Us/About-Us";
import Team from "./components/Team/Team";
import CaseStudy from "./components/Case-Study/Case-Study";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/team" element={<Team />} />
           <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
