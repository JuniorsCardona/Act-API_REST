const { Router } = require('express');

const router = Router();

const { getUsuarios, createUsuario } = require('../controllers/usuario');

/**
 * Obtener todos los usuarios activos
 */
router.get('/', getUsuarios);

/**
 * Obtener un usuarios por ID
 */
 router.get('/:id', (req, res) => {
    res.json({});
});

/**
 * Crear un usuario
 */
router.post('/', createUsuario);

/**
 * Actualiza un usuario por ID
 */
router.put('/:id', (req, res) => {
    res.json({});
});

/**
 * Actualiza una parte del usuario por ID
 */
router.patch('/:id', (req, res) => {
    res.json({});
});

/**
 * Borra un usuario por ID
 */
 router.delete('/:id', (req, res) => {
    res.json({});
});

module.exports = router;