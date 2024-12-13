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
    const choice = yield (0, input_1.input)('Are you logging in(1), or signing up(0)?: ');
    const numberChoice = parseInt(choice);
    if (numberChoice === 0) {
        const email = yield (0, input_1.input)('What is your email?:');
        const password = yield (0, input_1.input)('What is your password?:');
        const username = yield (0, input_1.input)('What is your username?:');
        node_fs_1.default.appendFileSync('data/users.txt', `${email} ${password} ${username}\n`);
    }
    else {
        const email = yield (0, input_1.input)('What is your email?:');
        const password = yield (0, input_1.input)('What is your password?:');
        const users = node_fs_1.default.readFileSync('data/users.txt', "utf-8");
        console.log(email);
        console.log(password);
        console.log(users);
        const splitUsers = users.split('\n');
        console.log(splitUsers);
    }
});
app();
