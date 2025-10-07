const moment = require("moment");

const Order = require("../models/Orders");
const Product = require("../models/products");
const OrderItem = require("../models/order-item");

exports.getOrders = (req, res, next) => {
  Order.findAll()
    .then((orders) => {
      const handledOrders = orders
        .filter(
          (order) =>
            moment(order.dataValues.createdAt).format("L") ===
            moment().format("L")
        )
        .map((result) => result.dataValues)
        .sort((a, b) => b.id - a.id);
      res.render("shop/shop", {
        orders: handledOrders,
        pageTitle: "Shop",
        path: "/",
        moment,
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddOrder = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/add-order", {
        products,
        pageTitle: "Tạo đơn mới",
        path: "/add-order",
      });
    })
    .catch((err) => console.log("🚀 ~ err:", err));
};

exports.postAddOrder = (req, res, next) => {
  const { table_number, ...products } = req.body;
  req.user
    .createOrder({ table_number: +table_number })
    .then((order) => {
      const orderId = order.dataValues.id;
      return Object.entries(products)
        .filter(([_, value]) => +value > 0)
        .map(([productId, quantity]) => ({ quantity, orderId, productId }));
    })
    .then((records) => {
      return OrderItem.bulkCreate(records);
    })
    .then((results) => {
      res.redirect("/");
    })
    .catch((err) => console.log("🚀 ~ err:", err));
};
