const { Router } = require('express');
const { getEstados, getEstadoById, createEstado, updateEstadoById } = require('../controllers/estado');

const router = Router();

/**
 * Obtener todos los estados activos
 */
router.get('/', getEstados);

/**
 * Obtener un estado por ID
 */
 router.get('/:id', getEstadoById);

/**
 * Crear un estado
 */
router.post('/', createEstado);

/**
 * Actualiza un estado por ID
 */
router.put('/:id', updateEstadoById);

module.exports = router;