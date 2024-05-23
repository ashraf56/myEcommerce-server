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
exports.ProductService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductDB = (products) => __awaiter(void 0, void 0, void 0, function* () {
    // it will prevent duplicate insert item into db
    const existingItem = yield product_model_1.default.findOne({ name: products.name });
    if (existingItem) {
        throw new Error('product already exist');
    }
    const item = yield product_model_1.default.create(products);
    return item;
});
const getAllProductfromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    //set query for search text 
    let query = {};
    if (searchTerm) {
        query = {
            $text: {
                $search: searchTerm
            }
        };
    }
    const items = yield product_model_1.default.find(query);
    return items;
});
// Delete product
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield product_model_1.default.findByIdAndDelete(id);
    return item;
});
const FindSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleitem = yield product_model_1.default.findById(id);
    return singleitem;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updatePRoductfromDB = (id, updatedata) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {
        $set: {
            name: updatedata.name,
            description: updatedata.description,
            price: updatedata.price,
            category: updatedata.category
        }
    };
    const item = yield product_model_1.default.updateOne({ _id: id }, query, { upsert: true });
    return item;
});
exports.ProductService = {
    createProductDB,
    getAllProductfromDB, deleteProductFromDB, FindSingleProductFromDB,
    updatePRoductfromDB
};
