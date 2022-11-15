import { readFileSync } from 'fs'
import { join } from 'path'
export const users = readFileSync(join(__dirname, '../../Challenges/01/filesData/test_data.txt'), 'utf-8');
export const example_users = readFileSync(join(__dirname, '../../Challenges/01/filesData/example_data.txt'), 'utf-8');