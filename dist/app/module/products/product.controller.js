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
exports.ProductController = void 0;
const product_validation_1 = __importDefault(require("./product.validation"));
const product_service_1 = require("./product.service");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        // Zod validation
        const validateProduct = product_validation_1.default.parse(product);
        // send validate product data.
        const createdProduct = yield product_service_1.ProductService.createProductDB(validateProduct);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: createdProduct
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error || error.message || "Something error"
        });
    }
});
const getAllProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const allitem = yield product_service_1.ProductService.getAllProductfromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: searchTerm && allitem.length === 0 ?
                `No product match for ${searchTerm}`
                : searchTerm ? `Products matching search term ${searchTerm} fetched successfully!`
                    : "Product fetched successfully!",
            data: allitem
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"
        });
    }
});
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_service_1.ProductService.deleteProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"
        });
    }
});
const singlePRoductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const singleProduuct = yield product_service_1.ProductService.FindSingleProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: singleProduuct
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"
        });
    }
});
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedata = req.body;
        const result = yield product_service_1.ProductService.updatePRoductfromDB(id, updatedata);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error || "Something error"
        });
    }
});
exports.ProductController = {
    createProductController, getAllProductController, deleteProductController, singlePRoductController,
    updateProductController
};
