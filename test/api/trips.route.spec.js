const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Pruebas sobre la API de trips', () => {

    beforeAll(async() => {
        await mongoose.connect('mongodb://127.0.0.1:2701/apiRest');
    });
    
    //desconexión mongoose después de todas las pruebas
    afterAll(async () => {
        await mongoose.disconnect();
    });

    //rutas: 1ªGET
    describe('GET/api/trips', () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/api/trips').send();
        });
        it('La ruta funciona', async() => {
            
            //métodos para comprobar el status de la respuesta
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('La petición nos devuelve una array de trips', async() => {
            expect(response.body).toBeInstanceOf(Array);
        });
    });

});