import { useEffect } from "react";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import MyProject from "../sections/MyProject";

const HomePage = () => {
  useEffect(() => {
    document.title = "Ramadwipa — Full Stack Developer";
  }, []);

  return (
    <main>
      <Hero />
      <AboutMe />
      <MyProject />
      <Contact />
    </main>
  );
};

export default HomePage;
