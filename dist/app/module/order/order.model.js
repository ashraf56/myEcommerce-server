"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: { type: String, required: true, trim: true },
    productId: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number }
});
const OrderModel = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = OrderModel;
