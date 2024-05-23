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
exports.OrderService = void 0;
const product_model_1 = __importDefault(require("../products/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrderDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const product = yield product_model_1.default.findById(order.productId); // find product 
    const productQuantity = product === null || product === void 0 ? void 0 : product.inventory.quantity;
    const orderQuantity = order === null || order === void 0 ? void 0 : order.quantity;
    // if  productQuantity is less then orderQuantity then it will throw a error message
    if (productQuantity < orderQuantity) {
        throw new Error('Insufficient quantity available in inventory');
    }
    // it will reduce prduct quantity
    const Finalquantity = productQuantity - orderQuantity;
    //it will set current product quantity into finalQuantity
    product.inventory.quantity = Finalquantity;
    if (Finalquantity === 0) {
        product.inventory.inStock = false;
    }
    yield product.save();
    // making the order
    const orders = yield order_model_1.default.create(order);
    return orders;
});
const getAllorder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (email) {
        query = { email: email };
    }
    const allorder = yield order_model_1.default.find(query);
    return allorder;
});
exports.OrderService = {
    createOrderDB, getAllorder
};
