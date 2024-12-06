
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills";
import Experience from "./components/work/experience";

function App() {
  return (
    <div className=" text-white   box-border ">
      <Navbar />
      <div className="flex flex-col mt-20 justify-center items-center">
        
        <div className="py-10 sm:py-14 lg:py-24" id="home">
          <Hero />{" "}
        </div>
        <Skills/>
        <Experience />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
