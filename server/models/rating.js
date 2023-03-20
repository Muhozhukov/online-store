const mongoose = require('mongoose');

const deviceRating = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
});

module.exports = mongoose.model('deviceRating', deviceRating);
