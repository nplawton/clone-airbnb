DROP TABLE IF EXISTS language CASCADE;
DROP TABLE IF EXISTS currency CASCADE;
DROP TABLE IF EXISTS amenities CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS user_properties CASCADE;
DROP TABLE IF EXISTS propertyImages CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS property_images CASCADE;

CREATE TABLE language 
(
  lan_id serial NOT NULL,
  lan_type text NOT NULL,
  lan_country text NOT NULL,
  lan_symbol text NOT NULL,
  PRIMARY KEY (lan_id)
);

CREATE TABLE currency 
(
  cur_id serial NOT NULL,
  cur_country text NOT NULL,
  cur_type text NOT NULL,
  cur_symbol text NOT NULL,
  PRIMARY KEY (cur_id)
);

CREATE TABLE amenities 
(
  amenity_id serial NOT NULL,
  symbol text NOT NULL,
  sym_descrip text NOT NULL,
  PRIMARY KEY (amenity_id)
);

CREATE TABLE users
(
  userID    serial       NOT NULL,
  firstname varchar(20)  NOT NULL,
  lastname  varchar(20)  NOT NULL,
  host      boolean      NOT NULL DEFAULT false,
  email     varchar(400) NOT NULL UNIQUE,
  password  varchar(30)  NOT NULL DEFAULT 'password',
  avatar    text         NOT NULL DEFAULT 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
  PRIMARY KEY (userID)
);

CREATE TABLE properties
(
  propertyID   serial        NOT NULL,
  propertyName varchar(40)   NOT NULL,
  stars        numeric       NOT NULL DEFAULT 0.0,
  reviewsNum   smallint      NOT NULL DEFAULT 0,
  city         varchar(300)  NOT NULL,
  state        varchar(300)  NOT NULL,
  country      varchar(300)  NOT NULL,
  about        varchar(2000),
  lat          numeric       NOT NULL DEFAULT 0.000000,
  long         numeric       NOT NULL DEFAULT 0.000000,
  guests       smallint      NOT NULL DEFAULT 1,
  rooms        smallint      NOT NULL DEFAULT 0,
  beds         smallint      NOT NULL DEFAULT 0,
  baths        smallint      NOT NULL DEFAULT 0,
  price        smallint      NOT NULL DEFAULT 100,
  cleaning     smallint      NOT NULL DEFAULT 25,
  fee          smallint      NOT NULL DEFAULT 10,
  locationInfo varchar(2000),
  hostID       int           NOT NULL,
  coHostID     int,
  PRIMARY KEY (propertyID),
  FOREIGN KEY (hostID) REFERENCES users (userID),
  FOREIGN KEY (coHostID) REFERENCES users (userID)
);

CREATE TABLE user_properties
(
  userPropertyID serial   NOT NULL,
  hostID         int      NOT NULL,
  coHostID       int,
  propertyID     int      NOT NULL,
  PRIMARY KEY (userPropertyID),
  FOREIGN KEY (hostID) REFERENCES users (userID) ON DELETE SET NULL,
  FOREIGN KEY (coHostID) REFERENCES users (userID) ON DELETE SET NULL,
  FOREIGN KEY (propertyID) REFERENCES properties (propertyID) ON DELETE SET NULL
);

CREATE TABLE propertyImages
(
  imageID      serial     NOT NULL,
  propertyID   int        NOT NULL,
  image        text       NOT NULL,
  PRIMARY KEY (imageID),
  FOREIGN KEY (propertyID) REFERENCES properties (propertyID) ON DELETE CASCADE
);

CREATE TABLE reviews
(
  reviewID serial NOT NULL,
  propertyID int NOT NULL,
  review VARCHAR(500) NOT NULL,
  rating smallint NOT NULL,
  userID int NOT NULL,
  PRIMARY KEY (reviewID),
  FOREIGN KEY (userID) REFERENCES users (userID) ON DELETE SET NULL,
  FOREIGN KEY (propertyID) REFERENCES properties (propertyID) ON DELETE SET NULL
);

