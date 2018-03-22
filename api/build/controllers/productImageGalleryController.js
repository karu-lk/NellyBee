"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductImageGallery_1 = require("../models/ProductImageGallery");
var ProductImageGalleryController = /** @class */ (function () {
    function ProductImageGalleryController() {
        this.router = express_1.Router();
        this.routes();
    }
    ProductImageGalleryController.prototype.all = function (req, res) {
        ProductImageGallery_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.json({ error: error });
        });
    };
    ProductImageGalleryController.prototype.one = function (req, res) {
        var id = req.params.imageId;
        ProductImageGallery_1.default.findOne({ id: id })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // create a new post
    ProductImageGalleryController.prototype.create = function (req, res) {
        var id = req.body.imageId;
        var imageSequenceNo = req.body.imageSequenceNo;
        var imagePath = req.body.imagePath;
        var description = req.body.description;
        if (!id || !imagePath) {
            res.status(422).json({ message: 'Missing required fields.' });
        }
        var newProductImageGallery = new ProductImageGallery_1.default({
            id: id,
            imageSequenceNo: imageSequenceNo,
            imagePath: imagePath,
            description: description
        });
        newProductImageGallery.save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // update post by params of 'slug'
    ProductImageGalleryController.prototype.update = function (req, res) {
        var id = req.params.imageId;
        ProductImageGallery_1.default.findOneAndUpdate({ id: id }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // delete post by params of 'slug'
    ProductImageGalleryController.prototype.delete = function (req, res) {
        var id = req.params.imageId;
        ProductImageGallery_1.default.findOneAndRemove({ id: id })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    ProductImageGalleryController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:imageId', this.one);
        this.router.post('/', this.create);
        this.router.put('/:imageId', this.update);
        this.router.delete('/:imageId', this.delete);
    };
    return ProductImageGalleryController;
}());
exports.ProductImageGalleryController = ProductImageGalleryController;
var productImageGalleryController = new ProductImageGalleryController();
productImageGalleryController.routes();
exports.default = productImageGalleryController.router;
//# sourceMappingURL=productImageGalleryController.js.map