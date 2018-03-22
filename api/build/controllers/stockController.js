"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Stock_1 = require("../models/Stock");
var StockController = /** @class */ (function () {
    function StockController() {
        this.router = express_1.Router();
        this.routes();
    }
    StockController.prototype.all = function (req, res) {
        Stock_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.json({ error: error });
        });
    };
    StockController.prototype.one = function (req, res) {
        var id = req.params.imageId;
        Stock_1.default.findOne({ id: id })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // create a new post
    StockController.prototype.create = function (req, res) {
        var id = req.body.imageId;
        var imageSequenceNo = req.body.imageSequenceNo;
        var imagePath = req.body.imagePath;
        var description = req.body.description;
        if (!id || !imagePath) {
            res.status(422).json({ message: 'Missing required fields.' });
        }
        var newStock = new Stock_1.default({
            id: id,
            imageSequenceNo: imageSequenceNo,
            imagePath: imagePath,
            description: description
        });
        newStock.save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // update post by params of 'slug'
    StockController.prototype.update = function (req, res) {
        var id = req.params.imageId;
        Stock_1.default.findOneAndUpdate({ id: id }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // delete post by params of 'slug'
    StockController.prototype.delete = function (req, res) {
        var id = req.params.imageId;
        Stock_1.default.findOneAndRemove({ id: id })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    StockController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:imageId', this.one);
        this.router.post('/', this.create);
        this.router.put('/:imageId', this.update);
        this.router.delete('/:imageId', this.delete);
    };
    return StockController;
}());
exports.StockController = StockController;
var stockController = new StockController();
stockController.routes();
exports.default = stockController.router;
//# sourceMappingURL=stockController.js.map