import React, { useState, useEffect } from 'react'
import logo from '../assets/png/logo.png'
import { NAV_LIST } from '../utils/helper'
import RightArrow  from '../assets/svg/right-arrow.svg'
import  SearchIcon  from '../assets/svg/search.svg'

const Header = ({ myClass }) => {
    const [open, setOpen] = useState()
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 770) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className='max-w-[1920px] mx-auto max-lg:pt-6 max-sm:pt-4 flex max-lg:items-center justify-between'>
            <div className=' max-w-max'>
                <a href="#logo" className='relative z-10 '>
                    <img src={logo} alt="venveo-logo" className='h-[90px] max-md:h-14 max-sm:h-16 mt-[30px] ml-8' />
                </a>
            </div>
            <div className={`flex items-center ${myClass} max-lg:hidden -mt-8 `}>
                <div className='bg-white relative z-10 py-7 max-lg:py-4 flex item-center gap-[42px] max-lg:gap-5 max-lg:px-6 pl-[41.79px] pr-[29.5px]'>
                    {NAV_LIST.map((obj, i) => (
                        <select key={i} name="venveo" id="myLink" className='cursor-pointer text-[15px] leading-[15px] font-maisonMedium outline-none '>
                            <option value={obj.title}>{obj.title}</option>
                            <option value={obj.OptionOne}>{obj.OptionOne}</option>
                            <option value={obj.OptionTwo}>{obj.OptionTwo}</option>
                            <option value={obj.OptionThree}>{obj.OptionThree}</option>
                        </select>
                    ))}
                    <div>                        
                        <a href="">
                            <img src={SearchIcon} alt="search-icon" className='group-hover:fill-blue transition-all duration-300' stroke='group-hover:stroke-blue transition-all duration-300' />
                        </a>
                    </div>
                </div>
                <button className='flex items-center max-lg:py-[20.5px] py-[32.5px] px-[31.63px] bg-yellow gap-[5px] text-[15px] font-maisonDemi leading-[15px] font-semibold transition-all duration-300 hover:bg-black hover:text-white right-arrow'>Let's Talk <img src={RightArrow} alt="right-arrow" /></button>
            </div>
            <div
                className={`lg:hidden z-30 cursor-pointer pr-7`}
                onClick={() => setOpen(!open)}
            >
                <div className={`flex flex-col gap-3 items-center ${open ? "!gap-0 transition-all duration-500" : "transition-all duration-500"}`}>
                    <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "rotate-[50deg] origin-center" : ""} `}></div>
                    <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "-rotate-[53deg] origin-center" : ""} `}></div>
                </div>
            </div>
            <div className={`w-full h-full bg-blue transition-all duration-500 left-0 lg:-top-full z-20 fixed flex flex-col items-center justify-center ${open ? "top-0 left-0" : "-top-full"
                }`}>
                <div className=' relative z-10 flex flex-col item-center justify-center items-center text-center gap-7'>
                    {NAV_LIST.map((obj, i) => (
                        <select key={i} name="venveo" id="myLink" className='custom-select cursor-pointer text-[15px] text-white leading-[15px] font-maisonMedium outline-none max-lg:mx-auto bg-transparent'>
                            <option value={obj.title}>{obj.title}</option>
                            <option value={obj.OptionOne}>{obj.OptionOne}</option>
                            <option value={obj.OptionTwo}>{obj.OptionTwo}</option>
                            <option value={obj.OptionThree}>{obj.OptionThree}</option>
                        </select>
                    ))}
                    <a href="">
                        <img src={SearchIcon} alt="search-icon" className='group-hover:fill-blue transition-all duration-300' stroke='group-hover:stroke-blue transition-all duration-300' />
                    </a>
                    <button className='flex items-center max-lg:py-[20.5px] py-[32.5px] px-[31.63px] bg-yellow gap-[5px] text-[15px] font-maisonDemi leading-[15px] font-semibold transition-all duration-300 hover:bg-black hover:text-white right-arrow'>Let's Talk <img src={RightArrow} alt="right-arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Header