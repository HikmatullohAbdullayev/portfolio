import { LazyLoadImage } from "react-lazy-load-image-component";
import laptop from "../assets/img/laptop.webp";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ProjectIntro() {
  const { dark } = useContext(ThemeContext);
  return (
    <div>
      <div className=" w-[300px] mx-auto ">
        <LazyLoadImage
          width="full"
          height={300}
          alt="space img"
          src={laptop}
          effect="Opacity"
        />
      </div>
      <h2
        className={`text-[30px] border-b-[4px] border-solid border-[#375A7F]  font-[Pacifico] font-normal  mobile420:text-[26px] inline-block mt-[50px] mb-[10px] 
                 ${dark ? "text-white" : ""}  `}
      >
        {" "}
        Prijects{" "}
      </h2>
      <div className="grid grid-cols-2 gap-4 ">
        {projectData.map((project) => (
          <div key={project.name} className="p-[10px] shadow-sm rounded-2xl hover:shadow py-[10px] px-16px border " >
            <div className="">
              <img src="" alt="" />
            </div>
            <h2
              className={` text-[18px] font-normal leading-[26px]
        ${dark ? "text-white" : ""}`}
            >
              {project.name}
            </h2>
            <div className="flex justify-around items-center py-[6px] bg-slate-200 rounded-md">
              <Link className="text-red-500 " to={project.website}> Web sayt</Link>
              <Link className="text-yellow-500" to={project.github}>Git hub</Link>
            </div>
            <p
              className={` text-[18px] font-normal leading-[26px]
        ${dark ? "text-white" : ""}`}
            >
              {project.stack1}
            </p>
            <p
              className={` text-[18px] font-normal leading-[26px]
        ${dark ? "text-white" : ""}`}
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
