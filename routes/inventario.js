const { Router } = require('express');
const { getInventarios, getInventarioByID, createInventario, updateInventario, uploadImage, getFotoById} = require('../controllers/inventario');

const router = Router();

/**
 * Obtener todos los inventarios
 */
router.get('/', getInventarios);

/**
 * Obtener un inventario por ID
 */
 router.get('/:id', getInventarioByID);

/**
 * Crear un inventario
 */
router.post('/', createInventario);

/**
 * Actualiza un inventario por ID
 */
router.put('/:id', updateInventario);

/**
 * Sube la foto del equipo en el inventario
 */
router.post('/:id/upload-image', uploadImage);

/**
 * foto del equipo en el inventario
 */
router.get('/:id/image', getFotoById);

module.exports = router;