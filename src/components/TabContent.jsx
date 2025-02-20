import React, { useState, useEffect } from "react";
import { TABS_ITEMS } from "../utils/helper";
const Tab = ({ activeTab }) => {
    switch (activeTab) {
        case "industry":
            return (
                <div style={{ backgroundImage: `url(./assets/images/webp/tab-one-bg.webp)` }} className="relative bg-cover !max-w-[1280px] bg-center sm:px-20 sm:py-16 px-4 py-6 bg-no-repeat">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-4/12">
                            <p className="uppercase text-white text-custom-lg font-sohne leading-[70px] font-bold max-xl:text-6xl max-sm:leading-[52px]">
                                The smartest minds in the industry </p>
                            <p className="text-3xl font-light text-left text-white pb-8 max-sm:pb-4 max-xl:text-2xl font-maisonLight">
                                Answer our questions and listen to our answers.</p>
                            <p className="font-normal text-custom-xs text-left text-white pb-[98px] max-lg:pb-[57px] max-sm:pb-[14px] max-sm:text-custom-xs font-maisonMono">
                                This is placeholder but can add more to the business of building, some epic fails (and how to avoid them), and everything building science.
                            </p>
                            <div className="flex  max-lg:pb-10 max-sm:pb-6 max-sm:w-full hover:scale-105 transition-all duration-700 cursor-pointer">
                                <a href="#" className="bg-red-500 flex items-center justify-center  px-[32px] py-[31px] text-white text-custom-xs pointer-events-none max-sm:w-full max-sm:pl-[57px]"><img className="mr-[10px]" src="./assets/images/svg/subscribe.svg" alt="" />
                                    Subscribe to Podcast <span className="text-custom-xxs ml-1 mt-[5px]"> ▼</span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-2/12 max-lg:overflow-auto">
                            <div className="flex lg:flex-col items-center max-lg:gap-14">
                                <img src="./assets/images/webp/depot.webp" alt="Depot Logo" className="xl:pb-20 pb-10 max-w-[66px] pointer-events-none" />
                                <img src="./assets/images/webp/aia.webp" alt="AIA Logo" className="xl:pb-[62px] pb-9 max-w-[66px] pointer-events-none" />
                                <img src="./assets/images/webp/lowes.webp" alt="Lowes Logo" className="xl:pb-12 pb-10 max-w-[92px] pointer-events-none" />
                                <img src="./assets/images/webp/build.webp" alt="Build Logo" className="xl:pb-[66px] pb-10 max-w-[102px] pointer-events-none" />
                                <img src="./assets/images/webp/houzz.webp" alt="Houzz Logo" className="max-w-[117px] pointer-events-none" />
                            </div>
                        </div>
                        <div className="lg:w-5/12">
                            <img className="pointer-events-none" src="./assets/images/webp/tab-one-card.webp" alt="Tab One Card" />
                        </div>
                    </div>
                </div>
            );
        case "roi":
            return (
                <div style={{ backgroundImage: `url(./assets/images/webp/tab-two-bg.webp)` }} className="relative bg-cover max-sm:!bg-mobile-tab-two bg-no-repeat md:bg-tab-two bg-center pt-20 max-w-[1280px] max-xl:pt-12 max-sm:pt-5 h-[720px]">
                    <h2 className="text-custom-lg max-md:text-6xl font-bold leading-[70px] text-left text-white ps-20 max-sm:ps-8 font-sohne">
                        Proven Results </h2>
                    <p className="text-3xl font-light text-left text-white ps-20 max-sm:text-2xl max-sm:ps-8 font-maisonLight">
                        Not hopes and prayers. </p>
                    <div className="max-w-[293px] absolute bottom-[10%] max-md:hidden block left-[-5%] max-xl:max-w-[206px] max-xl:left-[-1%] max-lg:max-w-[161px]">
                        <img className="pointer-events-none" src="./assets/images/webp/tab-two-yellow-circle.webp" alt="circle" />
                    </div>
                    <div className=" max-w-[189px] max-xl:max-w-[142px] absolute max-md:hidden block  top-[34%] right-[-5%] max-xl:right-[-1%] max-lg:top-[19%]">
                        <img className="pointer-events-none" src="./assets/images/webp/tab-two-green-circle.webp" alt="circle" />
                    </div>
                </div>
            );
        case "proprietary":
            return (
                <div style={{ backgroundImage: `url(./assets/images/webp/tab-three-bg.webp)` }} className="max-w-[1280px] px-[79px] pt-[75px] max-lg:pt-[45px] h-[720px] max-xl:h-[620px] max-lg:h-full max-md:px-[32px]">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-5/12">
                            <h2 className="text-custom-lg max-md:text-5xl leading-[70px] font-sohne font-bold max-xl:text-6xl text-left pb-2 text-white uppercase">
                                Project Radar </h2>
                            <img src="./assets/images/webp/tab-logo.webp" alt="Tab Logo" className=" max-w-[72.86px] pointer-events-none" />
                            <p className="text-3xl font-light text-left text-white leading-8 pt-28 max-xl:pt-16 max-sm:pt-6 pb-[14px] font-maisonLight">
                                Lorem ipsum what this product actually does. </p>
                            <p className="text-white text-custom-xs font-normal leading-5 max-w-[360px] max-xl:max-w-none font-maisonMono">This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <div className="flex mt-16 max-sm:mt-7 max-lg:pb-14 hover:scale-110 transition-all duration-700 cursor-pointer">
                                <a href="#" className="bg-yellow text-custom-xs font-semibold text-center py-8 px-8 max-sm:p-4 flex gap-[10px] pointer-events-none">
                                    Call to Action Somewhere<img src="./assets/images/svg/call-arrow.svg" alt="arrow" /></a>
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full">
                            <img className="w-full pointer-events-none pb-8" src="./assets/images/webp/tab-three-card.webp" alt="Tab Three Map" />
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};
const TabContent = () => {
    const [activeTab, setActiveTab] = useState(() => {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams.get("tab") || "industry";
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set("tab", activeTab);
        window.history.replaceState(null, "", `?${queryParams.toString()}`);
    }, [activeTab]);

    return (
        <section className="pb-14 pt-[113px] max-sm:pt-[64px] max-sm:pb-6 flex justify-center">
            <div className="container max-w-[1280px] mx-auto">
                <h2 className="text-custom-lg font-bold text-center uppercase font-sohne leading-[70px] max-sm:text-6xl">The Growth Partner</h2>
                <p className="text-3xl font-light text-center pb-[43px] max-sm:pb-[19px] max-sm:text-2xl font-maisonLight">you’ve been looking for.</p>
                <p className="text-custom-xs font-normal text-center pb-[105px] max-xl:pb-20  max-sm:pb-[56px] font-maisonMono">Businesses trust Venveo to power growth.</p>
                <div className="nav-tabs">
                    <div className="flex justify-center gap-20 max-sm:gap-10 pb-[43px] tab-list max-sm:overflow-auto">
                        {TABS_ITEMS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab text-lg text-light-black font-semibold whitespace-nowrap relative ${activeTab === tab.id ? "!text-black opacity-100" : ""
                                    }`}
                                onClick={() => setActiveTab(tab.id)}>
                                {tab.label}
                                {activeTab === tab.id && (
                                    <img
                                        className="absolute top-full max-w-[155.12px] left-1/2 transform -translate-x-1/2"
                                        alt="active-line"
                                        src="./assets/images/svg/tab-active-line.svg" />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        <Tab activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TabContent;