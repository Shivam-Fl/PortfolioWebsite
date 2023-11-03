
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects/projects";
import Experience from "./components/work/experience";

function App() {
  return (
    <div className=" text-white mx-4 mb-4 sm:mx-8 sm:mb-8 box-border flex justify-center items-center ">
      <div className="">
        <Navbar />
        <div className="h-[98vh]" id="home">
          <Hero />{" "}
        </div>
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
