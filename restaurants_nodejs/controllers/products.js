const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Thêm sản phẩm",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      console.log("🚀 ~ rows:", rows);
    })
    .catch((err) => console.log(err));
};
