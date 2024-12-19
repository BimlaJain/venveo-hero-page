import React from 'react';
import Header from '../common/Header';
import HeroBg from '../assets/png/hero-bg.png'
import HeroCard from '../assets/png/hero-card.png'
import HeroCardMobile from '../assets/png/hero-card1.png'


const Home = () => {
    return (
        <div className='lg:min-h-screen 2xl:min-h-fit bg-cover bg-no-repeat bg-hero-bg 2xl:h-[869px] md:h-[800px] h-[650px]' style={{ backgroundImage: `url(${HeroBg})` }}>
            <Header />
            <div className="container relative">
                <header className="text-center sm:mt-20 mt-14">
                    <h1
                        className="lg:text-custom-sm md:text-custom-md text-5xl  text-white font-bold leading-custom-sm sohne_schmal uppercase max-w-[822px] mx-auto">
                        Make marketing a growth machine
                    </h1>
                    <p className="font-light md:text-2xl text-lg leading-snug text-white max-w-[652px] mx-auto mt-4 mainson_Neue">
                        We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get
                        a proposal now.
                    </p>
                </header>
                <div className="sm:mt-8 sm:mb-16 mt-4 mb-8">
                    <div className="border-2 rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] sm:mx-auto mx-5 justify-between">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none flex-grow"
                            aria-label="Enter your website"
                        />
                        <a
                            href="/"
                            className="text-white text-center"
                            aria-label="Analyze your website"
                        >
                            Analyze
                        </a>
                    </div>
                </div>
                <div className='absolute flex lg:justify-center max-sm:left-[6%] max-lg:left-[27%] max-xl:left-[3%] max-2xl:left-[8%] '>
                    <img src={HeroCard} alt="Hero card" className="lg:block hidden max-w-[924px] mx-auto" />
                    <img src={HeroCardMobile} alt="Hero card" className="lg:hidden block flex justify-center" />
                </div>
            </div>
        </div>
    );
};

export default Home;
