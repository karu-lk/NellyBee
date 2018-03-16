"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// tslint:disable object-literal-sort-keys
var Product = new mongoose_1.Schema({
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
exports.default = mongoose_1.model('Product', Product);
//# sourceMappingURL=Product.js.map