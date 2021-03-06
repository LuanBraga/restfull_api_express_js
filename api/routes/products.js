module.exports = app => {
    const controller = app.controllers.products;

    app.route('/api/v1/products')
        .get(controller.listProducts)
        .post(controller.saveProducts);
    
    app.route('/api/v1/products/:productId')
        .delete(controller.removeProducts)
        .put(controller.updateProducts);
}