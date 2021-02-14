import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//conectar la base de datos
db.authenticate()
    .then(()=>{
        console.log('Base de datos Conectada');
    })
    .catch(error => console.log('Hubo un error ', error));

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitar PUG

app.set('view engine', 'pug');

//obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = 'Agencia de Viajes';
    return next();
});

//Agregar body parser para leer datos del formulario

app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});