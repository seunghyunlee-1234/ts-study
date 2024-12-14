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
const input_1 = require("./input");
const node_fs_1 = __importDefault(require("node:fs"));
const app = () => __awaiter(void 0, void 0, void 0, function* () {
    const choice = yield (0, input_1.input)('Are you signing up(0) or logging in(1)?: ');
    const numberChoice = parseInt(choice);
    if (numberChoice === 0) {
        const email = yield (0, input_1.input)('What is your email?:');
        const password = yield (0, input_1.input)('What is your password?:');
        const username = yield (0, input_1.input)('What is your username?:');
        const isEmailAlreadyExist = checkEmailExistence(email, 'data/users.txt');
        if (isEmailAlreadyExist) {
            console.log("Email already exist!");
        }
        else {
            node_fs_1.default.appendFileSync('data/users.txt', `${email} ${password} ${username}\n`);
            console.log("Sign Up Complete!");
        }
    }
    else {
        const email = yield (0, input_1.input)('What is your email?:');
        const password = yield (0, input_1.input)('What is your password?:');
        const isUserExist = checkUser(email, password, 'data/users.txt');
        if (isUserExist) {
            console.log("Welcome");
        }
        else {
            console.log("Invalid Email or Password. Please sign up first!");
        }
    }
});
app();
const checkEmailExistence = (email, userFilePath) => {
    const result = node_fs_1.default.readFileSync(userFilePath, 'utf-8');
    const userList = result.split('\n');
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].split(" ")[0] === email) {
            return true;
        }
    }
    return false;
};
const checkUser = (email, password, userFilePath) => {
    const result = node_fs_1.default.readFileSync(userFilePath, 'utf-8');
    const userList = result.split('\n');
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].split(" ")[0] === email && userList[i].split(" ")[1] === password) {
            return true;
        }
    }
    return false;
};
