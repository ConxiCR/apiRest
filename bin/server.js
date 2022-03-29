const http = require('http');
const app = require('../app');

//generamos el servidor
const server = http.createServer(app);

//Arrancamos el servidor
server.listen(3000);

server.on('listening', () => {
    console.log('El servidor está escuchando en el puerto 3000');
});