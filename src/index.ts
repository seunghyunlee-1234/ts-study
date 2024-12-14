import { input } from './input';
import fs from 'node:fs';
import path from 'node:path';

const app = async () => {
  const choice = await input('Are you signing up(0) or logging in(1)?: ');
  const numberChoice = parseInt(choice);
  if (numberChoice === 0) {
    const email = await input('What is your email?:');
    const password = await input('What is your password?:');
    const username = await input('What is your username?:');
    const isEmailAlreadyExist = checkEmailExistence(email, 'data/users.txt');
    if (isEmailAlreadyExist) {
      console.log("Email already exist!");
    } else {
      fs.appendFileSync('data/users.txt', `${email} ${password} ${username}\n`);
      console.log("Sign Up Complete!")
    }
  } else {
    const email = await input('What is your email?:');
    const password = await input('What is your password?:');
    const isUserExist = checkUser(email, password, 'data/users.txt');
    if (isUserExist) {
      console.log("Welcome");
    } else {
      console.log("Invalid Email or Password. Please sign up first!");
    }
  }
};
app();

const checkEmailExistence = (
    email: string,
    userFilePath: string,
): boolean => {
  const result = fs.readFileSync(userFilePath, 'utf-8');
  const userList = result.split('\n');
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].split(" ")[0] === email) {
      return true;
    }
  }
  return false;
};

const checkUser = (
    email: string,
    password: string,
    userFilePath: string,
): boolean => {
  const result = fs.readFileSync(userFilePath, 'utf-8');
  const userList = result.split('\n');
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].split(" ")[0] === email && userList[i].split(" ")[1] === password) {
      return true;
    }
  }
  return false;
};
