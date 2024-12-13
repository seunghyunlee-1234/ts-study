import { input } from './input';
import fs from 'node:fs';
import path from 'node:path';

const app = async () => {

  
  const choice = await input('Are you logging in(1), or signing up(0)?: ');
  const numberChoice = parseInt(choice)
  if (numberChoice === 0) {
    
    const email = await input('What is your email?:')
    const password = await input('What is your password?:')
    const username = await input('What is your username?:')
    fs.appendFileSync('data/users.txt', `${email} ${password} ${username}\n` )
  }
  else {
    const email = await input('What is your email?:')
    const password = await input('What is your password?:')
    const users = fs.readFileSync('data/users.txt', "utf-8")
    console.log(email)
    console.log(password)
    console.log(users)
    const splitUsers = users.split('\n')
    console.log(splitUsers)
  }
};
app();