export default function Hero() {
  return (
    <div className="flex gap-y-8 flex-col z-0">
      <div className="flex flex-col-reverse sm:flex-row  content-center items-center font-bold w-[80vw] m-auto mt-[1.5%] sm:mt-[6%] ">
        <div className="justify-self-start basis-2/3 flex flex-col gap-y-8 sm:gap-y-16 ">
          <div className="relative z-0">
            {" "}
            <div className="absolute object-center -top-14 lg:-top-52 ">
              {" "}
              <img src="/assets/pfolio1.svg" alt="" />
            </div>
            <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-outfit"  >
              Hi, I&apos;m{" "}
              <span className="text-[#CD9BFF] font-originalSurfer">
                {" "}
                Shivam Mishra{" "}
              </span>
            </h1>
            <h4 className=" text-xl lg:text-6xl font-outfit font-normal">Web developer</h4>
          </div>

          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-[#FFFFFFB2] font-outfit text-justify ">
            Welcome to my digital playground! I&apos;m a Thane-based web
            developer and an enthusiastic IT engineering student, crafting
            innovative online experiences one line of code at a time.
          </p>
        </div>
        <div className="justify-self-end basis-1/3">
          <img src="/assets/profile.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-x-16 items-center text-2xl ">
        <button
          style={{
            border: " 1px solid rgba(0, 0, 0, 0.50)",
            background:
              "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(254, 200, 241, 0.00) 26.73%), radial-gradient(702.72% 378.76% at 29.94% 119.23%, #602EA6 0%, #D19088 100%)",
            backgroundBlendMode: "overlay, normal",
            boxShadow:
              "0px 30px 30px 0px rgba(0, 0, 0, 0.40), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset",
          }}
          className="border rounded-xl px-4 py-2  self-center font-['Inter']"
        >
          Resume
        </button>
        <button
          style={{
            border: " 1px solid rgba(0, 0, 0, 0.50)",
            borderColor:
              "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(254, 200, 241, 0.00) 26.73%), radial-gradient(702.72% 378.76% at 29.94% 119.23%, #602EA6 0%, #D19088 100%)",
            backgroundBlendMode: "overlay, normal",
            boxShadow:
              "0px 30px 30px 0px rgba(0, 0, 0, 0.40), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset",
          }}
          className="border rounded-xl px-4 py-2  self-center font-['Inter']"
        >
          Hire me
        </button>
      </div>
    </div>
  );
}
