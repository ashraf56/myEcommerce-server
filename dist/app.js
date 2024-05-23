"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/module/products/product.route");
const order_route_1 = require("./app/module/order/order.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Product Crud
app.use('/api/products', product_route_1.ProductRouter);
//Order
app.use('/api/orders', order_route_1.Orderrouter);
app.get('/', (req, res, next) => {
    try {
        res.send({
            message: 'e commerce server'
        });
    }
    catch (error) {
        next(error);
    }
});
// global error handling for all route
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((error, req, res) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Something wrong'
        });
    }
});
exports.default = app;
