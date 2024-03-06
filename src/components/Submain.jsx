import { useState } from 'react';
import './Submain.css';
import image from '../assets/fellowMugExtra2.webp';

const Submain = () => {

    return (
        <section className='submain-section'>
            <div className='submain-text-container'>
                <h2 className='submain-content-heading'>Minimalist style, maximum benefits.</h2>
                <div className='header-and-desc-container'>
                    <div className='header-and-desc'>
                        <div className='header'>PERFECT FOR DRIVING</div>
                        <p className='desc'>Snap-in splash guard prevents coffee from spilling on your stuff while you’re driving (or gesticulating wildly). Use the knob on the splash guard to push in or pull out of Carter. If the splash guard gets stuck, rotate it back and forth slightly until it releases.</p>
                    </div>
                    <div className='header-and-desc'>
                        <div className='header'>KEEPS THE RIGHT TEMPERATURE</div>
                        <p className='desc'>No more lukewarm coffee for you. Insulated double-walled stainless steel maintains your drink temperature, hot or cold, for a staggering 24 hours. Because delicious drinks should stay delicious, even on the go.</p>
                    </div>
                    <div className='header-and-desc'>
                        <div className='header'>TASTES LIKE IT SHOULD</div>
                        <p className='desc'>One of those features you might not realize you’re looking for until you find it: a ceramic interior coating that keeps coffee tasting like coffee, never adding funky flavors that other thermoses can. Life-changing, right?</p>
                    </div>
                </div>
            </div>
            <div className='submain-pic-container'>
                <img src={image} alt='Fellow Mug Pic' className='submain-pic'></img>
            </div>
        </section>
    )
}

export default Submain;