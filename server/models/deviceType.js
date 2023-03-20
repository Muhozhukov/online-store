const mongoose = require('mongoose');

const deviceType = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('deviceType', deviceType);
