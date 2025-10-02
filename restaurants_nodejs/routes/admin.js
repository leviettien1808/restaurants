const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/products", productsController.getProducts);
router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);
router.get("/edit-product/:productId", productsController.getEditProduct);
router.post("/edit-product", productsController.postEditProduct);

module.exports = router;
