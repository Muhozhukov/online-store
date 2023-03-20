const mongoose = require('mongoose');

const deviceBrand = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('deviceBrand', deviceBrand);
