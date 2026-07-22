// import { useEffect } from "react";
// import Lenis from "lenis"
// import Navbar from "./component/;
import "./styles/index.css";
import Navbar from "./components/ui/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import MyProject from "./sections/MyProject";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyProject />
      <Contact />
    </>
  );
}

export default App;
