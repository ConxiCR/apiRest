const mongoose = require('mongoose');
const Trip = require('../models/trip.model');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:2701/apiRest');

    //creamos new Trips
    const newTrip = await Trip.create({
        name:'prueba de viaje',
        description: 'prueba de descripción',
        destination: 'Berlín',
        category: 'friends',
        start_date: '2022-04-15',
        end_date: '2022-04-17'
    });
    console.log(newTrip);
})();