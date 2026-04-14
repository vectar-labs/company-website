import { Link } from "react-router";
import logo from "../assets/Union.png";

export const Navbar = () => {
  return (
    <div className="w-full bg-[#fbfbf8]">
      {/* desktop nav */}
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-2 sm:px-0">
        <h1 className="flex font-bold text-[#9b4e45] sm:text-lg">
          <img src={logo} alt="" className="w-8 sm:w-12" /> VectarLabs
        </h1>
        <ul className="hidden sm:flex gap-10 text-md text-[#6d4e45] font-medium">
          <a href="">Products</a>
          <a href="" className="flex gap-3 items-center">
            Company{" "}
            <span className="">
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
            </span>
          </a>
          <a href="">Resources</a>
          <a href="">Customer Stories</a>
        </ul>
        <button className="hidden sm:block bg-[#9b4e45] text-[#effbf9] font-semibold py-3 px-12 cursor-pointer">Free Consultation</button>
        {/* mobile toggle button */}
        <button className="sm:hidden">
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
            class="lucide lucide-menu-icon lucide-menu text-[#9b4e45]"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>
      {/* mobile nav */}
      <nav></nav>
    </div>
  );
};
