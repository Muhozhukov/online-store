const mongoose = require('mongoose');

const deviceRating = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  deviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'device',
  },

});

module.exports = mongoose.model('deviceRating', deviceRating);
