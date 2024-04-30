
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { imgData } from "../data/imgData";
import { Fragment } from "react";

function Skills() {
    const { dark } = useContext(ThemeContext);
    return (
        <section>
             <h2
          className={`text-[30px] border-b-[4px] border-solid border-[#375A7F]  font-[Pacifico] font-normal  mobile420:text-[26px] inline-block mt-[50px] mb-[30px] 

                 ${dark ? "text-white" : ""}  `}
        >
          Texnologiyalar
        </h2>
            <div className="img_block grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))]  gap-[15px] pt-[50px]">
                {
                    imgData.map((item) =>{
                        return (
                          <Fragment key={item.alt} >
                            <div  className="w-[50px] h-[50px] ">
                              <img
                                className="w-full"
                                src={item.src}
                                alt={item.alt}
                              />
                            </div>
                          </Fragment>
                        );
                    })
                }
               
            </div>
            
        </section>
    );
}

export default Skills;