import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ACTUAL_RESULTS } from '../utils/helper';

const ActualResult = () => {
    return (
        <div className="bg-actual bg-no-repeat bg-center bg-cover text-white pt-[67px] lg:pt-[119px] pb-6 sm:pb-8 mt-10 relative">
            <p className="max-sm:px-4 font-light text-3xl leading-[70px] text-white text-center font-maisonLight">
                Actual businesses.
            </p>
            <h2 className='font-bold font-sohne text-custom-7xl max-sm:text-6xl uppercase text-center leading-[70px]'>Actual results.</h2>
            <p className="sm:mt-[46px] mt-[22px] max-sm:px-4 md:mb-[81px] mb-[39px] text-custom-lg leading-5 font-normal text-center font-maisonMono">
                Businesses trust Venveo to power growth.
            </p>

            <div className="swiper-button-prev absolute left-0 top-[44%] max-sm:top-[32%] transform translate-y-[170%] sm:-translate-y-[50%] z-10">
                <button className="bg-white rounded-r-[25px] flex items-center justify-center">
                    <img alt="prev-btn" className="sm:my-14 sm:mx-8 my-10 mx-6" src="/assets/images/svg/prev-button.svg" />
                </button>
            </div>
            <div className="swiper-button-next absolute  right-0 top-[44%] max-sm:top-[32%] transform translate-y-[170%] sm:-translate-y-[50%] z-10">
                <button className="bg-white rounded-l-[25px] flex items-center justify-center">
                    <img alt="next-btn" className="sm:my-14 sm:mx-8 my-10 mx-6" src="/assets/images/svg/next-button.svg" />
                </button>
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                initialSlide={1}
                effect="fade"
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1.6 },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {ACTUAL_RESULTS.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center relative mb-16 lg:mb-24">
                            <img
                                src={obj.videoThumbnail}
                                alt="Thumbnail"
                                className="!max-w-[640px] w-full mx-auto object-cover rounded transition-all duration-300 ease-in-out"
                            />
                            <p className="mt-[30px] text-2xl leading-custom-5xl font-maisonLight sm:text-3xl sm:leading-custom-7xl font-light max-w-[251px] sm:max-w-[640px] md:mt-[74px] mx-auto">
                                "{obj.description}"
                            </p>
                            <p className="mt-[23px] max-sm:px-4 text-[15px] leading-[20px] font-normal font-maisonMono">
                                {obj.name}
                            </p>
                            <p className="text-sm max-sm:px-4 text-[15px] leading-[20px] font-normal font-maisonMono">
                                {obj.title}
                            </p>
                            <img
                                src={obj.companyLogo}
                                alt="Company Logo"
                                className="mx-auto mt-4 w-12"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActualResult;