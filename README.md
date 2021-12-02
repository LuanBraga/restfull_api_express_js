# restfull_api_express_js

dependencies = express, nodemon, config, body-parser, consign and uuidV4.

after download this project you must run => npm i

start api => npm start

GET => /api/v1/products

POST => /api/v1/products/ + req body {
    "code": "",
    "name": "",
    "unitPrice": "",
    "description": "",
    "fabricationDate": "",
    "expirationDate": "",
    "inStock": ""
}

DELETE AND PUT => /api/v1/products/:productId
