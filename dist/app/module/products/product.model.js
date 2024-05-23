"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VarientsSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String }
}, { _id: false });
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, required: true, unique: true },
    description: { type: String, trim: true, required: true },
    price: { type: Number, required: true, trim: true },
    category: { type: String, trim: true, required: true },
    tags: { type: [String], required: [true, 'Tags are required here'] },
    variants: [VarientsSchema],
    inventory: {
        quantity: { type: Number },
        inStock: { type: Boolean }
    }
});
const ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.default = ProductModel;
