
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Experience from "./components/work/experience";

function App() {
  return (
    <div className=" text-white m-4 sm:m-8 box-border flex justify-center items-center ">
      <div className="">
        <Navbar />
        <div className="h-[98vh]" id="home">
          <Hero />{" "}
        </div>
        <Experience />
       
      </div>
    </div>
  );
}

export default App;
