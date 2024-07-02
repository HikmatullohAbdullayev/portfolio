import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import GitHubIcon from '../assets/icon/GitHubIcon';
import GmailIcon from '../assets/icon/GmailIcon';
import TelegramIconDark from '../assets/icon/TelegramIconDark';
import LinkedinIcon from '../assets/icon/LinkedinIcon';

function Footer() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="container">
      <ul className="flex justify-center gap-5  pt-[50px] pb-[20px] ">
        <li>
          <Link
            className={`  ${
              dark ? 'text-white' : ''
            } transition-all duration-[0.7s] ease-in-out border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]`}
            to="mailto:hikmatullohabdullayev2@gmail.com"
          >
            <span
              className={`  ${
                dark ? 'fill-white ' : 'fill-black'
              } transition-all duration-[0.7s] ease-in-out `}
            >
              <GmailIcon />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`  ${
              dark ? 'text-white' : ''
            } transition-all duration-[0.7s] ease-in-out border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]`}
            to="https://t.me/HikmatullohAbdullayev"
            target="blank"
          >
            <span
              className={`  ${
                dark ? 'fill-white ' : 'fill-black'
              } transition-all duration-[0.7s] ease-in-out `}
            >
              <TelegramIconDark />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`  ${
              dark ? 'text-white' : ''
            } transition-all duration-[0.7s] ease-in-out border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]`}
            to="https://www.linkedin.com/in/hikmatulloh-abdullayev"
            target="blank"
          >
            <span
              className={`  ${
                dark ? 'fill-white ' : 'fill-black'
              } transition-all duration-[0.7s] ease-in-out `}
            >
              <LinkedinIcon />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`  ${
              dark ? 'text-white' : ''
            } transition-all duration-[0.7s] ease-in-out border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-[#375A7F]`}
            to="https://github.com/HikmatullohAbdullayev"
            target="blank"
          >
            <span
              className={`  ${
                dark ? 'fill-white ' : 'fill-black'
              } transition-all duration-[0.7s] ease-in-out `}
            >
              <GitHubIcon />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
