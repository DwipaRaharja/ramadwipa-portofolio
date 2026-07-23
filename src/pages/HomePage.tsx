import { useEffect } from "react";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import MyProject from "../sections/MyProject";
import Services from "../sections/Services";
import WorkProcess from "../sections/WorkProcess";

const HomePage = () => {
  useEffect(() => {
    document.title = "Ramadwipa — Web Solutions for Business";
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <AboutMe />
      <MyProject />
      <WorkProcess />
      <Contact />
    </main>
  );
};

export default HomePage;
