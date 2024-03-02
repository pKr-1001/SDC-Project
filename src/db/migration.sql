DROP TABLE IF EXISTS mugs CASCADE;

CREATE TABLE mugs (
    mug_id SERIAL PRIMARY KEY,
    mug_name VARCHAR,
    mug_description_1 VARCHAR,
    mug_description_2 VARCHAR,
    mug_shipping VARCHAR,
    mug_cost INTEGER,
    mug_pic_main VARCHAR,
    mug_pic_extra VARCHAR
);