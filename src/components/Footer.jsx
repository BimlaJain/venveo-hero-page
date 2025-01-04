import React from "react";
import { FOOTER_DATA, FOOTER_LIST } from "../utils/helper";

function Footer() {
    const { logo, visit, contact, footerPolicies } = FOOTER_LIST;

    return (
        <footer className="bg-blue text-white pt-[57px] lg:pt-[90px] pb-[86px] lg:pb-[104px]">
            <div className="container max-w-[1353px] mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 max-sm:gap-4">
                {FOOTER_DATA.map((obj, index) => (
                    <div
                        key={index}
                        className={`max-xl:pb-14 max-sm:pb-4 max-w-[169px] ${index === 3 ? 'xl:-ml-[75px]' : ''
                            }`}
                    >
                        <ul className="space-y-2">
                            <li className="font-medium text-xs leading-custom-md pb-4 uppercase">
                                {obj.title}
                            </li>
                            {obj.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="font-maisonLight hover:text-yellow text-custom-xs text-nowrap leading-custom-6xl">
                                    <a
                                        className="relative after:absolute hover:after:bg-green hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[1px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-500"
                                        href={link.href}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="text-center md:text-left xl:-ml-[195px]">
                    <p className="mb-4 text-3xl font-maisonLight">Get weekly data — and insights.</p>
                    <form className="border-2 border-white mt-[30px] text-white rounded-[50px] text-center py-4 sm:py-5 px-5 xl:px-7 flex w-full xl:max-w-[448px] sm:mx-auto justify-between">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none w-full placeholder:text-white text-white text-custom-xs font-normal leading-5 font-MaisonNeue"
                            aria-label="Enter your website"
                            required />
                        <button
                            className="text-yellow text-custom-xs text-nowrap leading-5 font-semibold text-center font-maisonDemi hover:text-green transition-all duration-500">
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
            <div className="container max-w-[1353px] pt-14 xl:pt-20 mx-auto flex flex-wrap justify-between items-center text-center sm:text-left">
                <div className="lg:w-1/3 md:w-1/2 w-full mb-6 sm:mb-0">
                    <a href="#">
                        <img src={logo.src} alt={logo.alt} className="mx-auto sm:mx-0 mb-[22px] max-w-[44.8px]" />
                    </a>
                    <p className="text-custom-sx leading-5 max-w-[315px] max-sm:text-center max-sm:mx-auto">
                        {logo.description}
                    </p>
                    <p className="text-custom-sx leading-5 max-sm:text-center">
                        {logo.copyright}
                    </p>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full flex gap-8 md:gap-14 max-sm:justify-center lg:justify-center max-md:mt-5">
                    <div className="flex flex-col">
                        <p className="font-medium text-xs leading-custom-md  pb-[30px]">{visit.title}</p>
                        <a target="_blank" href={visit.link} className="text-custom-sx leading-5">
                            {visit.address.split("\n").map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-custom-sx pb-[30px]">{contact.title}</p>
                        <a
                            target="_blank"
                            href={contact.email.link}
                            className="text-custom-sx leading-5 hover:text-yellow">
                            {contact.email.text}
                        </a>
                        <a
                            target="_blank"
                            href={contact.phone.link}
                            className="pt-[21px] text-custom-sx leading-5 hover:text-yellow">
                            {contact.phone.text}
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full mt-6 lg:mt-0">
                    <div className="flex max-sm:justify-center lg:justify-end space-x-4">
                        {footerPolicies.map((policy, index) => (
                            <p key={index} className="text-custom-sx">
                                {policy}
                            </p>
                        ))}
                    </div>
                    <div className="flex max-sm:justify-center lg:justify-end space-x-[34px] pt-[31px]">
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/svg/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/svg/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/svg/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/svg/linkdin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/svg/youtube.svg" alt="YouTube" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;