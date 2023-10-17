const categoryMiddleWare = require("../../middlewares/client/category.middleware")
const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");


module.exports = (app) => {
    app.use(categoryMiddleWare.category)

    app.use('/', homeRoutes)

    app.use('/products', productRoutes);

} 