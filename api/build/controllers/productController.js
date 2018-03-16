"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Product_1 = require("../models/Product");
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.router = express_1.Router();
        this.routes();
    }
    // get all of the posts in the database
    ProductController.prototype.all = function (req, res) {
        Product_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.json({ error: error });
        });
    };
    // get a single post by params of 'slug'
    ProductController.prototype.one = function (req, res) {
        var sku = req.params.sku;
        Product_1.default.findOne({ sku: sku })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // create a new post
    ProductController.prototype.create = function (req, res) {
        var id = req.body.productId;
        var sku = req.body.sku;
        var productName = req.body.productName;
        var description = req.body.description;
        var productCategory = req.body.productCategory;
        if (!id || !sku || !productName || description || productCategory) {
            res.status(422).json({ message: 'All Fields Required.' });
        }
        var newProduct = new Product_1.default({
            id: id,
            sku: sku,
            productName: productName,
            description: description,
            productCategory: productCategory
        });
        newProduct.save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // update post by params of 'slug'
    ProductController.prototype.update = function (req, res) {
        var sku = req.body.sku;
        Product_1.default.findOneAndUpdate({ sku: sku }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // delete post by params of 'slug'
    ProductController.prototype.delete = function (req, res) {
        var sku = req.body.sku;
        Product_1.default.findOneAndRemove({ sku: sku })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    ProductController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:sku', this.one);
        this.router.post('/', this.create);
        this.router.put('/:sku', this.update);
        this.router.delete('/:sku', this.delete);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
var productController = new ProductController();
productController.routes();
exports.default = productController.router;
//# sourceMappingURL=productController.js.map