"use strict";
// OOP: Object Oriented Programming
Object.defineProperty(exports, "__esModule", { value: true });
// class: frame
class User {
    // special method - constructor
    constructor(email, password, nickname, age) {
        // instance method
        this.getEmail = () => {
            return this.email;
        };
        this.getAge = () => {
            return this.age;
        };
        this.getPassword = () => {
            return this.password;
        };
        this.changePassword = (newPassword) => {
            return this.password = newPassword;
        };
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.age = age;
    }
}
// object: user1, user2 ...
// user1 instance
exports.default = User;
