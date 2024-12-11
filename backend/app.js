import express from 'express';
import router from './src/routes/router.js';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

app.use(express.json());
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});
