const mongoose = require('mongoose');
// const deviceInfo = require('./deviceInfo');

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'deviceType',
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'deviceBrand',
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  info: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'deviceInfo',
  }],
  img: {
    type: String,
  },
});

module.exports = mongoose.model('device', DeviceSchema);
