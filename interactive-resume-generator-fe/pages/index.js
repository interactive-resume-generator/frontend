import React, { useState } from 'react'
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Nav from "@/components/Nav";


function Home() {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    return (
        <>
        <Nav
            setEducation={setEducation}
            setExperience={setExperience}
            setSkills={setSkills}
        />
        <Hero/>
        <Portfolio
            education={education}
            experience={experience}
            skills={skills}
        />
        <Footer/>
        </>
            )
}

export default Home
