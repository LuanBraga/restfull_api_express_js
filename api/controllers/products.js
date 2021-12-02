const uuid = require('uuid/v4');
const products = require('../routes/products');

module.exports = app => {
    const productsDB = app.data.products;
    const controller = {};
    const {products: productsMock} = productsDB;

    //GET METHOD
    controller.listProducts = (req, res) => res.status(200).json(productsDB);
    
    //POST METHOD
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
    };

    //DELETE METHOD
    controller.removeProducts = (req, res) => {
        const {
            productId
        } = req.params;

        const foundProductIndex = productsMock.data.findIndex(product => product.id === productId);

        if (foundProductIndex === -1) {
            res.status(404).json({
                message: 'Product not found on base',
                success: false,
                products: productsMock,
            });
        }else {
            productsMock.data.splice(foundProductIndex, 1);
            res.status(200).json({
                message: 'Product found and deleted with success',
                success: true,
                products: productsMock,
            });
        }
    };

    //PUT METHOD
    controller.updateProducts = (req, res) => {
        const {
            productId
        } = req.params;

        const foundProductIndex = productsMock.data.findIndex(product => product.id === productId);

        if (foundProductIndex === -1) {
            res.status(404).json({
                message: 'Product not found on base',
                success: false,
                products: productsMock
            });
        }else {
            const newProduct = {
                id: uuid(),
                code: req.body.code,
                name: req.body.name,
                unitPrice: req.body.unitPrice,
                description: req.body.description,
                fabricationDate: req.body.fabricationDate,
                expirationDate: req.body.expirationDate,
                inStock: req.body.inStock,
            }

            productsMock.data.splice(foundProductIndex, 1, newProduct);

            res.status(200).json({
                message: 'Product found and updated with success',
                success: true,
                products: productsMock,
            });
        }
    };

    return controller;
}