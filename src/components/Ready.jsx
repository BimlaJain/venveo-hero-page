import React from "react";

const Ready = () => {
    return (
        <section
            className="bg-ready lg:py-[66px]  pt-[56px] pb-[54px] bg-center bg-no-repeat bg-cover"
        >
            <div className="container">
                <div className="lg:flex justify-center">
                    <p className="text-custom-2xl font-light leading-none text-center text-white pt-5 max-lg:pb-[30px] max-sm:text-3xl max-sm:max-w-[221px] max-sm:mx-auto font-maisonLight">
                        Ready to hit your goals?
                    </p>
                    <div className="flex ms-9 max-lg:mx-auto justify-center">
                        <a
                            href="#"
                            className="text-custom-xs font-semibold leading-[15px] text-center bg-yellow py-[31px] group px-[27px] flex justify-center mainson_Neue gap-[10px] max-sm:w-full"
                        >
                            Book a Strategy Call
                            <img src="./assets/images/svg/strategy-arrow.svg" alt="arrow" className="group-hover:scale-110 ml-3 mt-1 transition-all duration-700 ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ready;