INSERT INTO language 
    (lan_type, lan_country, lan_symbol) 
VALUES
    ('English', 'United Staes', 'English (US)'),
    ('Azərbaycan dili', 'Azərbaycan', 'Azərbaycan dili (AZ)'),
    ('Bahasa Indonesia', 'Indonesia', 'Bahasa Indonesia (ID)'),
    ('Bosanski', 'Bosna i Herzegovina', 'Bosanski (BA)'),
    ('Catalá', 'Espanya', 'Català (ES)'),
    ('Dansk', 'Danmark', 'Dansk (DK)'),
    ('Deutsch', 'Deutschland', 'Deutsch (DE)');   

INSERT INTO currency 
    (cur_country, cur_type, cur_symbol) 
VALUES
    ('United States dollar', 'USD-$', '$  USD'),
    ('Australian dollar', 'AUD-$', '$  AUD'),
    ('Brazillian real', 'BRL-R$', 'R$  BRL'),
    ('Bulgarian lev', 'BGN-лв', 'лв  BGN'),
    ('Candian dollar', 'CAD-$', '$  CAD'),
    ('EURO', 'EUR-€', '€  EUR'),
    ('Japanese yen', 'JPY-¥', '¥  JPY');

INSERT INTO amenities 
    (symbol, sym_descrip) 
VALUES
    ('queen bed', 'https://www.palms.com/wp-content/uploads/2022/10/Bed-Fixed.png'),
    ('single bed', 'https://www.bringfido.com/assets/images/illustrations/beds/units/1-1%40lg.png'),
    ('wifi', 'https://cdn-icons-png.flaticon.com/512/467/467522.png'),
    ('Private patio or balcony', 'https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/balcony-icon.png'),
    ('Hair dryer', 'https://cdn-icons-png.flaticon.com/512/6367/6367568.png'),
    ('Bed linens', 'https://voya-havana.com/wp-content/uploads/2022/03/Egyptian-Cotton-Sheets.png'),
    ('TV', 'https://cdn1.iconfinder.com/data/icons/hotel-app-website-software-program-1/512/Hotel_App_Outlined_lineart_modern_hostel_lodge_facility_facilities_amenities_amenity_TV_television-512.png'),
    ('Heat', 'https://cdn2.iconfinder.com/data/icons/room-facilities-part-1/64/_Heating-512.png'),
    ('Smoke alarm', 'https://icons.veryicon.com/png/128/business/office-configuration/smoke-detector-2.png'),
    ('Freezer', 'https://cdn-icons-png.flaticon.com/512/333/333511.png'),
    ('Private entrance', 'https://icons-for-free.com/download-icon-door-1321215617330160161_512.png'),
    ('Outdoor furniture', 'https://cdn.shopify.com/s/files/1/0423/4649/files/Outdoor_Furniture_Icon_44a36797-612f-4138-8273-24d9cad0064b_1600x.png?v=1614324803'),
    ('Free parking on premises', 'http://cdn.onlinewebfonts.com/svg/img_22967.png'),
    ('Self check-in', 'https://cdn-icons-png.flaticon.com/512/263/263069.png'),
    ('Pets allowed', 'https://icons.veryicon.com/png/o/miscellaneous/commonly-used-2/paw-9.png'),
    ('Smoking', 'https://cdn3.iconfinder.com/data/icons/restaurants-1-1/66/68-512.png'),
    ('Air conditioning', 'https://icons.veryicon.com/png/o/transport/car-dashboard-symbol/air-conditioner-4.png');


INSERT INTO users 
    (firstname, lastname, host, email)
