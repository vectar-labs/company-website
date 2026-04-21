import HeroImage from "../assets/diagram.svg";

export const Home = () => {
  return (
    <section className="w-full  bg-[#121212] sm:min-h-120">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 sm:py-10 sm:px-0  h-full">
        <div className="col-span-1 flex  flex-col justify-center sm:min-h-160">
          <h4 className="text-[#07f0c9] text-xs sm:text-sm font-extralight mb-4">A suite of software & IT services dedicated to transforming education</h4>
          <h1 className="text-slate-100 text-3xl sm:text-5xl font-semibold">Building for African Schools. Designed for the Future.</h1>
          <h3 className="text-slate-400 text-xl mt-3">
            We design and deliver technology that makes quality education more accessible, efficient, and impactful — for institutions, educators, and learners
            across Tanzania and East Africa
          </h3>
          <div className="flex gap-8 items-center">
            <button className="w-fit bg-slate-100 text-[#121212] font-semibold py-2.5 px-8 cursor-pointer my-10 rounded-full">Get Free Consultation</button>
            <button className="w-fit border border-slate-500 text-slate-100 font-semibold py-2.5 px-8 cursor-pointer my-10 rounded-full">See Our Works</button>
          </div>

          <div className="border-t-1 border-slate-800">
            <div className="w-full grid grid-cols-3 gap-5 py-10">
              <div className="col-span-1">
                <p className="text-slate-100 text-lg font-medium">50+</p>

                <p className="text-slate-400 text-sm">Institutions served</p>
              </div>
              <div className="col-span-1">
                <p className="text-slate-100 text-lg font-medium">3</p>
                <p className="text-slate-400 text-sm">Countries</p>
              </div>
              <div className="col-span-1">
                <p className="text-slate-100 text-lg font-medium">98%</p>
                <p className="text-slate-400 text-sm">Client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-row justify-start sm:min-h-160">
          <img src={HeroImage} alt="hero image" className="w-200" />
        </div>
      </div>
      <div className="w-full bg-slate-100 sm:min-h-100 ">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-[#121212] text-2xl sm:text-4xl font-bold mb-10 leading-snug">A technology partner for the education industry</h2>
          <div className="">
            <div className="w-full grid grid-cols-3 gap-5 py-10">
              <div className="col-span-1 border-r border-slate-300 pr-16">
                <p className="text-2xl text-[#121212] font-semibold">School & university software</p>
                <p className="text-md my-5 flex items-center gap-2">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-monitor-cog-icon lucide-monitor-cog"
                    >
                      <path d="M12 17v4" />
                      <path d="m14.305 7.53.923-.382" />
                      <path d="m15.228 4.852-.923-.383" />
                      <path d="m16.852 3.228-.383-.924" />
                      <path d="m16.852 8.772-.383.923" />
                      <path d="m19.148 3.228.383-.924" />
                      <path d="m19.53 9.696-.382-.924" />
                      <path d="m20.772 4.852.924-.383" />
                      <path d="m20.772 7.148.924.383" />
                      <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                      <path d="M8 21h8" />
                      <circle cx="18" cy="6" r="3" />
                    </svg>
                  </span>
                  CampusOS
                </p>
                <p className="text-[#121212] text-sm font-normal">
                  Custom platforms for admissions, attendance, fees, timetabling, exams, and staff management — built around how your institution works.
                </p>
              </div>
              <div className="col-span-1 border-r border-slate-300 pr-16">
                <p className="text-2xl text-[#121212] font-semibold">Digital learning platforms</p>
                <p className="text-[#121212] text-sm font-normal">
                  Learning management systems, virtual classrooms, and e-learning tools that extend your institution beyond physical walls.
                </p>
              </div>
              <div className="col-span-1 ">
                <p className="text-2xl text-[#121212] font-semibold">IT infrastructure & support</p>
                <p className="text-[#121212] text-sm font-normal">
                  Network setup, cloud hosting, cybersecurity, device management, and reliable on-site IT support for your campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
