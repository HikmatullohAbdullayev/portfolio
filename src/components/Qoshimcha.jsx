
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Qoshimcha() {
    const { dark } = useContext(ThemeContext);
    return (
        <section>
                <h2
          className={`text-[30px] border-b-[4px] border-solid border-[#375A7F]  font-[Pacifico] font-normal  mobile420:text-[26px] inline-block mt-[50px] mb-[30px] 

                 ${dark ? "text-white" : ""}  `}
        >
          Texnologiyalar
        </h2>
            <div className="text">
                <h3>Tillar</h3>
               <p> <strong>O`zbek tili:</strong> Mahalliy</p>
               <p> <b>Arab tili:</b> Boshlang`ich</p>
            </div>
            
        </section>
    );
}

export default Qoshimcha;