import { headerLogo } from "../../public/assets/images";
import { navlinks } from "../constants";
import { close, hamburger } from "../../public/assets/icons";
import { useState } from "react";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="pt-5 ">
      <ul className="flex items-center justify-between">
        <li>
          <img src={headerLogo} alt="Nike Logo" />
        </li>
        <div className="flex max-xl:hidden text-xl">
          {navlinks.map((link, i) => {
            return (
              <li key={i} className="mr-10 leading-normal text-gray-500">
                {link}
              </li>
            );
          })}
        </div>
        <li className="font-semibold max-xl:hidden text-xl">Explore</li>
        <img
          src={hamburger}
          alt="Hamburger"
          className="xl:hidden w-6 h-6" 
          onClick={() => setMobile(!mobile)}
        />
      </ul>

      {mobile && (
        <div className="fixed top-0 right-0 w-[50%] h-[100%] xl:hidden bottom-0 z-[100] overflow-hidden bg-white px-5 py-3 border-l border-[#4d4c4c]">
          <div className="flex justify-end mb-4">
            <img
              src={close}
              onClick={() => setMobile(false)}
              className="text-3xl font-semibold font-Palanquin w-6 h-6 mt-5" 
            />
          </div>
          <ul className="flex flex-col items-center gap-7 justify-center mt-52">
            {navlinks.map((links, index) => {
              return <li key={index} className="hover:opacity-70 font-medium">{links}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
