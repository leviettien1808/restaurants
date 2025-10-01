const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Thêm sản phẩm",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
