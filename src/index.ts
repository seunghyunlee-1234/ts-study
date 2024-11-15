import { input } from './input'
import User from './User'
import fs from 'node:fs'
import path from 'node:path'

const app = async () => {
    
    const inputName1 = await input("What is your name?: ")
    const nameFilePath = path.join(__dirname, "../data/name.txt")
    fs.appendFileSync(nameFilePath, `${inputName1}\n`)

    const inputName2 = await input("What is your name?: ")
    fs.appendFileSync(nameFilePath, `${inputName2}\n`)

    const inputName3 = await input("What is your name?: ")
    fs.appendFileSync(nameFilePath, `${inputName3}\n`)

    const inputName4 = await input("What is your name?: ")
    fs.appendFileSync(nameFilePath, `${inputName4}\n`)

    }
app()