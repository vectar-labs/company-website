import { Link } from "react-router";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="w-full text-slate-100 bg-[#121212]">
      {/* desktop nav */}
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-2 sm:px-0">
        <img src={logo} alt="" className="w-44 sm:w-52" />

        <ul className="hidden lg:flex gap-10 text-sm text-slate-100 font-medium">
          <a href="">Products</a>
          <a href="" className="flex gap-3 items-center">
            Company{" "}
            {/* <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down-icon lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span> */}
          </a>
          <a href="">Resources</a>
          <a href="">Customer Stories</a>
        </ul>
        <div className="flex items-center gap-5">
          {" "}
          <button className="hidden sm:block bg-slate-100 text-[#121212] rounded-full font-semibold py-2.5 px-8 cursor-pointer text-xs">
            Get Free Consultation
          </button>
          {/* mobile toggle button */}
          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu text-slate-100 w-16"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>
      {/* mobile nav */}
      <nav></nav>
    </div>
  );
};
