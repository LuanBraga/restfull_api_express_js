const uuid = require('uuid/v4');

module.exports = app => {
    const productsDB = app.data.products;
    const controller = {};
    const {products: productsMock} = productsDB;

    controller.listProducts = (req, res) => res.status(200).json(productsDB);
    
    controller.saveProducts = (req, res) => {
        productsMock.data.push({
            id: uuid(),
            code: req.body.code,
            name: req.body.name,
            unitPrice: req.body.unitPrice,
            description: req.body.description,
            fabricationDate: req.body.fabricationDate,
            expirationDate: req.body.expirationDate,
            inStock: req.body.inStock,
        });

        res.status(201).json(productsMock);
    }
    return controller;
}