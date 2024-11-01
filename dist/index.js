"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const user1 = new User_1.default("asdasdasdasd@gmail.com", "1234", "haha", 12);
console.log(user1.getEmail());
// user2 instance
const user2 = new User_1.default("aaa@gmail.com", "1234", "hoho", 12);
console.log(user2.getAge());
console.log(user2.getPassword());
user2.changePassword("5678");
console.log(user2.getPassword());
