import React from "react";

const LearnUs = () => {
    return (
        <div className="relative sm:pt-20 lg:pt-[116px] pt-8 pb-[29px]">
            <img
                src="./assets/images/webp/digital-bg.webp"
                alt="Background"
                className="absolute top-[40%] max-sm:hidden block w-full"
            />
            <div className="max-md:container max-w-[1322px] !mx-auto">
                <h2 className="lg:text-custom-lg text-6xl font-bold leading-none text-center uppercase sohne-schmal pb-[13px]">
                    Learn from us.
                </h2>
                <p className="text-custom-xs font-normal leading-none text-center sm:pb-9 pb-[33px] mainson-Neue-Mono">
                    Digital marketing resources from Venveo to help you grow.
                </p>
                <a
                    href="#"
                    className="text-xmd font-semibold leading-none text-center flex justify-center lg:pb-16 pb-10 mainson_Neue"
                >
                    See All
                    <img className="ml-2" src="./assets/images/svg/read-arrow.svg" alt="arrow" />
                </a>
                <div className="relative">
                <img
                    src="./assets/images/webp/learn-image.webp"
                    alt="Section Background"
                    className="relative md:block hidden xl:max-w-[1322px]"
                />
                    <img className="relative max-md:block hidden" src="./assets/images/webp/mobile-learn.webp" alt="learn" />

                    <div className="bg-white pt-[35px] pb-[31px] px-7 absolute bottom-[7%] left-[7%] max-md:left-[7%] rounded-[25px] max-lg:pt-[30px] max-lg:pb-[26px] max-lg:px-[26px] max-lg:max-w-[339px] max-sm:max-w-[315px] max-sm:p-4">
                        <p className="text-custom-xs font-semibold leading-none text-left text-sky pb-4 mainson_Neue uppercase">
                            Guides
                        </p>
                        <p className="font-light text-3xl leading-[30px] text-left font-MaisonNeueLight max-w-[310px] max-lg:text-2xl max-lg:max-w-[290px]">
                            Marketing to Contractors and Installers:<span className="xl:block"></span> The Ultimate Guide
                        </p>
                        <p className=" text-custom-xs font-normal leading-none text-left pt-4 mainson-Neue-Mono max-w-[315px]">
                            Understanding the process and maximize the opportunities
                        </p>
                        <a href="#" className="flex items-center pt-4 group font-semibold text-custom-xs">
                            Read More
                            <img className="ml-2 group-hover:ml-5  mt-1 transition-all duration-700 ease-in-out" src="./assets/images/svg/read-arrow.svg" alt="arrow"  />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnUs;
