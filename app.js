const express = require('express');

const app = express();

//Config. Express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ruta de pruebas
/*app.get('/', (req, res) => {
    res.send('Todo OK en el servidor')
})*/
//todas las peticiones tienen que ir a la carpeta de rutas
app.use(require('./routes'));

module.exports = app;

