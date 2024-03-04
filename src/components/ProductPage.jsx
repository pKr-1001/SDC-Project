import React, { useState } from 'react';
import './ProductPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch PDPs/Fellow Carter Move 12oz Fog Grey/test_Fellow-Carter-Move-12oz-M1-Hero.png',
    'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch PDPs/Fellow Carter Move 12oz Fog Grey/test_Fellow-Carter-Move-12oz-M1-Detail1.png'
  ];

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % images.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + images.length) % images.length);

  return (
    <div className="product-page">
      <div className="carousel">
        <button onClick={prevSlide} aria-label="Previous slide">{'<'}</button>
        <img src={images[currentSlide]} alt="Product image" />
        <button onClick={nextSlide} aria-label="Next slide">{'>'}</button>
      </div>
      <h1>Fellow Carter Move Mug, 12 oz in Fog Grey</h1>
      <p>The Carter Move Mug, from San Francisco–based designer Fellow, solves the traveler’s never-ending dilemma of transporting just-brewed coffee—and in great style. Modeled with a wine glass’s lip, this mug is made for elegant drinking on the go. Not to mention the splash guard, stainless steel insulation, and ceramic coating that let you do it all while looking the part with our exclusive grey color, just for winter.</p>
      <div className="quantity-selector">
        <button onClick={decrementQuantity} className="btn btn-secondary">-</button>
        <input type="text" value={quantity} readOnly className="form-control text-center" />
        <button onClick={incrementQuantity} className="btn btn-secondary">+</button>
      </div>
      <div className="add-to-cart">
        <button className="btn btn-dark">Add to cart | $36</button>
      </div>
    </div>
  );
};

export default ProductPage;