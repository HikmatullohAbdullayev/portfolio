import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Language() {
  const { dark } = useContext(ThemeContext);
  return (
    <section>
      <h2 className={`text-[30px] border-b-[4px] border-solid border-[#375A7F]  font-[Pacifico] font-normal  mobile420:text-[26px] inline-block mt-[50px] mb-[10px] 
                 ${dark ? "text-white" : ""}  `} > Tillar </h2>
      <div className="text mt-[10px]">
        <p className={` text-[20px]  ${dark ? "text-white" : ""}  `}>
          <strong className="text-[24px] ">Arab tili:</strong> Boshlang`ich
        </p>
      </div>
    </section>
  );
}

export default Language;
