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
        start: "10% top",
        end: "200%",
        scrub: 1,
        pin: true,
        onUpdate: ({ progress }) => {
          gsap.to(".progress-line", { width: `${progress * 100}%` });
        },
      },
    });
    slider.fromTo(
      ".slider-item", { x: "0%", }, { x: "-75%", }, "+=0.5"
    );
  }, []);
  return (
    <div className="bg-hero-bg slider-section pt-[156px] overflow-hidden mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-medium lg:text-5xl text-4xl mb-[60px] !leading-[120%] text-white text-center max-w-[830px] mx-auto">Transforming Secure, Modern <span className="text-gradient">Development</span> with AdaptsAI</h2>
        <div className="w-full max-w-[1140px] justify-between flex mx-auto">
          <Image className="max-w-[58px] w-full" src="/assets/images/png/progress-bar-icon-1.png" alt="icon-1" width={58} height={58} />
          <Image className="max-w-[58px] w-full" src="/assets/images/png/progress-bar-icon-2.png" alt="icon-2" width={58} height={58} />
          <Image className="max-w-[58px] w-full" src="/assets/images/png/progress-bar-icon-3.png" alt="icon-3" width={58} height={58} />
          <Image className="max-w-[58px] w-full" src="/assets/images/png/progress-bar-icon-4.png" alt="icon-4" width={58} height={58} />
        </div>
        <div className="bg-gray-200 w-full h-1 mt-2 absolute top-64 left-0">
          <div className="progress-line bg-gradient-to-r from-blue-500 to-pink-500 h-1 z-10"></div>
        </div>
        <div className="overflow-hidden pt-[140px] max-w-[1440px]">
          <div className="flex w-max slider-item left-0 ">
            <div className="xl:min-w-[1440px] w-full">
              <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>
                <div className="flex flex-col max-w-[461px]">
                  <Image src="/assets/images/webp/slider-count-1.webp" alt="slider-img-1" width={297} height={182} />
                  <h4 className="font-bold leading-[39px] lg:text-[32px] text-2xl text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    AI Chatbots don’t create enterprse-grade <span className="text-gradient">apps</span>
                  </h4>
                  <p className="font-poppins text-light-white max-sm:text-sm leading-[25px] max-sm:leading-5 mt-4"> Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.</p>
                </div>
                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-1.png" alt="slider-img-1" width={614} height={417} />
              </div>
            </div>
            <div className="xl:min-w-[1440px] w-full">
              <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>
                <div className="flex flex-col max-w-[461px]">
                  <Image src="/assets/images/webp/slider-count-2.webp" alt="slider-img-1" width={297} height={182} />
                  <h4 className="font-bold leading-[39px] lg:text-[32px] text-2xl text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl"> Modernization Doesn’t Have to Mean Failure</h4>
                  <p className="font-poppins text-light-white max-sm:text-sm leading-[25px] max-sm:leading-5 mt-4">
                    Traditional app modernization often falls short because teams are forced to navigate poorly documented legacy code — an outdated maze that slows progress and drives up costs.
                    It’s time to change the narrative. <br /> <br /> The execution can neither compromise on business and technical requirements nor lose sight of modern architecture and security.
                  </p>
                </div>
                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-2.png" alt="slider" width={614} height={417} />
              </div>
            </div>
            <div className="xl:min-w-[1440px] w-full">
              <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>
                <div className="flex flex-col max-w-[461px]">
                  <Image src="/assets/images/webp/slider-count-3.webp" alt="slider-img-1" width={297} height={182} />
                  <h4 className="font-bold leading-[39px] lg:text-[32px] text-2xl text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl"> Protected from Legal Risks and IP liability
                  </h4>
                  <p className="font-poppins text-light-white max-sm:text-sm leading-[25px] max-sm:leading-5 mt-4">
                    AdaptsAI ensures IP protection by generating custom, original code with no direct replication of copyrighted material. Our LLM engine delivers unique, optimized solutions while maintaining high quality. Users can trust
                    their codebases are free from IP risks, enabling secure, responsible AI innovation.
                  </p>
                </div>
                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-3.png" alt="slider" width={614} height={417} />
              </div>
            </div>
            <div className="xl:min-w-[1440px] w-full">
              <div className={`flex max-lg:flex-col gap-[65px] items-center container max-w-[1140px] mx-auto`}>
                <div className="flex flex-col max-w-[461px]">
                  <Image src="/assets/images/webp/slider-count-4.webp" alt="slider-img-1" width={297} height={182} />
                  <h4 className="font-bold leading-[39px] lg:text-[32px] text-2xl text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl"> AI generated apps need maintenance too!</h4>
                  <p className="font-poppins text-light-white max-sm:text-sm leading-[25px] max-sm:leading-5 mt-4">
                    Business applications demand ongoing maintenance to address new vulnerabilities, ensure reliability, and deliver updates or bug fixes. <br /> <br />  With AdaptsAI's advanced context awareness, maintenance becomes effortless—minimizing code ramp-up time, streamlining troubleshooting, and simplifying enhancements for maximum efficiency.
                  </p>
                </div>
                <Image className="max-w-[614px] w-full" src="/assets/images/png/slider-img-4.png" alt="slider" width={614} height={417} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;