const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Trip = require('../../models/trip.model');
const { put } = require('../../routes');

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

        const newTrip = { name: 'test trip', destination: 'Berlín', category:'friends', start_date: '2022-06-20' }
        const wrongTrip = { nombre: 'test trip' };
        //limpieza después de testear las pruebas
        afterAll(async() => {
            await Trip.deleteMany({name:'test trip'});
        });

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
        //3ª prueba
        it('Error en la inserción', async() => {
            const response = await request(app).post('/api/trips').send(wrongTrip);
            expect(response.status).toBe(500);
            expect(response.body.error).toBeDefined();
        });
    });
    //3ª PUT
    describe('PUT/api/trips', () => {

        let trip;
        beforeEach(async() => {
            trip = await Trip.create({ name: 'test trip', destination: 'Barcelona', category: 'friends', start_date: '2022-05-08' });

        });
        afterEach(async() => {
            await Trip.findByIdAndDelete(trip._id);
        });
        it('La ruta funciona', async() => {
            const response = await request(app).put(`/api/trips/${trip._id}`).send({ name: 'trip updated'});
        
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
        it('Se actualiza correctamente', async() => {
            const response = await request(app).put(`/api/trips/${trip._id}`).send({ name: 'trip updated'});
            
            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe('trip updated');
        });
    });
    //4ª DELETE
    describe('DELETE/api/trips',()=> {
        let trip;
        let response;
        beforeEach(async() => {
            trip = await Trip.create({name: 'test trip', destination: 'Barcelona', category: 'friends', start_date: '2022-05-08'})
            response = await request(app).delete(`/api/trips/${trip._id}`).send();
        });
        it('La ruta funciona', async() => {
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
        it('Borra correctamente', async() => {
            expect(response.body._id).toBeDefined();
            
            const foundTrip = await Trip.findById(trip._id);
            expect(foundTrip).toBeNull();
        });
    });
});