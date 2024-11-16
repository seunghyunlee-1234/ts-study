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
const node_path_1 = __importDefault(require("node:path"));
const app = () => __awaiter(void 0, void 0, void 0, function* () {
    const inputName1 = yield (0, input_1.input)('What is your name?: ');
    const nameFilePath = node_path_1.default.join(__dirname, '../data/name.txt');
    node_fs_1.default.appendFileSync(nameFilePath, `${inputName1}\n`);
    const inputName2 = yield (0, input_1.input)('What is your name?: ');
    node_fs_1.default.appendFileSync(nameFilePath, `${inputName2}\n`);
    const inputName3 = yield (0, input_1.input)('What is your name?: ');
    node_fs_1.default.appendFileSync(nameFilePath, `${inputName3}\n`);
    const inputName4 = yield (0, input_1.input)('What is your name?: ');
    node_fs_1.default.appendFileSync(nameFilePath, `${inputName4}\n`);
});
app();
