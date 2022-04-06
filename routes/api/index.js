//enrutador local para las rutas de la api

const router = require('express').Router();

//no le indico la ruta a la file api porque se lo he indicado en el index routes
router.use('/trips', require('./trips.route'));

module.exports = router;