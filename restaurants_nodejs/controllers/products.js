const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Thêm sản phẩm",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  req.user
    .createProduct(req.body)
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/product-list", {
        products,
        pageTitle: "Danh sách sản phẩm",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const productId = req.params.productId;
  req.user
    .getProducts({ where: { id: productId } })
    .then((products) => {
      const product = products[0];
      res.render("admin/edit-product", {
        product,
        pageTitle: "Chỉnh sửa sản phẩm",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const { id, name, price, description } = req.body;
  Product.findByPk(id)
    .then((product) => {
      product.name = name;
      product.price = price;
      product.description = description;
      return product.save();
    })
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const { id } = req.body;
  Product.findByPk(id)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
