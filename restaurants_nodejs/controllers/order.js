const Product = require("../models/products");

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      console.log("🚀 ~ rows:", rows);
    })
    .catch((err) => console.log(err));
};
