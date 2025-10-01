const db = require("../util/database");

module.exports = class Product {
  constructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
      [this.name, this.price, this.description]
    );
  }

  deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {}
};
