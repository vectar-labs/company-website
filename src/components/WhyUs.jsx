export const WhyUs = () => {
  return (
    <section className="w-full bg-[#f8fafc]  py-10 md:py-32 px-4 sm:px-0 min-h-160 ">
      <div className="max-w-7xl mx-auto  space-y-10 my-10 md:mt-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <div className="col-span-1  lg:pr-16">
            <p className="text-lg text-[#0bcd76] mb-8 font-bold">Why choose us</p>
            <h2 className="text-slate-900 text-2xl lg:text-3xl font-bold mb-8 lg:max-w-md">We only work with educational institutions</h2>
            <p className="text-sm md:text-lg text-gray-500">
              We don't spread ourselves across industries. Every product we build and every service we offer is designed specifically for educational
              institutions — their workflows, their users, and their constraints.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-10">
              <p className="text-xs md:text-sm bg-[#e0fdf4] p-1.5 rounded-lg w-fit font-medium">Education-only focus</p>
              <p className="text-xs md:text-sm bg-[#e0fdf4] p-1.5 rounded-lg w-fit font-medium">Affordable pricing</p>
              <p className="text-xs md:text-sm bg-[#e0fdf4] p-1.5 rounded-lg w-fit font-medium">Local support team</p>
              <p className="text-xs md:text-sm bg-[#e0fdf4] p-1.5 rounded-lg w-fit font-medium">Fast implementation</p>
              <p className="text-xs md:text-sm bg-[#e0fdf4] p-1.5 rounded-lg w-fit font-medium">Training included</p>
            </div>
          </div>
          <div className="col-span-1 lg:ml-16 ">
            <div className="space-y-3 md:space-y-5">
              {/* card -1 */}
              <div className="border border-gray-300 rounded-lg p-4 md:p-8 flex gap-6">
                <div className="w-10 h-10 rounded-sm p-3 flex items-center justify-center bg-[#ccfdf0] font-bold text-sm text-[#0d9488]">01</div>
                <div>
                  <p className="text-sm md:text-lg mb-2 font-semibold">Built for how schools actually work</p>
                  <p className="text-gray-500 text-sm md:text-md font-normal">
                    Our systems are designed around real school workflows — not adapted from generic business software
                  </p>
                </div>
              </div>
              {/* card-2 */}
              <div className="border border-gray-300 rounded-lg p-4 md:p-8 flex gap-6">
                <div className="w-10 h-10 rounded-sm p-3 flex items-center justify-center bg-[#ccfdf0] font-bold text-sm text-[#0d9488]">02</div>
                <div>
                  <p className="text-sm md:text-lg mb-2 font-semibold">Onboarding & training included</p>
                  <p className="text-gray-500 text-sm md:text-md font-normal">
                    We don't just hand you software and leave. We train your staff, support your launch, and stay available.
                  </p>
                </div>
              </div>
              {/* card-3 */}
              <div className="border border-gray-300 rounded-lg p-4 md:p-8 flex gap-6">
                <div className="w-10 h-10 rounded-sm p-3 flex items-center justify-center bg-[#ccfdf0] font-bold text-sm text-[#0d9488]">03</div>
                <div>
                  <p className="text-sm md:text-lg mb-2 font-semibold">Designed for the African context</p>
                  <p className="text-gray-500 text-sm md:text-md font-normal">
                    Low bandwidth, local languages, mobile-first, and local payment integrations — built in from the start
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
