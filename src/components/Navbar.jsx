import { headerLogo } from "../../public/assets/images";
import { navlinks } from "../constants";
import { hamburger } from "../../public/assets/icons";
function Navbar() {
  return (
    <div className="pt-5">
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
        <img src={hamburger} alt="Hamburger" className="xl:hidden w-6 h-6" />
      </ul>
    </div>
  );
}

export default Navbar;
