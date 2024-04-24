import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Layout() {
    return (
        <div className="wrapper">
            <div className="box">
            <div className="container">
            <Header/>
            <Outlet/>
            </div>
            </div> 
            <Footer/>           
        </div>
    );
}

export default Layout;