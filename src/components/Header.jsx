
import HeaderExt from './HeaderExt';
import { useEffect, useState } from 'react';
import HeaderLargeContent from './HeaderLargeContent';
import HeaderSmallContent from './HeaderSmallContent';

const Header = ( { flip, menuIcon, toggle } ) => {

    const [isVisible, setIsVisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    // const [viewPort, setViewPort] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScroll) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScroll(scrollTop)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScroll])

    const headerContent =  toggle ? <HeaderLargeContent menuIcon={menuIcon}/> : <HeaderSmallContent menuIcon={menuIcon} flip={flip}/>

    return (
    <div className={`sticky ${isVisible ? '' : 'hidden'} z-50`}>
        <div className="relative py-2 bg-white">
            <p className="text-center w-full text-xs font-serif text-black margin-bar">BOGO 50% Off 
                <a href="#" className="underline px-05 text-black"> Craft Instant </a> 
                Start a Blue Bottle Coffee 
                <a href="#" className="underline px-05 text-black">{' '}Subscription</a> | 
                Free Shipping on Orders Over $40
            </p> 
        </div>
        {headerContent}
      </div>
    )
}

export default Header;