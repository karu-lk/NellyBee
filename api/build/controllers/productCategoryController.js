"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductCategory_1 = require("../models/ProductCategory");
var ProductCategoryController = /** @class */ (function () {
    function ProductCategoryController() {
        this.router = express_1.Router();
        this.routes();
    }
    ProductCategoryController.prototype.all = function (req, res) {
        ProductCategory_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.json({ error: error });
        });
    };
    ProductCategoryController.prototype.one = function (req, res) {
        var categoryName = req.params.categoryName;
        ProductCategory_1.default.findOne({ categoryName: categoryName })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // create a new post
    ProductCategoryController.prototype.create = function (req, res) {
        var id = req.body.productCategoryId;
        var categoryName = req.body.categoryName;
        var description = req.body.description;
        if (!id || !categoryName) {
            res.status(422).json({ message: 'Missing required fields.' });
        }
        var newProductCategory = new ProductCategory_1.default({
            id: id,
            categoryName: categoryName,
            description: description
        });
        newProductCategory.save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // update post by params of 'slug'
    ProductCategoryController.prototype.update = function (req, res) {
        var categoryName = req.params.categoryName;
        ProductCategory_1.default.findOneAndUpdate({ categoryName: categoryName }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // delete post by params of 'slug'
    ProductCategoryController.prototype.delete = function (req, res) {
        var categoryName = req.params.categoryName;
        ProductCategory_1.default.findOneAndRemove({ categoryName: categoryName })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    ProductCategoryController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:categoryName', this.one);
        this.router.post('/', this.create);
        this.router.put('/:categoryName', this.update);
        this.router.delete('/:categoryName', this.delete);
    };
    return ProductCategoryController;
}());
exports.ProductCategoryController = ProductCategoryController;
var productCategoryController = new ProductCategoryController();
productCategoryController.routes();
exports.default = productCategoryController.router;
//# sourceMappingURL=productCategoryController.js.map