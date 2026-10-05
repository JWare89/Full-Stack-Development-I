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

module.exports = {
    tripsList
};