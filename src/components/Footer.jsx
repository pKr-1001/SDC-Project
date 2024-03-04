import React from "react"; // 3/1/24 

const Footer = () => {

    return (
        <>
                <footer className="relative bg-black text-white w-full">
                    <div className="pt-18 md:pt-10 xl:pt-22 px-5 md:px-10 xl:px-15 m-0 pb-3 md:pb-md">
                        <h2 className="font-sans tracking-widest uppercase text-sm xl:text-md text-white pb-11 sm:pb-14 xl:pb-18">BLUE BOTTLE COFFEE</h2>
                        
                        <div className="flex flex-col md:flex-row md:justify-between">
                        // First Column
                            <ul className="w-full flex flex-row flex-wrap -ml-1 pr-4">

                            </ul>

                            // Second Column
                            <div className="md:justify-self-end md:w-5/12 -mt-1">

                            // Newsletter Signup Form
                                <form className="border-b max-w-max border-white bg-black pt-7 md:pt-0 pb-0.5">
                                    <input type="text" placeholder="Enter your email" />
                                    <button>Subscribe</button>
                                </form>

                                // Links and Social Media Icons
                                <ul className="bg-black flex flex-row gap-7 md:gap-5 xl:gap-7 items-center md:transform md:origin-left md:scale-75 xl:transform-none pt-4.5 md:pt-3 pb-7 md:pb-10">
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        // Horizontal Line
                        <hr className="border-white border-t -mx-5 md:-mx-10 xl:-mx-15">

                       // Bottom Section
                            <div className="flex flex-col gap-y-6 lg:flex-row items-center lg:place-content-between pt-6 md:pt-3 lg:pt-8 xl:pt-11">

                            // Bottom Links
                                <ul className="text-white flex flex-wrap gap-x-3 gap-y-1 lg:flex-nowrap place-content-center">

                                </ul>

                               // Privacy Links
                                <div className="bg-black">

                                </div>
                            </div>
                        </hr>
                    </div>
                </footer>
        </>
    )
}

export default Footer;