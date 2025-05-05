// Layout: This is file in which we have creted a shared component across multiple pages

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function MainLayout(){
    return(
        <>
            <Navbar/> {/* This Navbar is the shared UI we want to share across multiple pages*/}
            <Outlet/> {/* The actual page which will be rendered along with the Navbar*/}
        </>
    )
}

export default MainLayout;