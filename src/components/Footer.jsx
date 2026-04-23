import logo from "../assets/logo_light.png";

const date = new Date();
export const Footer = () => {
  return (
    <section className="w-full bg-white px-4 relative overflow-hidden">
      {/* Dot grid background — remove this block to go back to plain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#085041" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center border-b border-gray-300 pt-8">
          <div>
            <img src={logo} alt="vectarlabs logo" className="w-48" />
          </div>
          <div>
            <p className="text-sm md:text-lg max-w-sm text-slate-600 mb-5 md:mb-0">A suite of software & IT services dedicated to transforming education.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-4 py-10">
            <p className="text-sm text-slate-600">© {date.getFullYear()} vectarlabs. All rights reserved.</p>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between  flex-wrap py-10 text-slate-600">
              <div>
                <p className="font-bold text-sm mb-4">Overview</p>
                <ul className="space-y-3">
                  <li className="text-sm">Product</li>
                  <li className="text-sm">Pricing</li>
                  <li className="text-sm">FAQ</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm mb-4">Legal</p>
                <ul className="space-y-3">
                  <li className="text-sm">Terms and Conditions</li>
                  <li className="text-sm">Privacy Policy</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm mb-4">Contact</p>
                <ul className="space-y-3">
                  <li className="text-sm">Email</li>
                  <li className="text-sm">LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
