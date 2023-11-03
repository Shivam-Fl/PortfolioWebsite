export default function Contact() {
  const data = [
    {
      img: "/assets/contact/Instagram.svg",
      link: "https://www.instagram.com/__shivam__fl/",
    },
    {
      img: "/assets/contact/GitHub.svg",
      link: "https://github.com/Shivam-Fl",
    },
    {
      img: "/assets/contact/Website.svg",
      link: "https://shivammishra.vercel.app/",
    },
  ];
  return (
    <div
      className="h-[100vh] font-outfit  flex flex-col gap-y-20   "
      id="contact"
    >
      <h2 className="text-center text-4xl mt-[15%] max-sm:mt-[25%]">
        Contact Me
      </h2>
      <div className="flex flex-col-reverse gap-y-8 sm:flex-row h-full sm:gap-x-16 justify-center  ">
        <div className="flex flex-col justify-start basis-1/2 gap-y-[18%]  ">
          <div className="flex flex-col gap-y-4 sm:gap-y-8  ">
            <h6 className="text-xl max-sm:text-center">Find me at</h6>
            <div className="flex max-sm:justify-center max-sm:items-center max-sm:px-12 gap-x-4 sm:gap-x-8">
              {data.map((item, index) => {
                return (
                  <a
                    className="flex justify-center items-center p-3"
                    key={index}
                    href={item.link}
                    style={{
                      borderRadius: "1.18919rem",
                      background: "#202328",
                      boxShadow:
                        "6.91875px 6.91875px 6.91875px 0px rgba(204, 204, 204, 0.25)",
                    }}
                  >
                    <img src={item.img} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" max-sm:flex justify-center content-center gap-x-4 max-sm:mt-[4%] ">
            <div className="text-sm sm:text-xl flex  justify-start items-center gap-x-2">
              <i className="fa-regular fa-envelope"></i>{" "}
              <a href="mailto:shivam.r.mishra9120@gmail.com" data-gmail="true">
                Mail me !!
              </a>
            </div>
            <div className="text-sm sm:text-xl flex justify-start items-center gap-x-2">
              <i className="fa-solid fa-location-dot"></i>
              <h5>Bhiwandi</h5>
            </div>
          </div>
        </div>
        <div className="sm:basis-1/2">
          <form action="" className="  flex flex-col gap-y-6 ">
            <input
              className="bg-[#202328] p-4 rounded-lg w-full focus:border-[#202328]  focus:outline-[#202328]"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#202328] p-4 rounded-lg w-full focus:border-[#202328]  focus:outline-[#202328]"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="bg-[#202328] p-4 rounded-lg w-full focus:border-[#202328]  focus:outline-[#202328]"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button
              className="px-10 py-2"
              style={{
                borderRadius: " 0.67513rem",
                background:
                  "linear-gradient(199deg, #A032AA 12.78%, rgba(48, 28, 124, 0.46) 148.58%)",
                boxShadow:
                  "0px 4.27347px 4.27347px 0px rgba(255, 255, 255, 0.55)",
              }}
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
