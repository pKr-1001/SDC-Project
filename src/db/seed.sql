INSERT INTO mugs (
        mug_name, mug_description_1, 
        mug_description_2, 
        mug_shipping, 
        mug_cost, 
        mug_bottom_description_title, 
        mug_bottom_header_1, 
        mug_bottom_description_1,
        mug_bottom_header_2, 
        mug_bottom_description_2, 
        mug_bottom_header_3, 
        mug_bottom_description_3
        ) 
VALUES (
        'Fellow Carter Move Mug, 12 oz in Fog Grey',
        'The Carter Move Mug, from San Francisco–based designer Fellow, solves the traveler’s never-ending dilemma of transporting just-brewed coffee—and in great style.',
        'Modeled with a wine glass’s lip, this mug is made for elegant drinking on the go. Not to mention the splash guard, stainless steel insulation, and ceramic coating that let you do it all while looking the part with our exclusive grey color, just for winter.',
        'Typically ships in 1 to 3 business days.',
        36,
        'Minimalist style, maximum benefits.',
        'PERFECT FOR DRIVING',
        'Snap-in splash guard prevents coffee from spilling on your stuff while you’re driving (or gesticulating wildly). Use the knob on the splash guard to push in or pull out of Carter. If the splash guard gets stuck, rotate it back and forth slightly until it releases.',
        'KEEPS THE RIGHT TEMPERATURE',
        'No more lukewarm coffee for you. Insulated double-walled stainless steel maintains your drink temperature, hot or cold, for a staggering 24 hours. Because delicious drinks should stay delicious, even on the go.',
        'TASTES LIKE IT SHOULD',
        'One of those features you might not realize you’re looking for until you find it: a ceramic interior coating that keeps coffee tasting like coffee, never adding funky flavors that other thermoses can. Life-changing, right?'
);

INSERT INTO mug_pics (mug_id, mug_pic_main, mug_pic_extra, mug_pic_extra_2)
VALUES (
        1,
        './src/assets/fellowMugMain.webp',
        './src/assets/fellowMugExtra.webp',
        './src/assets/fellowMugExtra2.webp'
);

INSERT INTO mugs (mug_name, mug_description_1, mug_description_2, mug_shipping, mug_cost) 
VALUES (
        'Blue Bottle Mug',
        'You know that mug you reach for most? Perfect handle. Holds the ideal amount of coffee. Looks at home on your kitchen counter, your desk, with both hands curled around it for morning warmth.',
        'For us, this is that mug. Simple. Sophisticated. Smooth porcelain, soft curves. Designed by our partners at Claska, in Japan. We call this long-standing staple, inspired by our Tokyo cafes, simply “Blue Bottle Mug.” Because, well, it feels like home.',
        'Typically ships in 1 to 3 business days.',
        27
);

INSERT INTO mug_pics (mug_id, mug_pic_main, mug_pic_extra, mug_pic_extra_2)
VALUES (
        2,
        './src/assets/blueBottleMugMain.webp',
        './src/assets/blueBottleMugBottom.webp',
        './src/assets/blueBottleMugBottom2.webp'
);