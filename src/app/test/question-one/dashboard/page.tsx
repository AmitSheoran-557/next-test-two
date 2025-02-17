"use client";  
import Image from "next/image";  
import React, { useEffect } from "react";  
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  
gsap.registerPlugin(ScrollTrigger);  

const Slider = () => {  
    useEffect(() => {  
        const slider = gsap.timeline({  
            scrollTrigger: {  
                trigger: ".slider-section",  
                start: "top top",  
                end: "200%",  
                scrub: 1,  
                pin: true,  
                onUpdate: (self) => {  
                    const progress = self.progress * 3;  
                    gsap.to(".progress-bar", { width: `${Math.min(progress * 100, 100)}%` });  

                    gsap.to(".progress-marker", {  
                        scale: 0.5,  
                        opacity: 0,  
                        overwrite: true  
                    });  

                    const activeIndex = Math.floor(progress * 4);  
                    gsap.to(`.progress-marker[data-index="${activeIndex + 1}"]`, {  
                        scale: 1,  
                        opacity: 1  
                    });  
                }  
            },  
        });  

        slider.fromTo(  
            ".slider-item", { x: "0%", }, { x: "-75%", }, "+=0.5"  
        );  
    }, []);  

    return (  
        <div className="bg-hero-bg slider-section min-h-screen overflow-hidden mx-auto flex justify-center items-center">  
            <div className="flex flex-col justify-center items-center">  
                <h2 className="font-medium text-5xl !leading-[120%] text-white text-center max-w-[830px] mx-auto">  
                    Transforming Secure, Modern <span className="text-gradient">Development</span> with AdaptsAI  
                </h2>  
                <div className="overflow-hidden pt-[60px] max-w-[1440px]">  
                    <div className="flex w-max slider-item left-0 ">  
                        {/* Slider item 1 */}  
                        <div className="xl:min-w-[1440px] w-full">  
                            <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>  
                                <div className="flex flex-col max-w-[461px]">  
                                    <Image src="/assets/images/webp/slider-count-1.webp" alt="slider-img-1" width={297} height={182} />  
                                    <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">  
                                        AI Chatbots don’t create enterprise-grade <span className="text-gradient">apps</span>  
                                    </h4>  
                                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">  
                                        Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.  
                                    </p>  
                                </div>  
                                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-1.png" alt="slider-img-1" width={614} height={417} />  
                            </div>  
                        </div>  
                        {/* Slider item 2 */}  
                        <div className="xl:min-w-[1440px] w-full">  
                            <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>  
                                <div className="flex flex-col max-w-[461px]">  
                                    <Image src="/assets/images/webp/slider-count-2.webp" alt="slider-img-2" width={297} height={182} />  
                                    <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">  
                                        Modernization Doesn’t Have to Mean Failure  
                                    </h4>  
                                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">  
                                        Traditional app modernization often falls short because teams are forced to navigate poorly documented legacy code—a maze that slows progress and drives up costs.  
                                        It’s time to change the narrative. <br /> <br /> The execution can neither compromise on business and technical requirements nor lose sight of modern architecture and security.  
                                    </p>  
                                </div>  
                                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-2.png" alt="slider-img-2" width={614} height={417} />  
                            </div>  
                        </div>  
                        {/* Slider item 3 */}  
                        <div className="xl:min-w-[1440px] w-full">  
                            <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>  
                                <div className="flex flex-col max-w-[461px]">  
                                    <Image src="/assets/images/webp/slider-count-3.webp" alt="slider-img-3" width={297} height={182} />  
                                    <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">  
                                        Protected from Legal Risks and IP liability  
                                    </h4>  
                                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">  
                                        AdaptsAI ensures IP protection by generating custom, original code with no direct replication of copyrighted material. Our LLM engine delivers unique, optimized solutions while maintaining high quality. Users can trust their codebases are free from IP risks, enabling secure, responsible AI innovation.  
                                    </p>  
                                </div>  
                                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-3.png" alt="slider-img-3" width={614} height={417} />  
                            </div>  
                        </div>  
                        {/* Slider item 4 */}  
                        <div className="xl:min-w-[1440px] w-full">  
                            <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>  
                                <div className="flex flex-col max-w-[461px]">  
                                    <Image src="/assets/images/webp/slider-count-4.webp" alt="slider-img-4" width={297} height={182} />  
                                    <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">  
                                        AI generated apps need maintenance too!  
                                    </h4>  
                                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">  
                                        Business applications demand ongoing maintenance to address new vulnerabilities, ensure reliability, and deliver updates or bug fixes. <br /> <br /> With AdaptsAI's advanced context awareness, maintenance becomes effortless—minimizing code ramp-up time, streamlining troubleshooting, and simplifying enhancements for maximum efficiency.  
                                    </p>  
                                </div>  
                                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-4.png" alt="slider-img-4" width={614} height={417} />  
                            </div>  
                        </div>  
                    </div>  
                </div>  

                {/* Progress Bar */}  
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">  
                    <div className="relative w-[300px] h-1 bg-white bg-opacity-20 rounded-full">  
                        <div className="absolute h-full bg-gradient-to-r from-[#FFB800] to-[#FF8A00] rounded-full progress-bar"   
                             style={{ width: "0%" }}></div>  
                        
                        {/* Progress markers */}  
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-3 w-full flex justify-between">  
                            {[1, 2, 3, 4].map((item) => (  
                                <div key={item} className="relative progress-marker" data-index={item}>  
                                    <div className="w-6 h-6 bg-[#FFB800] rounded-full flex items-center justify-center   
                                                  transition-all duration-300 scale-50 opacity-0">  
                                        <Image   
                                            src={`/assets/images/webp/slider-count-${item}.webp`}   
                                            alt={`step-${item}`}  
                                            width={16}  
                                            height={16}  
                                        />  
                                    </div>  
                                </div>  
                            ))}  
                        </div>  
                    </div>  
                </div>  

            </div>  
        </div>  
    );  
};  

export default Slider;