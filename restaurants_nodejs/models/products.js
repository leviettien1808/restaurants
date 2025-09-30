const db = require("../util/database");

module.exports = class Product {
  constructor(id, name, imageUrl, description, price) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {}
};
