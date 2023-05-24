import React, {useEffect, useRef} from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const PortfolioSection = ({backgroundRef,
                              sectionRef,
                              triggerRef,
                              education,
                              experience,
                              skills}) => {
    const renderEducationContent = () => {
        return education.map((edu, index) => (
          <div key={index}>
            <h4>Degree: {edu.degree}</h4>
            <p>University: {edu.university}</p>
            <p>Year: {edu.year}</p>
          </div>
        ));
    };

    const renderExperienceContent = () => {
        return experience.map((exp, index) => (
          <div key={index}>
            <h4>Company: {exp.company}</h4>
            <p>Position: {exp.position}</p>
            <p>Duration: {exp.duration}</p>
          </div>
        ));
    };

    const renderSkillsContent = () => {
        return skills.map((skill, index) => (
          <div key={index}>
            <h4>Skill: {skill}</h4>
          </div>
        ));
    };

    const sections = [
        {title: 'Education', content: renderEducationContent()},
        {title: 'Experience', content: renderExperienceContent()},
        {title: 'Skills', content: renderSkillsContent()},
    ];

    return (
    <>
      <div className="scroll-section-outer">
        <ParallaxProvider scrollAxis="horizontal">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
              {sections.map((section, index) => (
                <Parallax y={[-30, 30]} key={index}>
                  <div
                    ref={backgroundRef}
                    style={{
                      backgroundImage: "url('/Forest.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "2000px",
                    }}
                    className="h-screen"
                  >
                    <section className="scroll-section">
                      <h3>{section.title}</h3>
                      <div>{section.content}</div>
                    </section>
                  </div>
                </Parallax>
              ))}
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </>
    );

}
const Portfolio = ({ education, experience, skills }) => {
    const backgroundRef = useRef(null)
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            // increase and decrease based on section
            translateX: "-300vw",
            ease: "none",
            direction: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                // 2000 px at the top of the next section
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        // kills animation when the component gets unordered
        return () => {
            pin.kill()
        }
    }, {})


  return (
      <PortfolioSection
          backgroundRef={backgroundRef}
          sectionRef={sectionRef}
          triggerRef={triggerRef}
          education={education}
          experience={experience}
          skills={skills}
      />
  );
};

export default Portfolio;