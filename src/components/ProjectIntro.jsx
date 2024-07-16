


import { LazyLoadImage } from 'react-lazy-load-image-component';
import laptop from '../assets/img/laptop.webp';
import { projectData } from '../data/projectData';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


function ProjectIntro() {
  const { dark } = useContext(ThemeContext);

  return (
    <div>
      <div className="w-[300px] mx-auto">
        <LazyLoadImage
          width="full"
          height={300}
          alt="laptop image"
          src={laptop}
          effect="opacity"
        />
      </div>
      <h2
        className={`text-[30px] border-b-[4px] border-solid border-[#375A7F] font-[Pacifico] font-normal mobile420:text-[26px] inline-block mt-[50px] mb-[10px] ${
          dark ? 'text-white' : ''
        }`}
      >
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projectData.map((project) => (
          <div
            key={project.name}
            className={`p-[10px] shadow-sm rounded-2xl  hover:shadow py-[10px] px-16px border ${
              dark ? 'bg-white' : 'bg-slate-100'
            }`}
          >
           <div className="max-w-[200px] w-full mx-auto p-3 my-2 bg-white sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
  <img
    className="w-full h-auto object-cover rounded-lg shadow-lg"
    src={project.img}
    alt={project.name}
  />
</div>

            <h2
              className={` text-[18px] font-normal leading-[26px]
        ${dark ? 'text-black' : 'text-black'}`}
            >
              {project.name}
            </h2>
            <div className="flex justify-around items-center py-[6px] bg-slate-200 rounded-md">
              <Link  target='blank' className="text-red-500" to={project.website}>
                Web sayt
              </Link>
              <Link target='blank' className="text-yellow-500" to={project.github}>
                GitHub
              </Link>
            </div>
            <p
              className={`text-[18px] font-normal leading-[26px] ${
                dark ? 'text-black' : ''
              }`}
            >
              {project.stack1}
            </p>
            <p
              className={`text-[18px] font-normal leading-[26px] ${
                dark ? 'text-black' : ''
              }`}
            >
              {project.style1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectIntro;
