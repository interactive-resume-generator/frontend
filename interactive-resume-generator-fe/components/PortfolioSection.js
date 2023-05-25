import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function PortfolioSection({ resources, loading }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // console.log(resources[0]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, [resources]);

  return (
    <>
      {!loading ? (
        <section className="scroll-section-outer">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
              {resources.map((resource, index) => {
                if (resource.education) {
                  return (
                    <div key={index} className="scroll-section">
                      <h3>Education</h3>
                      {resource.education.map((edu, eduIndex) => (
                        <div key={eduIndex}>
                          <p>{edu.degree}</p>
                          <p>{edu.university}</p>
                          <p>{edu.year}</p>
                        </div>
                      ))}
                      <Image
                        className="ground-img"
                        src="/grounds/grassyground_transparent.png"
                        alt="grassy ground"
                        quality={100}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  );
                } else if (resource.experience) {
                  return (
                    <div key={index} className="scroll-section">
                      <h3>Experience</h3>
                      {resource.experience.map((exp, expIndex) => (
                        <div key={expIndex}>
                          <p>{exp.company}</p>
                          <p>{exp.position}</p>
                          <p>{exp.duration}</p>
                        </div>
                      ))}
                      <Image
                        className="ground-img"
                        src="/grounds/grassyground_transparent.png"
                        alt="grassy ground"
                        quality={100}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  );
                } else if (resource.skills) {
                  return (
                    <div key={index} className="scroll-section">
                      <h3>Skills</h3>
                      {resource.skills.map((skill, skillIndex) => (
                        <p key={skillIndex}>{skill}</p>
                      ))}
                      <Image
                        className="ground-img"
                        src="/grounds/grassyground_transparent.png"
                        alt="grassy ground"
                        quality={100}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  );
                }
                return null; // Return null for unrecognized data structure
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="scroll-section-outer">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
              <div className="scroll-section">
                <h3>Loading...</h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
