const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  const orders = [
    {
      tableNumber: 1,
      total: 59000,
      status: "Đang chờ",
      time: "17:59",
    },
  ];
  res.render("shop", { orders, pageTitle: "Shop", path: "/" });
});

module.exports = router;
