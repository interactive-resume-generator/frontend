import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/helpers/isomorphicEffect";

export default function PortfolioSection({ resource, loading }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const boxRef = useRef();
  const eduRef = useRef();
  const expRef = useRef();
  const skillRef = useRef();

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
          scrub: true,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".edu-box");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: eduRef.current.offsetLeft, y: eduRef.current.offsetTop },
          {
            x: -300,
            y: -100,
            scrollTrigger: {
              trigger: box,
              start: `${eduRef.current.offsetTop - 600} bottom`,
              scrub: 1,
            },
          }
        );
      });
    }, eduRef);
    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".exp-box");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: expRef.current.offsetLeft, y: expRef.current.offsetTop },
          {
            x: -40,
            y: -100,
            scrollTrigger: {
              trigger: box,
              start: `${expRef.current.offsetTop} 80%`,
              scrub: 4,
            },
          }
        );
      });
    }, expRef);
    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".skill-box");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            x: 400,
            y: 400,
          },
          {
            x: 0,
            y: -40,
            scrollTrigger: {
              trigger: box,
              start: `${skillRef.current.offsetTop} 40%`,
              scrub: 4,
              // markers: true,
            },
          }
        );
      });
    }, skillRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {!loading && resource ? (
        <section className="scroll-section-outer">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
              <div key={0} className="scroll-section" ref={eduRef}>
                <h3>Education</h3>
                {resource.education.map((edu, index) => {
                  return (
                    <div key={index} className="box edu-box" ref={boxRef}>
                      <p>{edu.degree}</p>
                      <p>{edu.university}</p>
                      <p>{edu.year}</p>
                    </div>
                  );
                })}
                <Image
                  className="ground-img"
                  src="/grounds/grassyground_transparency.png"
                  alt="grassy ground"
                  quality={100}
                  width={1000}
                  height={1000}
                />
              </div>

              <div key={1} className="scroll-section" ref={expRef}>
                <h3>Experience</h3>
                {resource.experience.map((exp, index) => {
                  return (
                    <div key={index} className="box exp-box" ref={boxRef}>
                      <p>{exp.company}</p>
                      <p>{exp.position}</p>
                      <p>{exp.duration}</p>
                    </div>
                  );
                })}
                <Image
                  className="ground-img"
                  src="/grounds/grassyground_transparency.png"
                  alt="grassy ground"
                  quality={100}
                  width={1000}
                  height={1000}
                />
              </div>

              <div key={1} className="scroll-section" ref={skillRef}>
                <h3>Experience</h3>
                {resource.skills.map((skill, index) => {
                  return (
                    <div key={index} className="box skill-box" ref={boxRef}>
                      <p>{skill}</p>
                    </div>
                  );
                })}
                <Image
                  className="ground-img"
                  src="/grounds/grassyground_transparency.png"
                  alt="grassy ground"
                  quality={100}
                  width={1000}
                  height={1000}
                />
              </div>
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
