const { Router } = require('express');
const { getTiposEquipo, getTiposEquipoUserActivo, createTipoEquipo, getTiposEquipoById, updateTipoEquipoById, deleteTipoEquipoByID } = require('../controllers/tipoEquipo');

const router = Router();

/**
 * Obtener todos los tipos de equipos los cuales los usuarios son activos
 */
router.get('/user-activo', getTiposEquipoUserActivo);

/**
 * Obtener todos los tipos de equipos
 */
router.get('/', getTiposEquipo);

/**
 * Obtener un tipos de equipos por ID
 */
 router.get('/:id', getTiposEquipoById);

/**
 * Crear un tipo de equipo
 */
router.post('/', createTipoEquipo);

/**
 * Actualiza un tipo de equipo por ID
 */
router.put('/:id', updateTipoEquipoById);

/**
 * Actualiza una parte de tipo de equipo
 */
router.patch('/:id', (req, res) => {
    res.json({});
});

/**
 * Borra un tipo de equipo por ID
 */
 router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;