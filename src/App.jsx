import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
