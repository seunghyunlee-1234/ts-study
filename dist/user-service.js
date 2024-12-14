"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = exports.checkEmailExistence = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const checkEmailExistence = (email, userFilePath) => {
    const result = node_fs_1.default.readFileSync(userFilePath, 'utf-8');
    const userList = result.split('\n');
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].split(' ')[0] === email) {
            return true;
        }
    }
    return false;
};
exports.checkEmailExistence = checkEmailExistence;
const checkUser = (email, password, userFilePath) => {
    const result = node_fs_1.default.readFileSync(userFilePath, 'utf-8');
    const userList = result.split('\n');
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].split(' ')[0] === email &&
            userList[i].split(' ')[1] === password) {
            return true;
        }
    }
    return false;
};
exports.checkUser = checkUser;
