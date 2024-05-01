import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import SunIcon from "../assets/icon/SunIcon";
import MoonIcon from "../assets/icon/MoonIcon";

import GitHubIcon from "../assets/icon/GitHubIcon";
import TelegramIconDark from "../assets/icon/TelegramIconDark";
import PortfolioIcon from "../assets/icon/PortfolioIcon";

function Header() {
  const { dark, themeMode } = useContext(ThemeContext);

  return (
    <header className="py-[12px]  flex justify-between items-center">
      <Link
        to="/"
        className={`text-[24px] ${
          dark ? "text-white" : ""
        } font-[Pacifico] font-medium tracking-[4px] transition-all duration-[0.7s] ease-in-out hover:tracking-[1.3px] border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F] mobile420:tracking-[-1px] `}
      >
        Hikmatulloh
      </Link>

      <nav>
        <ul className="flex justify-between items-center gap-5 mobile420:gap-2">
          <li>
            <Link
              className={`  ${
                dark ? "text-white" : ""
              } transition-all duration-[0.7s] ease-in-out border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]`}
              to="/project"
            >
              <span
                className={`  ${
                  dark ? "fill-white " : "fill-black"
                } transition-all duration-[0.7s] ease-in-out `}
              >
                <PortfolioIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link target="blank" to="https://github.com/HikmatullohAbdullayev">
              <span
                className={`  ${
                  dark ? "fill-white " : "fill-black"
                } transition-all duration-[0.7s] ease-in-out `}
              >
                <GitHubIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link target="blank" to="https://t.me/HikmatullohAbdullayev">
              <span
                className={`  ${
                  dark ? "fill-white " : "fill-black"
                } transition-all duration-[0.7s] ease-in-out `}
              >
                <TelegramIconDark />
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <div onClick={themeMode} className="theme cursor-pointer">
        {dark ? (
          <span className="fill-black bg-white transition-all duration-[0.7s] ease-in-out   ">
            <MoonIcon />
          </span>
        ) : (
          <span className="fill-black transition-all duration-[0.7s] ease-in-out ">
            <SunIcon />
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
