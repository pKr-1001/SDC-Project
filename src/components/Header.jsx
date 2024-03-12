
import HeaderExt from './HeaderExt';
import { useEffect, useState, useContext } from 'react';
import HeaderLargeContent from './HeaderLargeContent';
import HeaderSmallContent from './HeaderSmallContent';
import { ContextHeader } from '../App';

const Header = () => {

    let {flip, menuIcon, toggle} = useContext(ContextHeader)

    const [isVisible, setIsVisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    // const [viewPort, setViewPort] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const trigger = 100;

        if (scrollTop > trigger) {
            if (scrollTop > lastScroll) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        }
        setLastScroll(scrollTop)

        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScroll])

    const headerContent =  toggle ? <HeaderLargeContent/> : <HeaderSmallContent/>

    return (
    <div className={`sticky ${isVisible ? '' : 'hidden'} z-50`}>
        <div className="relative py-2 bg-white">
            <p className="text-center w-full text-xs font-serif text-black margin-bar">10% Off Select
                <a href="#" className="underline px-05 text-black">Kettles</a> 
                and <a href='#' className='underline px-05 text-black'>Drinkware</a> | Free Shipping on Coffee
                <a href="#" className="underline px-05 text-black">Subscription</a> | 
                Free Shipping on Orders Over $40
            </p> 
        </div>
        {headerContent}
      </div>
    )
}

export default Header;