"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = req.body;
        // zod 
        const validateOrder = order_validation_1.default.parse(orders);
        // send validate product data.
        const makeOrder = yield order_service_1.OrderService.createOrderDB(validateOrder);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: makeOrder
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something error"
        });
    }
});
const getAllorderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orderdata = yield order_service_1.OrderService.getAllorder(email);
        // email is not match with orderdata then
        if (email && orderdata.length === 0) {
            throw new Error('no order found');
        }
        res.status(200).json({
            success: true,
            message: email ? "Orders fetched successfully for user email" : "Orders fetched successfully!",
            data: orderdata
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something error"
        });
    }
});
exports.OrderControllers = {
    createOrderController, getAllorderController
};
