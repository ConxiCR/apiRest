
const router = require('express').Router();

const Trip = require('../../models/trip.model');

router.get('/', async (req, res) => {
    //res.json('Todo OK');
    try {
        //recuperamos todos los trips
        const trips = await Trip.find();
        res.json(trips);

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error'});
    }
});

router.post('/', async (req, res) => {
    //res.json('Texto random');
    try {
        const newTrip = await Trip.create(req.body);
        res.json(newTrip);

    } catch (error) {
       res.status(500).json({ error: 'Ha ocurrido un error'}); 
    }
   

});

router.put('/:tripId', async(req, res)=> {
    //res.json('Todo OK');
    try {
        const tripEdit = await Trip.findByIdAndUpdate(
            req.params.tripId,
            req.body,
            {new: true}
        );
        res.json(tripEdit);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error'});
    }
});

module.exports = router;