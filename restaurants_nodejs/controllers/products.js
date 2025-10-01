const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Thêm sản phẩm",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const { name, price, description } = req.body;
  const product = new Product(null, name, description, price);
  product
    .save()
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("products", {
        products: rows,
        pageTitle: "Danh sách sản phẩm",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};
