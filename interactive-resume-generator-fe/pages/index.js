import React from 'react'
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import ResumeForm from "@/components/ResumeForm";

function Home() {
    return (
        <>
        <ResumeForm/>
        <Hero/>
        {/*<ScrollSection/>*/}
        <Portfolio/>
        <Footer/>
        </>
            )
}

export default Home