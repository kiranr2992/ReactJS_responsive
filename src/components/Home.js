import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./Navigation/Navigationbar";
import Search from "./Search/Search";
import Job from "./Job.js";
import Footer from "./Footer.js";


function Home(){

    return(
        <>
            <Navigationbar/>
            <Search/>
            <Job/>
            <Footer/>
        </>
    )
}

export default Home;