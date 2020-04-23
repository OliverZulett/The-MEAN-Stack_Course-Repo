"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const passport_1 = __importDefault(require("passport"));
const userRouter = express_1.Router();
userRouter.get('/', user_controller_1.usersList);
userRouter.post('/', user_controller_1.createUser);
userRouter.get('/:id', passport_1.default.authenticate('jwt', { session: false }), user_controller_1.getUserById);
userRouter.put('/:id', passport_1.default.authenticate('jwt', { session: false }), user_controller_1.updateUser);
userRouter.delete('/:id', passport_1.default.authenticate('jwt', { session: false }), user_controller_1.deleteUserById);
exports.default = userRouter;
