import { readFileSync } from 'fs'
import { join } from 'path'
export const message1 = readFileSync(join(__dirname, '../../Challenges/02/filesData/example_message1.txt'), 'utf-8') // midu
export const message2 = readFileSync(join(__dirname, '../../Challenges/02/filesData/example_message2.txt'), 'utf-8') // codember
export const message3 = readFileSync(join(__dirname, '../../Challenges/02/filesData/example_message3.txt'), 'utf-8') // codember midu
export const message4 = readFileSync(join(__dirname, '../../Challenges/02/filesData/example_message4.txt'), 'utf-8') // play tetris
export const test_message = readFileSync(join(__dirname, '../../Challenges/02/filesData/test_message.txt'), 'utf-8')