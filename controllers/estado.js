
const { request, response } = require('express');
const Estado = require('../models/estado');

/**
 * Consultar todos los estados activos
 */
const getEstados = async (req, res = response) => {
    try{
        const query = { estado: true};
        const estadosBD = await Estado.find(query);
        res.json(estadosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * Consultar un estado por ID
 */
const getEstadoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const query = { estado: true, _id: id}; 
        const estadosBD = await Estado.findOne(query);
        res.json(estadosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

/**
 * crea un estado
 */
 const createEstado = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre.toUpperCase();
        const estadoBD = await Estado.findOne({ nombre });
        if(estadoBD){
            return res.status(400).json({msg: 'Estado existente'});
        }
        const datos = {
            nombre
        };
        const estado = new Estado(datos); 
        await estado.save();
        res.status(201).json(estado);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

/**
 * Actualiza un estado por su ID
 */
const updateEstadoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const { nombre, ...data } = req.body;
        const estadoBD = await Estado.findOne({ _id: id });
        if(!estadoBD){
            return res.status(404).json({
                msj: 'Estado no existente'
            });
        }
        data.fechaCreacion = estadoBD.fechaCreacion;
        data.fechaActualizacion = new Date();
        const estado = await Estado.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(estado);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}


module.exports = { getEstados, getEstadoById, createEstado, updateEstadoById };