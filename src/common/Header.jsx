import React, { useState } from "react";
import navLogo from "../assets/png/logo.png";
import rightArrow from "../assets/svg/right-arrow.svg";
import Search from "../assets/svg/search.svg"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = (event) => {
        const dropdown = event.currentTarget.nextElementSibling;
        dropdown.classList.toggle("hidden");
    };

    return (
        <header>
            <nav className="h-[80px] 2xl:container">
                <div className="flex justify-between items-center max-lg:px-4 md:pl-14  lg:-mt-5">
                    <img
                        src={navLogo}
                        alt="venveo-logo-img"
                        className="w-[59px] h-[90px] mt-7"
                    />
                    <button
                        className="flex flex-col gap-3 cursor-pointer lg:hidden relative z-20 transition-all max-lg:pt-6 duration-700 ease-in-out"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={`w-9 h-1 rounded-full bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                       
                        <span
                            className={`w-9 h-1 rounded-full bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"
                            } absolute top-0 left-0 w-full bg-white max-lg:bg-blue transition-all duration-700 ease-in-out lg:flex  max-lg:fixed lg:static lg:w-auto  items-center max-lg:min-h-screen  z-10 lg:pl-10`}
                    >
                        <div className="flex flex-col lg:flex-row gap-[42px] py-6 md:py-0 pl-6 md:pl-0 items-center max-lg:justify-center max-lg:min-h-screen">
                            {[
                                {
                                    title: "How We Help",
                                    links: [
                                        "Drive More Awareness",
                                        "Get More Customers",
                                        "Build Your Brand",
                                    ],
                                },
                                {
                                    title: "Who We Help",
                                    links: [
                                        "B2B",
                                        "Dealers & Distributors",
                                        "Manufacturing & Industrial",
                                    ],
                                },
                                {
                                    title: "Why Venveo",
                                    links: ["Who We Are", "Results", "Our Approach"],
                                },
                                {
                                    title: "Resources",
                                    links: ["Blog", "Case Studies", "Webinars"],
                                },
                            ].map((menu, index) => (
                                <div key={index} className="relative dropdown">
                                    <a
                                        href="#"
                                        className="text-sm font-medium lg:text-black text-white hover:text-yellow-500"
                                        onClick={toggleDropdown}
                                    >
                                        {menu.title} <span>▼</span>
                                    </a>
                                    <div className="absolute hidden dropdown-content bg-white shadow-lg py-4 px-6 mt-2 z-10">
                                        {menu.links.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className="block text-sm text-black  hover:text-yellow mb-2"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <img src={Search} alt="search" className="lg:fill-black fill-white" />
                            <div className=" bg-yellow flex lg:py-8 lg:px-[31px] py-3 px-6 h-[81px]">
                                <a
                                    href="#"
                                    className="text-custom-xs font-medium leading-normal flex items-center justify-center">
                                    Let’s Talk <span><img className="lg:mt-2 ml-1" src={rightArrow} alt="arrow" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

