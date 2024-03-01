DROP TABLE IF EXISTS fellow_carter_move_mug CASCADE;

CREATE TABLE fellow_carter_move_mug (
    mug_id SERIAL PRIMARY KEY,
    mug_name CHAR(255),
    mug_description_1 VARCHAR(2000),
    mug_description_2 VARCHAR(2000),
    mug_shipping CHAR(255),
    mug_cost INTEGER,
    mug_pic_main VARCHAR(1000),
    mug_pic_parts VARCHAR(1000)
);