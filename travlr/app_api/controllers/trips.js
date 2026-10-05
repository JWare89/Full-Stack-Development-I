const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).lean();
        res.status(200).json(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Database error' });
    }
};
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).lean();

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Database error' });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};