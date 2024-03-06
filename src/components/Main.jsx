import { useState, useEffect} from 'react';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const fetchMugs = () => {
    return fetch("https://fec-project-tjyl.onrender.com/mugs/1") 
      .then((response) => response.json()) 
      .then((data) => {
        // Return an object containing all the pieces of data
        return {
          mugName: data.mug_name,
          mugDescription1: data.mug_description_1,
          mugDescription2: data.mug_description_2,
          mugShipping: data.mug_shipping,
        };
      })
      .catch((error) => {
        console.error("Error fetching mugs:", error);
        throw error;
      }); 
  };

  const [mugData, setMugData] = useState({
    mugName: '',
    mugDescription1: '',
    mugDescription2: '',
    mugShipping: '',
  });

  // Step 2: Fetch data when the component mounts
  useEffect(() => {
    fetchMugs().then(setMugData).catch(console.error);
  }, []);

    const images = ["https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch PDPs/Fellow Carter Move 12oz Fog Grey/test_Fellow-Carter-Move-12oz-M1-Hero.png", 
    'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch PDPs/Fellow Carter Move 12oz Fog Grey/test_Fellow-Carter-Move-12oz-M1-Detail1.png']

    const [currentPic, setCurrentPic] = useState(images[0]);
    const [currentQuantity, setCurrentQuantity] = useState(1)
    const [currentPrice, setCurrentPrice] = useState(36);
    const [showFirstButton, setShowFirstButton] = useState(false);

    const firstPic = () => {
        setCurrentPic(images[0]);
        setShowFirstButton(false); // Hide the first button and show the second
    }
    const secondPic = () => {
        setCurrentPic(images[1]);
        setShowFirstButton(true); // Show the first button and hide the second
    }

    const increaseQuantity = () => {
        const newQuantity = currentQuantity + 1;
        setCurrentQuantity(newQuantity);
        setCurrentPrice(newQuantity * 36);
    }

    const decreaseQuantity = () => {
        const newQuantity = Math.max(1, currentQuantity - 1);
        setCurrentQuantity(newQuantity);
        setCurrentPrice(newQuantity * 36);
    }

    const handleInputChange = (event) => {
        const newQuantity = Math.max(0, parseInt(event.target.value, 10) || 0);
        setCurrentQuantity(newQuantity);
        setCurrentPrice(newQuantity * 36);

    }


return (
<>
<div className="main-component">
    <div className='row'>
        <div className='carousel col-sm-8'>
            {showFirstButton && <button onClick={firstPic}>{'<---'}</button>}
            <img src={currentPic} alt="coffee" height="100px" width="100px"/>
            {!showFirstButton && <button onClick={secondPic}>{'--->'}</button>}
        </div>
        <div className='product-info col-sm-4'>
            <h1>{mugData.mugName}</h1>
            <p>{mugData.mugDescription1}</p>
            <p>{mugData.mugDescription2}</p>
            <p>{mugData.mugShipping}</p>
            <div className='row'>
                <div className='quantity-selector col-sm-6'>
                    <form aria-label="quantity selector" className="w-full bg-white flex flex-row border text-black">
                        <button aria-label="decrease by 1" className="incrementor-button w-1/4 text-center" type="button" onClick={decreaseQuantity}>-</button>
                        <input aria-label="item quantity" className="w-1/2 text-center outline-none" value={currentQuantity} maxLength="3" onChange={handleInputChange}/>
                        <button aria-label="increase by 1" className="incrementor-button w-1/4 text-center" type="button" onClick={increaseQuantity}>+</button>
                    </form>
                </div>
                <div className='add-to-cart col-sm-6'>
                    <button className='btn dark'>ADD TO CART | ${currentPrice}</button>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default Main;