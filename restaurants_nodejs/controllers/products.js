const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
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
      res.render("admin/product-list", {
        products: rows,
        pageTitle: "Danh sách sản phẩm",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId).then(([rows, fieldData]) => {
    if (rows.length > 0) {
      res.render("admin/edit-product", {
        product: rows[0],
        pageTitle: "Chỉnh sửa sản phẩm",
        path: "/admin/products",
      });
    } else {
      res.redirect("/admin/products");
    }
  });
};

exports.postEditProduct = (req, res, next) => {
  const { id, name, price, description } = req.body;
  const product = new Product(id, name, description, price);
  product
    .save()
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
};
