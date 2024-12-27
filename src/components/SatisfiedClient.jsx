import React from 'react';
// Import background images for the cards
import greenCard from '../assets/png/green-card.png';
import lightGreenCard from '../assets/png/light-green-card.png';
import yellowCard from '../assets/png/yellow-card.png';

const SatisfiedClient = () => {
    return (
        <div>
            <section className="py-8">
                <div className="container max-w-[1440px] mx-auto">
                    <h2 className="text_lg font-light text-center leading-8 sm:pt-24 pt-0 mainson_Neue">
                        Driving digital revenue for over
                    </h2>
                    <h2 className="text_2xl text-center sm:pb-20 pb-4 leading-[70px] font-bold pt-2 sohne_schmal uppercase">
                        1,400+ satisfied clients.
                    </h2>

                    <div className="slick-slider flex">
                        {/* Card 1 */}
                        <div
                            className="bg-center bg-no-repeat bg-cover max-w-[440px] px-7 min-h-[500px] h-full relative"
                            style={{ backgroundImage: `url(${greenCard})` }}
                        >
                            <button className="text_xsm font-semibold text-white bg-black rounded-[1000px] px-3 py-2 absolute top-[3%] left-[13%] leading-5 mainson_Neue">
                                Education Company
                            </button>
                            <div className="white-box mt-[35px]">
                                <p className="max-w-80 text_lg py-6 font-light mainson_Neue">
                                    Driving digital revenue for over 1,000+ satisfied clients.
                                </p>
                                <p className="text_xmd max-w-[315px] leading-5 font-normal mainson_Neue">
                                    Elevate your business with our top-tier services and tech.
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center sm:pt-14 pt-6 font-semibold text_xmd mainson_Neue"
                                >
                                    Learn More
                                    <svg
                                        className="ml-2"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex gap-9 pt-3 pb-8 pl-4">
                                <div>
                                    <p className="text-black leading-10 text_xl font-bold sohne_schmal">80%</p>
                                    <p className="text-black leading-4 text_xmd font-light mainson_Neue">Leads</p>
                                </div>
                                <div>
                                    <p className="text-black leading-10 text_xl font-bold sohne_schmal">2X</p>
                                    <p className="text-black leading-4 text_xmd font-light mainson_Neue">Ad Leads</p>
                                </div>
                                <div>
                                    <p className="text-black leading-10 text_xl font-bold sohne_schmal">520%</p>
                                    <p className="text-black leading-4 text_xmd font-light mainson_Neue">Web Traffic</p>
                                </div>
                            </div>
                        </div>

                        {/* Repeat for lightGreenCard and yellowCard */}
                        {/* Card 2 */}
                        <div
                            className="bg-center bg-no-repeat bg-cover max-w-[440px] px-7 min-h-[500px] h-full relative"
                            style={{ backgroundImage: `url(${lightGreenCard})` }}
                        >
                            {/* Content goes here */}
                        </div>

                        {/* Card 3 */}
                        <div
                            className="bg-center bg-no-repeat bg-cover max-w-[440px] px-7 min-h-[500px] h-full relative"
                            style={{ backgroundImage: `url(${yellowCard})` }}
                        >
                            {/* Content goes here */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SatisfiedClient;
