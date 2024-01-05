const categoryMiddleWare = require("../../middlewares/client/category.middleware")
const userMiddleware = require("../../middlewares/client/user.middleware");
const userRoutes = require("./user.route");
const chatRoutes = require("./chat.route");
const authMiddleware = require("../../middlewares/client/auth.middleware");

const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");
module.exports = (app) => {
    app.use(categoryMiddleWare.category)

    app.use(userMiddleware.infoUser);

    app.use('/', homeRoutes)

    app.use('/products', productRoutes);

    app.use('/chat', authMiddleware.requireAuth, chatRoutes)

    app.use("/user", userRoutes);

} 