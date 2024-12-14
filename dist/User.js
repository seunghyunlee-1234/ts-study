"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // 생성자
    constructor(nickname, age, isStudent) {
        this.nickname = nickname;
        this.age = age;
        this.isStudent = isStudent;
    }
}
const user1 = new User('이승현', 11, true);
console.log(user1);
const user2 = new User('박승현', 19, true);
console.log(user2);
exports.default = User;
