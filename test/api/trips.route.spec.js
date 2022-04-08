const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Trip = require('../../models/trip.model');

describe('Pruebas sobre la API de trips', () => {

    beforeAll(async() => {
        await mongoose.connect('mongodb://127.0.0.1:27017/apiRest');
    });
    
    //desconexión mongoose después de todas las pruebas
    afterAll(async () => {
        await mongoose.disconnect();
    });

    //rutas: 1ª GET
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
    //2ª POST
    describe('POST/api/trips', () => {

        const newTrip = {name: 'test trip', destination: 'Berlín', category:'friends', star_date: '2022-06-20' }

        /*afterAll(async() => {
            await Trip.deleteMany({name:'test trip'});
        })*/
        //1ª prueba. Ruta funciona
        it('La ruta funciona', async () => {
            const response = await request(app).post('/api/trips').send(newTrip);
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
        //2ª prueba
        it('Se inserta correctamente', async() => {
            
            const response = await request(app).post('/api/trips').send(newTrip);
            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe(newTrip.name);
        
        });
    });
});