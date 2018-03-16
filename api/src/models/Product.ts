import { model, Schema } from 'mongoose';
import { Double } from 'bson';

// tslint:disable object-literal-sort-keys
const Product: Schema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  SKU: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  productCategory: {
    type: Number,
    required: true
  }
});

export default model('Product', Product);