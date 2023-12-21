
import { projects } from "./data";
export default function Projects() {
  return (
    <div
    className="font-outfit flex flex-col justify-center items-center text-center  min-h-[100vh]   "
    id="projects"
  >
    <div className=" flex flex-col mt-[5%] max-sm:mt-[25%] " >
      
        <h2 className="text-center text-2xl lg:text-6xl font-semibold z-0 ">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10  gap-16 m-4">
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-3xl flex flex-col gap-y-6 p-4 justify-center items-center text-4xl font-semibold xl:w-[22vw]"
              style={{
                borderRadius: "1.04313rem",
                background: "rgba(34, 34, 34, 0.76)",
                boxShadow:
                  "0px 4.45066px 4.45066px 0px rgba(78, 255, 234, 0.55)",
              }}
            >
              <img
                className="w-full "
                src={item.img}
                alt={item.description}
              />
              <a href={item.link}>
              <div className=" text-sm  sm:text-xl font-montserrat gap-y-2 flex flex-col">
                <h2>Title : {item.title}</h2>
                <h4>Description : {item.description}</h4>
              </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}
