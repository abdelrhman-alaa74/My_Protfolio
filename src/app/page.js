import Contact from "./component/contact/Contact";
import Description from "./component/Description/Description";
import Footer from "./component/footer/Footer";
import Landing from "./component/Landing/Landing";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";
import Review from "./component/Services/Services";
import Skills from "./component/Skills/Skills";
import StartProject from "./component/startWithMe/StartProject";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Description />
      <Skills />
      <Projects />
      <Review />
      <Contact />
      <StartProject />
      <Footer />
    </div>
  );
}
