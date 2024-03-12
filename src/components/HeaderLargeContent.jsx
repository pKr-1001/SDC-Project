const HeaderLargeContent = () => {
    return (
        <>
        <nav className="nav-bar flex w-full px-5 md:px-15 overflow-y-auto bg-cream">
            <div className="w-full flex flex-col">
                <div className='grid gap-4 items-center h-12 md:h-20 grid-col-3 h-full'>
                    <div className='flex flex-nowrap h-full items-center gap-6 sm:gap-7 h-full'>
                        <div role="menu">
                            <span className="mr-7">
                                <span aria-hidden="false" className="font-sans tracking-widest uppercase text-black text-xs font-normal">
                                    SHOP
                                </span>
                            </span>
                                <a className="no-underline w-fit cursor-pointer border-opacity-0 mr-7 whitespace-nowrap">
                                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-black text-xs hover:cursor-pointer font-noraml">
                                        BEST SELLERS
                                    </span>
                                </a>
                                <a className="no-underline w-fit cursor-pointer border-opacity-0 mr-7">
                                <span aria-hidden="false" className="font-sans tracking-widest uppercase text-black text-xs hover:cursor-pointer font-noraml">
                                        SUBSCRIPTIONS
                                    </span>
                                </a>
                                <a className="no-underline w-fit cursor-pointer border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100 mr-7 whitespace-nowrap">
                                <span aria-hidden="false" className="font-sans tracking-widest uppercase text-black text-xs hover:cursor-pointer font-noraml">
                                        LOCATIONS
                                    </span>
                                </a>
                        </div>
                    </div>


                    <div className='w-20 flex justify-center items-center mx-auto'>
                        <div aria-hidden="true" className='hover:opacity-70'>
                            <a className="cursor-pointer" href="https://bluebottlecoffee.com/us/eng">
                            <svg className='w-4 h-8 md:h-10 lg-w-6 lg-h-full z-40 max-auto md:m1-auto lg-mr-auto margin' viewBox='0 0 23 57'>
                                <path fill="#00a9e0" fillRule="evenodd" clipRule="evenodd" d="M10.2753 2.6693C10.2753 2.6693 9.60825 2.61864 9.56181 2.61441C9.34353 2.58541 9.14432 2.5623 8.96266 2.54123C7.58438 2.38135 7.21682 2.33871 7.2019 0.727327C7.23568 0.292495 7.68317 -0.67849 8.56128 0.752657C8.95389 1.20438 9.43938 1.45768 9.84044 1.59277C9.74842 1.56104 9.85461 1.57674 10.0948 1.61226C10.8133 1.7185 12.7311 2.00207 14.1296 1.72364C14.6025 2.04871 14.1254 2.6313 13.9734 2.80017C13.9312 2.84661 12.1497 3.28988 10.4526 3.18012C10.4483 3.16583 10.4256 3.10323 10.3979 3.02646C10.3436 2.87634 10.2697 2.67209 10.2753 2.6693ZM22.2099 23.8526C22.3323 24.4943 22.4505 25.1697 22.5434 25.9085C22.8812 31.4474 23.1893 43.057 21.9524 50.3436C21.8215 53.0285 20.783 55.1816 20.4706 55.2703C20.4671 55.2721 20.455 55.2802 20.4349 55.2938C20.0908 55.5249 17.3822 57.3448 14.3872 56.942C13.2408 56.7877 12.342 56.8308 11.3714 56.8773C9.68646 56.9581 7.78541 57.0492 3.99763 56.1357C3.45304 55.7431 3.23773 55.4729 3.20818 55.2703C3.14063 54.8861 2.60026 52.1715 2.60026 52.1715C-0.916391 35.5002 0.155913 25.0346 0.14747 25.1444C0.155913 24.9755 0.171862 24.7992 0.18781 24.6228C0.195785 24.5346 0.203759 24.4464 0.210795 24.3592C0.548528 20.6694 0.75539 19.213 3.98075 18.0013C9.00085 16.1239 8.94975 13.2415 8.87055 8.77436C8.8673 8.59077 8.86399 8.4045 8.86099 8.21551C8.83566 7.17698 8.83144 6.33687 8.83144 6.33687C8.82722 6.34531 8.89477 4.54688 8.89477 4.54688V3.94318L12.8674 3.13262C12.8645 3.13829 12.8693 6.99754 12.8727 9.78114C12.8744 11.1435 12.8758 12.2483 12.8758 12.5174C13.165 15.0215 14.8389 15.4362 16.1695 15.7658C16.4899 15.8452 16.7904 15.9197 17.0468 16.0172C20.1624 17.4441 21.3065 20.7454 22.2099 23.8526Z"></path>
                            </svg>
                            </a>
                        </div>
                    </div>



                <div className='flex shrink-0 justify-end items-center w-full'>
                    <div className='flex justify-around gap-6 sm:gap-7 items-center'>
                        <div className="flex flex-shrink-0 gap-1">
                            <a className="no-underline border-black w-fit cursor-pointer">
                                <span aria-hidden="false" className="font-sans tracking-widest uppercase text-black text-xs hover:cursor-pointer font-noraml">
                                    $5 FOR YOUR 1ST BAG
                                </span>
                            </a>
                        </div>
                        <div className='h-full w-full cursor-pointer'>
                            <svg width="17" height="17" viewBox='0 0 17 17' fill="none">
                            <path d="M16.7383 15.4724C17.0872 15.8213 17.0872 16.3894 16.7383 16.7383C16.3893 17.0872 15.821 17.0872 15.472 16.7383L11.0962 12.3636C10.9217 12.1892 10.613 12.1668 10.4161 12.301C10.4161 12.301 10.2953 12.3949 10.0358 12.5426C9.05593 13.0972 7.91946 13.4193 6.71141 13.4193C3.00671 13.4193 0 10.4134 0 6.70964C0 3.00592 3.00671 0 6.71141 0C10.4161 0 13.4228 3.00592 13.4228 6.70964C13.4228 7.92633 13.0962 9.07144 12.5324 10.0555C12.3848 10.306 12.3043 10.4089 12.3043 10.4089C12.1611 10.6147 12.1879 10.9188 12.3624 11.0933L16.7383 15.4724ZM6.71141 11.63C9.43177 11.63 11.6331 9.42929 11.6331 6.70964C11.6331 3.99 9.43177 1.78924 6.71141 1.78924C3.99105 1.78924 1.78971 3.99 1.78971 6.70964C1.78971 9.42929 3.99105 11.63 6.71141 11.63Z" fill="black" stroke="#F9F6F0" strokeWidth="0.2" mask="url(#path-2-inside-1)"></path>
                            </svg>
                        </div>
                        <div className='h-full w-full cursor-pointer'>
                                <svg className='stroke-current text-black' width="17" height="19" viewBox='0 0 17 19' fill='none'>
                                    <circle cx="8.59488" cy="4.34" r="3.59" strokeWidth="1.5"></circle>
                                    <path d="M16.19 17.3599C16.19 13.1653 12.7896 9.76489 8.595 9.76489C4.4004 9.76489 1 13.1653 1 17.3599" strokeWidth="1.5" strokeLinecap="round"></path>
                                </svg>
                        </div>
                        <span>
                            <a>
                            <div aria-hidden="true" className='hover:opcatiy-70 cursor-pointer'>
                                <svg width="16" height="17" viewBox='0 0 16 17' fill='none'>
                                    <path d="M12 4.75C12 2.54086 10.2091 0.75 8 0.75C5.79086 0.75 4 2.54086 4 4.75" stroke="black" strokeWidth="1.5" strokeLinecap="round"></path>
                                <mask id='mask0_44_9583' mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="6" width="17" height="11">
                                    <path d="M1.60098 6.72534L3.20098 15.1319H12.801L14.401 6.72534H16.001V16.8132H0.000976562V6.72534H1.60098Z" fill="black"></path>
                                </mask>
                                <g mask='url(#mask0_44_9583'>
                                    <path d="M0.945068 7.56598L2.27867 15.9725H13.7235L15.0571 7.56598H0.945068Z" stroke="black" strokeWidth="1.6" strokeLinejoin="round"></path>
                                </g>
                                </svg>
                            </div>
                            </a>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderLargeContent