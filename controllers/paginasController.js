import { Viaje } from '../models/Viaje.js';

const paginaInicio = (req, res)=>{ //req: lo que enviamos, res: lo que express responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res)=>{

    //Consultar base de datos
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = (req, res)=>{
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}