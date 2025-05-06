const mongoose = require("mongoose");
const validator = require("validator");

const itemSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
