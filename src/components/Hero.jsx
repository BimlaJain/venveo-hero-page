import React from 'react';
import Header from '../common/Header';


const Home = () => {
    return (
        <div className='bg-cover bg-no-repeat h-[869px] lg:bg-[100%_100%] max-sm:h-[539px] mx-w-[1440px]' style={{ backgroundImage: `url(./assets/images/webp/hero-bg.webp)` }}>
            <Header />
            <div className="container relative">
                <header className="text-center sm:mt-20 mt-14">
                    <h1
                        className="lg:text-custom-sm md:text-custom-md text-6xl  text-white font-bold leading-custom-sm sohne-schmal uppercase max-w-[822px] mx-auto">
                        Make marketing a growth machine
                    </h1>
                    <img src="./assets/images/webp/green-elipse.webp" alt="green-ellipse" className='mt-2 lg:pl-72 sm:pl-[140px] sm:block hidden' />
                    <p className="font-light md:text-2xl text-lg leading-snug text-white max-w-[652px] mx-auto mt-4 mainson_Neue">
                        We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get
                        a proposal now.
                    </p>
                </header>
                <div className="sm:mt-8 sm:mb-16 mt-4 mb-8">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); 
                            const input = document.getElementById("website-input");
                            if (input && input.checkValidity()) {
                                console.log("Form submitted: ", input.value);
                            } else {
                                input.reportValidity(); 
                            }
                        }}
                        className="border-2 rounded-[50px] text-center py-3 sm:py-5 sm:px-7 px-4 flex max-w-[448px] sm:mx-auto mx-5 justify-between"
                    >
                        <input
                            id="website-input"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none flex-grow text-white placeholder:text-grey"
                            aria-label="Enter your website"
                            required
                        />
                        <button
                            type="submit"
                            className="text-white text-center"
                            aria-label="Analyze your website"
                        >
                            Analyze
                        </button>
                    </form>

                </div>
                <div className='absolute flex lg:justify-center max-sm:left-[6%] max-lg:left-[27%] max-xl:left-[3%] max-2xl:left-[8%] pb-10'>
                    <img src="./assets/images/webp/hero-card.webp" alt="Hero card" className="lg:block hidden max-w-[924px] mx-auto" />
                    <img src="./assets/images/webp/hero-card1.webp" alt="Hero card" className="lg:hidden block justify-center" />
                </div>
            </div>
        </div>
    );
};

export default Home;
