import express from 'express';
import router from './src/routes/router.js';

const port = 3000;
const app = express();
app.use(express.json());
app.use(router)


app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});
