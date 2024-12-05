
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills";
import Experience from "./components/work/experience";

function App() {
  return (
    <div className=" text-white  mb-4 sm:mb-8 box-border ">
      <Navbar />
      <div className="flex flex-col mt-20 justify-center items-center">
        
        <div className="my-10 sm:my-14 lg:my-24" id="home">
          <Hero />{" "}
        </div>
        <Skills/>
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
