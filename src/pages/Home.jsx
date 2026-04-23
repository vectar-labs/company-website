import HeroImage from "../assets/diagram.svg";
import { CtaSection } from "../components/CtaFooterSection";
import { Footer } from "../components/Footer";
import { MissionSection } from "../components/MissionSection";
import { PartnersSection } from "../components/PartnersSection";
import { Testimonial } from "../components/Testimonial";
import { WhyUs } from "../components/WhyUs";

export const Home = () => {
  return (
    <section className="w-full  bg-[#121212] sm:min-h-120 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-4  pt-20 pb-16 sm:py-0  h-full">
        <div className="col-span-1 flex  flex-col justify-center min-h-80 md:min-h-160">
          <h4 className="text-[#07f0c9] text-sm sm:text-sm font-extralight mb-4">A suite of software & IT services dedicated to transforming education</h4>
          <h1 className="text-slate-100 text-2xl md:text-3xl lg:text-4xl font-semibold">Building for African Schools. Designed for the Future.</h1>
          <h3 className="text-slate-400 text-sm md:text-md lg:text-lg mt-3">
            We design and deliver technology that makes quality education more accessible, efficient, and impactful — for institutions, educators, and learners
            across Tanzania and East Africa
          </h3>
          <div className="flex gap-4 sm:gap-8 items-center">
            <button className="w-fit bg-slate-100 text-[#121212] font-semibold py-2.5 px-8 cursor-pointer my-10 rounded-full text-xs">
              Get Free Consultation
            </button>
            <button className="w-fit border border-slate-500 text-slate-100 font-semibold py-2.5 px-8 cursor-pointer my-10 rounded-full text-xs">
              See Our Works
            </button>
          </div>

          <div className="border-t-1 border-slate-800">
            <div className="w-full grid grid-cols-3 gap-5 py-10">
              <div className="col-span-1">
                <p className="text-slate-100 text-lg font-medium">50+</p>

                <p className="text-slate-400 text-xs">Institutions served</p>
              </div>
              <div className="col-span-1">
                <p className="text-slate-100 text-lg font-medium">3</p>
                <p className="text-slate-400 text-xs">Countries</p>
              </div>
              <div className="col-span-1">
                <p className="text-slate-100 text-lg font-medium">98%</p>
                <p className="text-slate-400 text-xs">Client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-row justify-end min-h-80 md:min-h-160">
          <img src={HeroImage} alt="hero image" className="w-200 md:w-250" />
        </div>
      </div>
      <div className="w-full bg-white sm:min-h-100 px-4 sm:py-8 ">
        <div className="max-w-7xl mx-auto pt-20">
          <h2 className="text-[#121212] text-2xl sm:text-3xl font-bold mb-4 sm:mb-2 leading-snug ">A technology partner for the education industry</h2>
          <div className="">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 py-5">
              <div className="col-span-1  py-8 sm:pb-0 pr-2 lg:pr-16">
                <p className="text-xl text-[#121212] font-semibold">School & university software</p>
                <p className="text-md my-6 flex items-center gap-2 font-semibold">
                  {" "}
                  <span className="font-semibold">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0bcd76]">
                      <rect x="2" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 5V4a1 1 0 011-1h6a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="7" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="7" y1="12" x2="12" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <circle cx="16" cy="14" r="1.5" fill="currentColor" />
                    </svg>
                  </span>
                  CampusOS
                </p>
                <p className="text-slate-600 text-sm mb-10 max-w-lg">
                  Custom platforms for admissions, attendance, fees, timetabling, exams, and staff management — built around how your institution works.
                </p>
              </div>
              <div className="col-span-1  pr-16 py-8 sm:pb-0">
                <p className="text-xl text-[#121212] font-semibold">Digital learning platforms</p>
                <p className="text-md my-6 flex items-center gap-2 font-semibold">
                  {" "}
                  <span className="">
                    <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0bcd76]">
                      <path d="M11 3L2 7.5l9 4.5 9-4.5L11 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M5 9.5v5c0 0 2 2.5 6 2.5s6-2.5 6-2.5v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="20" y1="7.5" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="20" cy="14" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  LearnHub
                </p>
                <p className="text-slate-600 text-sm font-normal">
                  Learning management systems, virtual classrooms, and e-learning tools that extend your institution beyond physical walls.
                </p>
              </div>
              <div className="col-span-1 py-8 sm:pb-0">
                <p className="text-xl text-[#121212] font-semibold">IT infrastructure & support</p>
                <p className="text-md my-6 flex items-center gap-2 font-semibold">
                  {" "}
                  <span className="font-semibold">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0bcd76]">
                      <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="12" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="10" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.2" />
                      <line x1="10" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.2" />
                      <line x1="6" y1="10" x2="6" y2="12" stroke="currentColor" strokeWidth="1.2" />
                      <line x1="16" y1="10" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                  TechDesk
                </p>
                <p className="text-slate-600 text-sm font-normal">
                  Network setup, cloud hosting, cybersecurity, device management, and reliable on-site IT support for your campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners section */}
      <PartnersSection />
      {/* Our mission */}
      <MissionSection />
      {/* Why choose us */}
      <WhyUs />
      <Testimonial />
      <CtaSection />
      <Footer />
    </section>
  );
};
