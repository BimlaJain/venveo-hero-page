import React, { useEffect, useRef } from 'react';
import { ICON_IMAGES } from '../utils/helper'; 

const Features = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            let animationFrameId;

            const smoothScroll = () => {
                slider.scrollLeft += 1; 
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                }
                animationFrameId = requestAnimationFrame(smoothScroll);
            };
            animationFrameId = requestAnimationFrame(smoothScroll);
            return () => cancelAnimationFrame(animationFrameId);
        }
    }, []);
    const infiniteImages = [...ICON_IMAGES, ...ICON_IMAGES];

    return (
        <div className="sm:mt-52 mt-80 xl:mt-[25rem] lg:mt-[26rem] md:mt-22 mb-5">
            <div className="container mx-auto pb-14">
                <p className="flex justify-center pb-12 font-normal text_xmd leading-4 mainson_Neue">
                    Featured in
                </p>
                <div
                    ref={sliderRef}
                    className="flex gap-12 overflow-hidden lg:hidden"
                    style={{
                        scrollBehavior: 'auto', 
                        whiteSpace: 'nowrap',
                    }}
                >
                    {infiniteImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`featured-logo-${index}`}
                            className="h-auto object-contain inline-block"
                        />
                    ))}
                </div>
                <div className="hidden lg:flex gap-12 justify-center xl:gap-[123px] lg:gap-20">
                    {ICON_IMAGES.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`featured-logo-${index}`}
                            className="h-auto object-contain"
                        />
                    ))}
                </div>
            </div>
            <img src="./assets/images/webp/green-line.webp" alt="line image" className="mx-auto w-full" />
        </div>
    );
};

export default Features;
