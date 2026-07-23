import { MotionConfig } from "motion/react";
import Navbar from "./components/ui/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import MyProject from "./sections/MyProject";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <MyProject />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
