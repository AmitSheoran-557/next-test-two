"use client"
import React, { useEffect, useState } from 'react';  
import { gsap } from 'gsap';  

const Page = () => {  
    const HERO_DATA_LIST = [  
        {  
            count: "01",  
            title: "AI Chatbots don’t create enterprise-grade apps",  
            description: "Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",  
            image: "/assets/images/png/slider-img-1.png"  
        },  
        {  
            count: "02",  
            title: "Modernization Doesn’t Have to Mean Failure",  
            description: "Traditional app modernization often falls short because teams are forced to navigate poorly documented legacy code — an outdated maze that slows progress and drives up costs. It’s time to change the narrative.",  
            descriptionTwo: "The execution can neither compromise on business and technical requirements nor lose sight of modern architecture and security.",  
            image: "/assets/images/png/slider-img-2.png"  
        },  
        {  
            count: "03",  
            title: "Protected from Legal Risks and IP Liability",  
            description: "AdaptsAI ensures IP protection by generating custom, original code with no direct replication of copyrighted material. Our LLM engine delivers unique, optimized solutions while maintaining high quality. Users can trust their codebases are free from IP risks, enabling secure, responsible AI innovation.",  
            image: "/assets/images/png/slider-img-3.png"  
        },  
        {  
            count: "04",  
            title: "AI Generated Apps Need Maintenance Too!",  
            description: "Business applications demand ongoing maintenance to address new vulnerabilities, ensure reliability, and deliver updates or bug fixes.",  
            descriptionTwo: "With AdaptsAI’s advanced context awareness, maintenance becomes effortless—minimizing code ramp-up time, streamlining troubleshooting, and simplifying enhancements for maximum efficiency.",  
            image: "/assets/images/png/slider-img-4.png"  
        }  
    ];  

    const [currentIndex, setCurrentIndex] = useState(0);  
    const totalSlides = HERO_DATA_LIST.length;  

    const handleNext = () => {  
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);  
    };  

    const handlePrev = () => {  
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);  
    };  

    useEffect(() => {  
        const interval = setInterval(() => {  
            handleNext();  
        }, 5000); // Change slide every 5 seconds  
        return () => clearInterval(interval);  
    }, []);  

    return (  
        <div className='bg-hero-bg bg-cover min-h-screen pt-[156px] pb-28 '>  
            <div className="container mx-auto px-4">  
                <h1 className='font-medium lg:text-5xl text-4xl text-center max-w-[830px] w-full text-white !leading-[120%] lg:mb-[60px] md:mb-10 mb-7 mx-auto'>Transforming Secure, Modern <span className='text-gradient'>Development</span> with AdaptsAI</h1>  
                <div className="relative">  
                    <div className="slider-content flex transition-transform" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${totalSlides * 100}%` }}>  
                        {HERO_DATA_LIST.map((item, index) => (  
                            <div key={index} className="flex-shrink-0 w-full">  
                                <div className="flex flex-wrap w-full">  
                                    <div className="lg:w-6/12 w-full">  
                                        <h4 className='font-medium lg:text-3xl text-2xl text-white !leading-[120%] mb-4'>{item.count}</h4>  
                                        <h3 className='font-medium lg:text-3xl text-2xl text-white !leading-[120%] mb-4'>{item.title}</h3>  
                                        <p className='font-medium lg:text-2xl text-xl text-white !leading-[120%] mb-4'>{item.description}</p>  
                                        {item.descriptionTwo && (  
                                            <p className='font-medium lg:text-2xl text-xl text-white !leading-[120%] mb-4'>{item.descriptionTwo}</p>  
                                        )}  
                                    </div>  
                                    <div className="lg:w-6/12 w-full">  
                                        <img className='max-w-[614px] w-full' src={item.image} alt="image" />  
                                    </div>  
                                </div>  
                            </div>  
                        ))}  
                    </div>  

                    {/* Navigation Buttons */}  
                    <button  
                        onClick={handlePrev}  
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center z-10"  
                    >  
                        ❮  
                    </button>  
                    <button  
                        onClick={handleNext}  
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center z-10"  
                    >  
                        ❯  
                    </button>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Page;