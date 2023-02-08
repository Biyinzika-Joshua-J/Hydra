import React from "react";
import {Hero, IconsInfo, Intro, About, WhyBuild, CardSlider} from "../components/";


const Home =() =>{
    return (
        <>
            <div style={{marginTop:'200px'}}>
                <Hero/>
                <IconsInfo/>
                <Intro/>
                <About/>
                <WhyBuild/>
                <CardSlider/>
            </div>
        </>
    )
}

export default Home;