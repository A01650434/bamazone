CREATE DATABASE bamazon_tableDB;
USE bamazon_tableDB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INT(10) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('warp', 'partySupplies', 12, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('popSocket', 'accesories', 5, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('speakers', 'electronics', 53, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('peppa pig set', 'toys', 48,  18);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('animal planet dinosaur', 'toys', 19, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('duffel bag', 'luggage', 63, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('bows', 'partySupplies', 4, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('hummingbird feeder', 'pets', 17, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mikey clubhouse', 'toys', 30, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('zarbees naturals', 'health', 14, 15);