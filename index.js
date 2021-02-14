import express from 'express';
import router from './routes/index.js'

const app = express();

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitar PUG

app.set('view engine', 'pug');

//obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    
    return next();
});

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});