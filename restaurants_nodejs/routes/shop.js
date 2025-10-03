const express = require("express");

const ordersController = require("../controllers/orders");

const router = express.Router();

router.get("/", ordersController.getOrders);
router.get("/add-order", ordersController.getAddOrder);
router.post("/add-order", ordersController.postAddOrder);

module.exports = router;
