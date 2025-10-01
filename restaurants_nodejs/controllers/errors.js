exports.get404Page = (req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "Trang không tồn tại", path: null });
};
