const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create SCHEMA
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//const Item = mongoose.model('Item', ItemSchema);
module.exports = Item = mongoose.model("Item", ItemSchema);
