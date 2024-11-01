// OOP: Object Oriented Programming

// class: frame
class User {
    // instance data
    private email: string;
    private password: string;
    private nickname: string;
    private age: number;

    // special method - constructor
    constructor(email: string, password: string, nickname: string, age: number) {
        this.email = email
        this.password = password
        this.nickname = nickname
        this.age = age
    }
    // instance method
    
    getEmail = () => {
        return this.email
    }
    getAge = () => {
        return this.age
    }
    getPassword = () => {
        return this.password
    }
    changePassword = (newPassword: string) => {
       return this.password = newPassword
    }
}

// object: user1, user2 ...

// user1 instance
export default User