const HeaderExpanded = () => {

    return (
        <div className="padding">
        <div className="fixed flex inset-0 z-40">
        <div className="opacity-100"></div>
        <div className="flex flex-col relative shadow-xl w-full h-full">
        <div className="h-full w-full pt-10 pb-6 px-custom space-y-5 flex flex-col overflow-y-auto bg-cream">
            <div className="mb-8 padding">
                <span className="font-sans tracking-widest uppercase text-black text-sm xl:text-md no-underline border-black border-b border-opacity-0 font-normal">
                    SHOP
                </span>
            </div>
            <div className="mb-8 padding">
                <span className="font-sans tracking-widest uppercase text-black text-sm xl:text-md no-underline border-black border-b border-opacity-0 font-normal">
                    BEST SELLERS
                </span>
            </div>
            <div className="mb-8 padding">
                <span className="font-sans tracking-widest uppercase text-black text-sm xl:text-md no-underline border-black border-b border-opacity-0 font-normal">
                    SUBSCRIPTIONS
                </span>
            </div>
            <div className="mb-8 padding">
                <span className="font-sans tracking-widest uppercase text-black text-sm xl:text-md no-underline border-black border-b border-opacity-0 font-normal"> 
                    LOCATIONS
                </span>
            </div>
            <div className="flex flex-col flex-1 justify-end">
                <div className="flex flex-shrink-0 gap-1">
                    <a className="no-underline border-black w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100 flex-shrink-0">
                    <span className="font-sans tracking-widest uppercase text-black text-sm xl:text-md font-normal">
                        $5 FOR YOUR 1ST BAG
                        </span>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}


export default HeaderExpanded

