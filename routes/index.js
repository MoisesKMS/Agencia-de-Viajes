import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{ //req: lo que enviamos, res: lo que express responde
    res.render('Inicio');
   });

   
router.get('/nosotros', (req, res)=>{ //req: lo que enviamos, res: lo que express responde
    
    const viajes = 'Viaje a Alemania';
    
    res.render('nosotros');
   });

export default router;