module.exports = app => {
    const productsDB = app.data.products;
    const controller = {};

    controller.listProducts = (req, res) => res.status(200).json(productsDB);

    return controller;
}