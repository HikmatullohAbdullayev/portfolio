import aboutImg from '../assets/img/space.webp';
import skeleton from '../assets/img/skeleton.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function About() {
  const { dark } = useContext(ThemeContext);
  return (
    <section>
      <div className=" w-[300px] mx-auto ">
        <LazyLoadImage
          width="full"
          height={300}
          alt="space img"
          src={aboutImg} // use normal <img> attributes as props
          effect="Opacity"
          placeholderSrc={skeleton}
        />
      </div>
      <div className="info">
        <h1
          className={`text-[42px] ${
            dark ? 'text-white' : ''
          } font-[Pacifico] font-normal  mobile420:text-[36px] `}
        >
          Hikmatulloh
        </h1>

        <p
          className={`text-[14px] font-semibold mt-3 text-white   tracking-[-1px] px-[5px] py-[2px] rounded-[8px] inline-block bg-[#584966]  mobile420: `}
        >
          Frontend dasturchi (React)
        </p>
      </div>
      <div className="content">
        <h2
          className={`text-[30px] border-b-[4px] border-solid border-[#375A7F]  font-[Pacifico] font-normal  mobile420:text-[26px] inline-block mt-[50px] mb-[30px]  ${
            dark ? 'text-white' : ''
          }  `}
        >
          {' '}
          Men haqimda{' '}
          <span className="text-red-500">
            <Link
              target="blank"
              to="https://drive.google.com/file/d/10JbYC2Tmw_I7Beov4ReG2st5QJnBHfl2/view?usp=sharing"
            >
              Rezyume
            </Link>
          </span>
        </h2>
        <p
          className={` text-[18px] font-normal leading-[26px]
        ${dark ? 'text-white' : ''}`}
        >
          Men Najot Ta`limda Frontend React JS dasturlsh kursini tamomladim va
          sertifikat oldim. Bundan tashqari, men turli musobaqalar, tadbirlarda
          faol qatnashib turaman. Hozirda turli texnologiyalarni loyihalarimda
          qo‘llab o‘rganyapman.
        </p>
        <br />
        <p
          className={` text-[18px] font-normal leading-[26px]
        ${dark ? 'text-white' : ''}`}
        >
          Mening tilni bilish darajam arab tili (Boshlng'ich), va o‘zbek tili
          (ona tili) kiradi. Men sizning jamoangizga samarali hissa qo'shish
          uchun Frontend dasturchisi sifatida bilim va ko'nikmalarimni
          qo'llashga tayyorman.
        </p>
      </div>
      <div className="w-full text-center mt-[30px]">
        <Link
          to="project"
          className={` px-[15px] py-[5px] rounded-[6px] border-[3px] border-solid border-[#78C2AD]   hover:bg-[#78C2AD] hover:text-black transition-all duration-[0.3s] ease-in-out
        ${dark ? 'text-white' : 'hover:text-white'}`}
        >
          Loyihalar
        </Link>
      </div>
    </section>
  );
}

export default About;
