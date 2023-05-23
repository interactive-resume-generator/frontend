// import React, {useRef, useEffect} from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//
// export default function ScrollSection() {
//     const sectionRef = useRef(null)
//     const triggerRef = useRef(null)
//
//     gsap.registerPlugin(ScrollTrigger)
//
//     useEffect(() => {
//         const pin = gsap.fromTo(sectionRef.current, {
//             translateX: 0
//         }, {
//             // increase and decrease based on section
//             translateX: "-300vw",
//             ease: "none",
//             direction: 1,
//             scrollTrigger: {
//                 trigger: triggerRef.current,
//                 start: "top top",
//                 // 2000 px at the top of the next section
//                 end: "2000 top",
//                 scrub: 0.6,
//                 pin: true
//             }
//         })
//
//         // kills animation when the component gets unordered
//         return () => {
//             pin.kill()
//         }
//     }, [])
//
//     const images = [
//         '/Scene.png',
//         '/Train.png'
//     ];
//
//     return (
//         <>
//             <section className='scroll-section-outer'>
//                 <div ref={triggerRef}>
//                     <div ref={sectionRef} className='scroll-section-inner'>
//                         {images.map((image, index)=>(
//                             <>
//                                 <div
//                                 key={index}
//                                 className='scroll-section'
//                                 style={{
//                                     backgroundImage: `${image}`,
//                                 }}>
//
//                                 </div>
//                             </>
//                         ))}
//                         <div className='scroll-section'>
//                             <h3>Section 1</h3>
//                         </div>
//                         <div className='scroll-section'>
//                             <h3>Section 2</h3>
//                         </div>
//                         <div className='scroll-section'>
//                             <h3>Section 3</h3>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }