const { Router } = require('express');
const { getMarcas, getMarcaById, createMarca, updateMarcaById} = require('../controllers/marca');

const router = Router();

/**
 * Obtener todos las marcas activas
 */
router.get('/', getMarcas);

/**
 * Obtener una marca por ID
 */
 router.get('/:id', getMarcaById);

/**
 * Crear una marca
 */
router.post('/', createMarca);

/**
 * Actualiza una marca por ID
 */
router.put('/:id', updateMarcaById);

module.exports = router;