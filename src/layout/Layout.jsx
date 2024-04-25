import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";



function Layout() {
    const {dark} = useContext(ThemeContext)
    return (
        <div className={`wrapper  ${dark ? "bg-[#1E1E2E]" : "bg-white"}`}>
            <div className="box">
            <div className="container">
            <Header/>
            <main>
            <Outlet/>
            </main>
            </div>
            </div> 
            <Footer/>           
        </div>
    );
}

export default Layout;