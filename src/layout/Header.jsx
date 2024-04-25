import { Link, NavLink } from "react-router-dom";
import SunIcon from "../assets/icon/SunIcon";
import MoonIcon from "../assets/icon/MoonIcon";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
    const {dark, themeMode} = useContext(ThemeContext)
  
  return (
    <div className="py-[12px]  flex justify-between items-center">
      <Link
        to="/"
        className={`text-[24px] ${dark? "text-white" : ""} font-[Pacifico] font-medium tracking-[4px] transition-all duration-[0.7s] ease-in-out hover:tracking-[1.3px] border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F] `}
      >
        Hikmatulloh
      </Link>

      <nav>
        <ul className="flex justify-between items-center gap-5">
          <li>
            <NavLink
              className={`  ${dark? "text-white" : ""} transition-all duration-[0.7s] ease-in-out border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]`}
              to="/project"
            >
              Loyihalar
            </NavLink>
          </li>
          <li>
            <NavLink
              className="border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]"
              target="blank"
              to="https://github.com/HikmatullohAbdullayev"
            >
              Git hub
            </NavLink>
          </li>
        </ul>
      </nav>
      <div onClick={themeMode} className="theme cursor-pointer">
        {dark ? (
          <span className="fill-black bg-white transition-all duration-[0.7s] ease-in-out  hover:fill-white  ">
            <MoonIcon />
          </span>
        ) : (
          <span className="fill-black transition-all duration-[0.7s] ease-in-out hover:fill-white">
            <SunIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
