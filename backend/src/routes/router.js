import express from 'express';
import LocationControllers from '../controllers/locationctrl.js';



const router = express.Router();

router.post('/saveLocation', LocationControllers.saveLocation);



export default router;