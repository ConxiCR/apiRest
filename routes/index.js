//enrutador global para todas las rutas de la aplicación

//Traer el router de express
const router = require('express').Router();
//cada ve que viene una petición con prefijo /api la envias a esta carpeta
router.use('/api', require('./api'));

module.exports = router;