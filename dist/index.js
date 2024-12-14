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
const user_service_1 = require("./user-service");
const app = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        const choice = yield (0, input_1.input)('Are you signing up(0) or logging in(1)? or exit(2):  ');
        const numberChoice = parseInt(choice);
        if (numberChoice === 0) {
            const email = yield (0, input_1.input)('What is your email?:');
            const password = yield (0, input_1.input)('What is your password?:');
            const username = yield (0, input_1.input)('What is your username?:');
            const isEmailAlreadyExist = (0, user_service_1.checkEmailExistence)(email, 'data/users.txt');
            if (isEmailAlreadyExist) {
                console.log('Email already exist!');
            }
            else {
                node_fs_1.default.appendFileSync('data/users.txt', `${email} ${password} ${username}\n`);
                console.log('Sign Up Complete!');
            }
        }
        else if (numberChoice === 1) {
            const email = yield (0, input_1.input)('What is your email?:');
            const password = yield (0, input_1.input)('What is your password?:');
            const isUserExist = (0, user_service_1.checkUser)(email, password, 'data/users.txt');
            if (isUserExist) {
                console.log('Welcome');
                break;
            }
            else {
                console.log('Invalid Email or Password!');
            }
        }
        else {
            console.log('프로그램을 종료합니다.');
            process.exit();
        }
    }
    console.log("반복문이 종료되었다!");
});
app();
