import Hero from "./components/Hero";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="faqs">
        <Faqs />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
