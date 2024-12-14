import fs from 'node:fs';

export const checkEmailExistence = (
  email: string,
  userFilePath: string,
): boolean => {
  const result = fs.readFileSync(userFilePath, 'utf-8');
  const userList = result.split('\n');
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].split(' ')[0] === email) {
      return true;
    }
  }
  return false;
};

export const checkUser = (
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