VALUES   
    ('Javier', 'Torres', true, 'jt123@gmail.com'),
    ('Steve', 'Dean', true, 'sd123@outlook.com'),
    ('Nicholas', 'Lawton', true, 'nl123@outlook.com'),
    ('Shawn', 'Couch', true, 'sc123@gmail.com'),
    ('Hank', 'Hill', false, 'hh123@gmail.com'),
    ('Steve', 'Stover', false, 'ss123@gmail.com'),
    ('Jim', 'Bob', false, 'jb123@gmail.com'),
    ('Alice', 'Glass', false, 'ag123@gmail.com'),
    ('Glen', 'Smith', false, 'gs123@gmail.com'),
    ('Ninki', 'Minjaj', true, 'nm123@gmail.com');

INSERT INTO properties 
    (propertyName, stars, reviewsNum,
    city, state, country, about, 
    lat, long, guests, rooms, beds, baths, 
    price, cleaning, fee, locationInfo, hostID, coHostID)
VALUES
    ('Baggin House', 4.65, 12, 'Hobbiton', 'Matamata', 'New Zealand', 'Welcome to Bilbo Baggins'' charming abode nestled in the lush greenery of Hobbiton, Matamata, New Zealand! This single-story home is the perfect getaway for any fantasy enthusiast, boasting amenities that are truly one-of-a-kind. Accommodating up to 2 guests, this cozy retreat features a spacious master bedroom complete with a plush queen-sized bed, ensuring a restful night''s sleep. The luxuriously appointed outhouse is just a few steps away, providing all the modern comforts one would expect in a Hobbit''s home. But the true gem of this property is its eccentric tub, perfect for a relaxing soak after a long day exploring the Shire. You''ll feel like you''re in a fairytale as you soak in the tub, surrounded by the lush greenery of Hobbiton. Please note that while this home is truly magical, it only offers amenities one would expect from a fantasy home. So if you''re looking for a break from reality and a chance to experience life as a Hobbit, book your stay at Bilbo Baggins'' home today!',
    -37.857759, 175.679769, 2, 1, 1, 1, 500, 100, 100, 'Nestled in a lush garden, this charming abode offers a serene retreat for travelers seeking a unique Middle-earth experience. Just a short stroll away, you''ll find the iconic Green Dragon Inn, where you can savor a pint of ale and enjoy traditional hobbit fare. Explore the picturesque countryside, hike to the top of the nearby hills for breathtaking views, or visit the nearby sheep farm for a hands-on agricultural experience. This magical destination offers something for everyone, and Bilbo''s home is the perfect starting point for your adventure.', 
    1, 10);

INSERT INTO user_properties
    (hostID, coHostID, propertyID)
VALUES
    (1, 2, 1);

INSERT INTO propertyImages
    (propertyID, image)
VALUES
    (1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Baggins_residence_%27Bag_End%27_with_party_sign.jpg/2560px-Baggins_residence_%27Bag_End%27_with_party_sign.jpg'),
    (1, 'https://i.pinimg.com/564x/de/0c/ec/de0cecae4c9c4fe0ba4c44e88d697ecc--hobbit-home-the-hobbit.jpg'),
    (1, 'https://www.neverendingvoyage.com/wp-content/uploads/2020/04/hobbiton-new-zealand-9-1100x733.jpg'),
    (1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JPULDDeQSQnmUCrEZOnFsq1rL8TypxEEOtscKel-w20RiDiibCzryI4WH22wvRfZ9qeaYY9I0Es&usqp=CAU&ec=48600113'),
    (1, 'https://live.staticflickr.com/4552/37628409425_d42e42c57f_b.jpg'),
    (1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Inside_The_Green_Dragon_inn.jpg/1200px-Inside_The_Green_Dragon_inn.jpg');

INSERT INTO reviews
    (propertyID, review, rating, userID)
VALUES
    (1, 'Super Duper', 5, 6),
    (1, 'I had so much fun', 5, 8),
    (1, 'This place is awful. On god frfr', 1, 5),
    (1, 'It was alright', 3, 4),
    (1, 'Gee Golly this is cool', 5, 2),
    (1, 'smells weird and I found a bug outside', 2, 7);
    