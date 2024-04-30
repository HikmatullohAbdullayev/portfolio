import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";



function Layout() {
    const {dark} = useContext(ThemeContext)
    return (
        <div className="wrapper">
            <div className={`  ${dark ? "bg-[#1E1E2E]" : "bg-[#FDEBF3]"}`}>
            <div className="container">
            <Header/>
            <main>
            <Outlet/>
            </main>
            </div>
            </div> 
            <footer className={` ${dark ? "bg-[#1E1E2E]" : "bg-[#FDEBF3]"}`}>

            <Footer/>           
            </footer>
        </div>
    );
}

export default Layout;