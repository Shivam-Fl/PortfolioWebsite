import { work } from "./data";
export default function Experience() {
  return (
    <div
      className="font-outfit flex flex-col justify-center items-center text-center   "
      id="experience"
    >
      <div className=" flex flex-col max-sm:pt-32  ">
        <div
          className="text-center text-2xl lg:text-6xl font-semibold z-10 "
          style={{
            backgroundImage: "url(/assets/Ellipse338.png)",
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>WORK EXPERIENCE</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-16 m-4">
          {work.map((item, index) => {
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
                  src={item.link}
                  alt={item.organization}
                />
                <div className="  text-xl font-montserrat gap-y-2 flex flex-col">
                  <h2>Role : {item.position}</h2>
                  <h4>Organization : {item.organization}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
