const mongoose = require('mongoose');

const UserBasket = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  devices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'device',
  }],
});

module.exports = mongoose.model('basket', UserBasket);
