import fs from 'node:fs';

export class AuthService {
  signUp = (email: string, password: string, username: string) => {
    const isEmailAlreadyExist = this.checkEmailExistence(email, 'data/users.txt');
    if (isEmailAlreadyExist) {
      return false;
    } else {
      fs.appendFileSync('data/users.txt', `${email} ${password} ${username}\n`);
      return true;
    }
  };
  signIn = (email: string, password: string) => {
    const isUserExist = this.checkUser(email, password, 'data/users.txt');
    if (isUserExist) {
      return true;
    } else {
      return false;
    }
  };
  checkEmailExistence = (email: string, userFilePath: string): boolean => {
    const result = fs.readFileSync(userFilePath, 'utf-8');
    const userList = result.split('\n');
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].split(' ')[0] === email) {
        return true;
      }
    }
    return false;
  };
  checkUser = (
    email: string,
    password: string,
    userFilePath: string,
  ): boolean => {
    const result = fs.readFileSync(userFilePath, 'utf-8');
    const userList = result.split('\n');
    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].split(' ')[0] === email &&
        userList[i].split(' ')[1] === password
      ) {
        return true;
      }
    }
    return false;
  };
}
