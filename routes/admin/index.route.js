const systemConfig = require("../../config/system");

const authMidleware = require("../../middlewares/admin/auth.middleware")

const dashboardRoutes = require("./dashboard.route");
const productRoutes = require("./product.route");
const productCategoryRoutes = require("./product-category.route");
const roleRoutes = require("./role.route");
const accountRoutes = require("./account.route");
const authRoutes = require("./auth.route");


module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", authMidleware.requireAuth, dashboardRoutes);

  app.use(PATH_ADMIN + "/products", authMidleware.requireAuth, productRoutes);

  app.use(PATH_ADMIN + "/products-category", authMidleware.requireAuth, productCategoryRoutes);

  app.use(PATH_ADMIN + "/roles", authMidleware.requireAuth, roleRoutes);
  
  app.use(PATH_ADMIN + "/accounts", authMidleware.requireAuth, accountRoutes);
  
  app.use(PATH_ADMIN + "/auth", authRoutes);

  
}