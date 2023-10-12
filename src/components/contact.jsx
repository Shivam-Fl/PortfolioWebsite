

export default function Contact() {

    const data = [
        {
            img : "/assets/contact/Instagram.svg",
            link : "https://www.instagram.com/__shivam__fl/"
        },
        {
            img : "/assets/contact/GitHub.svg",
            link : "https://github.com/Shivam-Fl"
        },
        {
            img : "/assets/contact/Website.svg",
            link : "/"
        },
    ]
  return (
    <div className="h-[100vh]">
      <h2 className="text-center">Contact Me</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex flex-col justify-center content-between basis-1/2">
            <div >
             <h6>Find me at</h6>
             <div className="flex gap-x-8">
                {
                    data.map((item, index)=>{
                        return(
                            <a className="flex justify-center items-center w-[80px] p-3" key={index} href={item.link} style={{borderRadius:"1.18919rem",
                                background: "#202328",
                                boxShadow: "6.91875px 6.91875px 6.91875px 0px rgba(204, 204, 204, 0.25)"}}>
                                <img src={item.img} />
                            </a>
                        )
                    })
                }

             </div>
            </div>
            <div>
                <div><i className="fa-regular fa-envelope"></i> <a href="mailto:shivam.r.mishra9120@gmail.com" data-gmail="true">shivam.r.mishra9120@gmail.com</a></div>
                <div><i className="fa-solid fa-location-dot"></i><a>Bhiwandi</a></div>
            </div>
        </div>
        <div className="basis-1/2">
                <form action="" className="w-[80%]">
                    <input className="bg-[#202328] w-full focus:border-[#202328]  focus:outline-[#202328]" type="text" placeholder="Name" />
                </form>
        </div>
      </div>
    </div>
  )
}
