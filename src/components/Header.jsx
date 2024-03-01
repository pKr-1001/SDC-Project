// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Header = () => {
    return (
        <div className="header">
            <div className="announcement">
            <p className="a-text text-center w-full">BOGO 50% Off 
                <a href="#" className="a-line px-0.5"> Craft Instant </a> 
                Start a Blue Bottle Coffee 
                <a href="#" className="a-line">{' '}Subscription</a> | 
                Free Shipping on Orders Over $40
            </p> 
            </div>
        <nav className="nav-bar">
            <div className="w-full flex flex-col">
                <span role="button" className="nav-item">
                    <svg className="textBlack">
                    <rect width="20" height="1.33333"></rect>
                    <rect y="5.33203" width="20" height="1.33333"></rect>
                    </svg>
                </span>
            </div>
        </nav>
      </div>
    )
}

export default Header;