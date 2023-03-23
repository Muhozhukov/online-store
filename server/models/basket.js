const mongoose = require('mongoose');

const UserBasket = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  devices: [{
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'device',
    },
    amount: {
      type: Number,
      default: 0,
    },
    total_price: {
      type: Number,
      default: 0,
    },
  }],
  total_price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('basket', UserBasket);
