import React, {useEffect, useRef} from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


const Portfolio = () => {
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

  // Define your portfolio sections and their content
  const sections = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
    // Add more sections as needed
  ];

  return (
      <>

            <div className="scroll-section-outer">
              <ParallaxProvider scrollAxis='horizontal'>
                <div ref={triggerRef}>
                  <div ref={sectionRef} className='scroll-section-inner'>

                    {sections.map((section, index) => (
                      <Parallax y={[-30, 30]} key={index}>
                          <div ref={backgroundRef} style={{
                        backgroundImage: "url('/Forest.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "2000px"
                    }} className='h-screen'>
                            <section className='scroll-section'>
                              <h3>{section.title}</h3>
                              <p>{section.content}</p>
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
};

export default Portfolio;