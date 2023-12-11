import "./app.scss";
import Contact from "./components/contact";
import Cursor from "./components/cursor";
import Hero from "./components/home";
import Navbar from "./microcomponents/navbar";
import Parallax from "./components/parallax";
import Portfolio from "./components/portfolio";
import Services from "./components/services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;