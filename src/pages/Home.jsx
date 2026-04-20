import HeroImage from "../assets/diagram.svg";

export const Home = () => {
  return (
    <section className="w-full  bg-[#121212] sm:min-h-180">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 sm:py-20 sm:px-0  h-full">
        <div className="col-span-1 flex  flex-col justify-center sm:min-h-160">
          <h4 className="text-slate-950 text-xs sm:text-sm font-medium mb-4 w-fit rounded-full bg-[#07f0c9] px-8 py-2">EduTech Provider</h4>
          <h1 className="text-slate-100 text-3xl sm:text-5xl font-semibold">Powering the Future of Education — One School at a Time</h1>
          <h3 className="text-slate-400 text-xl mt-3">
            We build websites, apps, AI tools, and tech infrastructure for schools and educational institutions across Tanzania and East Africa
          </h3>
          <button className="w-fit bg-slate-100 text-[#121212] font-semibold py-2.5 px-8 cursor-pointer my-10 rounded-full">Get Free Consultation</button>
          <div className="border-t-1 border-slate-800"></div>
        </div>
        <div className="col-span-1 flex flex-row justify-start sm:min-h-160">
          <img src={HeroImage} alt="hero image" className="w-200" />
        </div>
      </div>
      <div className="w-full  bg-slate-100 sm:min-h-180"></div>
    </section>
  );
};
