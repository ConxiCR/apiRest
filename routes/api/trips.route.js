
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
            //1r parametro id para sacarlo de la url
            req.params.tripId,
            //2º valor le pasamos el objeto
            req.body,
            //para que nos devuelva el objeto actualizado y no el anterior
            {new: true}
        );
        res.json(tripEdit);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error'});
    }
});
router.delete('/:tripId', async (req,res) => {
    //res.json('Todo OK');
    try {
        const trip = await Trip.findByIdAndDelete(req.params.tripId);
        res.json(trip);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error'});
    }

});

module.exports = router;