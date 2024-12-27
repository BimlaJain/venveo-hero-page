import React from 'react';
import Header from '../common/Header';
import HeroBg from '../assets/images/png/hero-bg.png'
import HeroCard from '../assets/images/png/hero-card.png'
import HeroCardMobile from '../assets/images/png/hero-card1.png'
import GreenEllipse from '../assets/images/png/green-elipse.png'


const Home = () => {
    return (
        <div className='bg-cover bg-no-repeat h-[869px] lg:bg-[100%_100%] max-sm:h-[539px] mx-w-[1440px]' style={{ backgroundImage: `url(${HeroBg})` }}>
            <Header />
            <div className="container relative">
                <header className="text-center sm:mt-20 mt-14">
                    <h1
                        className="lg:text-custom-sm md:text-custom-md text-5xl  text-white font-bold leading-custom-sm sohne_schmal uppercase max-w-[822px] mx-auto">
                        Make marketing a growth machine
                    </h1>
                    <img src={GreenEllipse} alt="green-ellipse" className='-mt-3 lg:pl-80 sm:pl-[140px] sm:block hidden' />
                    <p className="font-light md:text-2xl text-lg leading-snug text-white max-w-[652px] mx-auto mt-4 mainson_Neue">
                        We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get
                        a proposal now.
                    </p>
                </header>
                <div className="sm:mt-8 sm:mb-16 mt-4 mb-8">
                    <div className="border-2 rounded-[50px] text-center py-3 sm:py-5 sm:px-7 px-4 flex max-w-[448px] sm:mx-auto mx-5 justify-between">
                        <input
                            id="email"
                            type="text"
                            required
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none flex-grow text-white placeholder:text-grey"
                            aria-label="Enter your website"
                        />
                        <a
                            href=""
                            className="text-white text-center"
                            aria-label="Analyze your website"
                        >
                            Analyze
                        </a>
                    </div>
                </div>
                <div className='absolute flex lg:justify-center max-sm:left-[6%] max-lg:left-[27%] max-xl:left-[3%] max-2xl:left-[8%] pb-10'>
                    <img src={HeroCard} alt="Hero card" className="lg:block hidden max-w-[924px] mx-auto" />
                    <img src={HeroCardMobile} alt="Hero card" className="lg:hidden block justify-center" />
                </div>
            </div>
        </div>
    );
};

export default Home;
