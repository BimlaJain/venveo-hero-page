import React from 'react';
import { CLIENT_CARD } from '../utils/helper';

const Client = () => {
    return (
        <div className="pt-1">
            <div className="max-w-[1440px] max-xl:container mx-auto">
                <h2 className="text-3xl max-sm:text-2xl text-center leading-8 lg:pt-24  md:pt-20 pt-9 mainson-Neue">
                    Driving digital revenue for over
                </h2>
                <h2 className="lg:text-custom-lg text-6xl text-center leading-[70px] font-bold pt-2 sohne-schmal uppercase pb-12">
                    1,400+ satisfied clients.
                </h2>

                <div className="flex justify-between flex-wrap max-xl:justify-center max-xl:gap-8">
                    {CLIENT_CARD.map((card) => (
                        <div
                            key={card.id}
                            style={{ backgroundImage: `url(${card.backgroundImage})` }}
                            className="bg-center bg-no-repeat bg-cover max-w-[440px] px-7 min-h-[500px] h-full relative" >
                            {card.buttonLabel && (
                                <button className="text-xs font-semibold text-white bg-black rounded-[1000px] pl-3 pr-12 py-[7px] absolute leading-5"
                                    style={card.buttonPosition}> {card.buttonLabel}</button>)}
                            <div className="bg-white mt-[35px] px-[29px] pb-[31px] rounded-[25px]">
                                <img src={card.logo} alt={card.logoAlt} className="pt-9 pointer-events-none"
                                    style={{ maxWidth: card.logoWidth }} />
                                <p className="max-w-[325px] text-3xl py-6 font-light max-sm:text-2xl "> {card.description} </p>
                                <p className="text-custom-xs max-w-[315px] leading-5 font-normal mainson-Neue-Mono"> {card.subText}</p>
                                <a href="#" className="relative flex pt-[56px] items-center  font-semibold text-custom-xs
                                 text-black pb-0.5 group" >Learn More
                                    <svg className="group-hover:ml-5 ml-3 mt-1 transition-all duration-700 ease-in-out"
                                        width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M10 5.00343L0 0V10L10 5.00343Z" className="fill-current" /> </svg>
                                </a>
                            </div>
                            <div className="flex gap-12 pt-3 pb-8 pl-4">
                                {card.stats.map((stat, index) => (
                                    <div key={index}>
                                        <p className="text-black leading-10 text-custom-xl max-sm:text-3xl font-bold font-sohne"> {stat.value}
                                        </p>
                                        <p className="text-black leading-4 text-custom-xs pt-1 whitespace-nowrap font-medium">
                                            {stat.label} </p>
                                    </div>))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Client;