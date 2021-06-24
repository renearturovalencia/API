let pet=require("../models/pets");
let catalogo=require("../../db/catalogo");
module.exports={
    listar:(req,res)=>{
        res.json("{mensaje:'todos los trabajadores',Trabajadores:"+catalogo.listar()+"}")
    },
    buscar:(req,res)=>{
        let id=req.body.id;
        let trabajador=catalogo.buscar(id);
        if(trabajador==null){
            res.json("{mensaje:'no se encontro el trabajador'}")
        }
        else
            res.json("{mensaje:'Se encontró un trabajador id:"+trabajador.id+"}")
            //res.json("{mensaje:'buscar una mascota',nombre:'"+masc ota.nombre+"',raza:'"+mascota.raza+"'}")
    },
    agregar:(req,res)=>{
        console.log(req.body)
        let id=req.body.id; 
        let nombre=req.body.nombre;
        let genero=req.body.genero;
        let edad = req.body.edad;
        let telefono=req.body.telefono;
        let correo=req.body.correo;
        let trabajador= new pet(id,nombre,genero,edad,telefono,correo);
        catalogo.agregar(trabajador);
        res.json("{mensaje:'se agrego un nuevo trabajador',id: '"+req.body.id+ "' name:'"+req.body.nombre+"' genero:'"+req.body.genero+"' edad:'"+req.body.edad+"' telefono:'"+req.body.telefono+ "' correo:'"+req.body.correo+"'}")
    },
    borrar:(req,res)=>{
        let id=req.params.id1; 
        catalogo.eliminar(id);
        res.json("{mensaje:'se elimino un trabajador',id:"+req.params.id+"'}")
    }
}