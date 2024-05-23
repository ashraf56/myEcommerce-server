"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// products CRUD 
router.post('/createproduct', product_controller_1.ProductController.createProductController);
router.get('/', product_controller_1.ProductController.getAllProductController);
router.delete('/:id', product_controller_1.ProductController.deleteProductController);
router.get('/:id', product_controller_1.ProductController.singlePRoductController);
router.put('/:id', product_controller_1.ProductController.updateProductController);
exports.ProductRouter = router;
