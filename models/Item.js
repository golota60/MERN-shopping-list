const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
  name: {
    type: String, //the name is going to be of the Strign type
    required: true, //is required, meaning cannot be null basically
  },
  date: {
    type: String,
    default: Date.now,
  },
  //todo
  //importance
  //price
  //numberOf
});

module.exports = Item = mongoose.model('items', ItemSchema, 'items_collection');
