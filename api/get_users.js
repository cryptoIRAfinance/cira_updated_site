import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    try {
        // Read the JSON file
        const jsonData = await readFile(path.join(__dirname, 'py_bot_users.json'), 'utf8');
        const data = JSON.parse(jsonData);

        // Return the JSON data
        res.status(200).json(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).end('Internal Server Error');
    }
}
