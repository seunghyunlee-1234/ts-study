import { checkEmailExistence, checkUser } from '../user-service';
import fs from 'node:fs';

export class AuthService {
  signUp = (email: string, password: string, username: string) => {
    // 로직
    const isEmailAlreadyExist = checkEmailExistence(email, 'data/users.txt');
    if (isEmailAlreadyExist) {
      return false;
    } else {
      fs.appendFileSync('data/users.txt', `${email} ${password} ${username}\n`);
      return true;
    }
  };
  signIn = (email: string, password: string) => {
    const isUserExist = checkUser(email, password, 'data/users.txt');
    if (isUserExist) {
      return true;
    } else {
      return false;
    }
  };
}
