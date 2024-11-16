import { input } from './input';
import fs from 'node:fs';
import path from 'node:path';

const app = async () => {
  const filePath = path.join(__dirname, '../data/name.txt');
  const inputValue = await input('What is your name?: ');
  fs.appendFileSync(filePath, `${inputValue}\n`);
};
app();
