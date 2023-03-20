const DeviceType = require('../models/deviceType');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await DeviceType.create({ name });
    res.send(type);
  }

  async getAll(req, res) {
    DeviceType.find({})
      .then((types) => res.send({ data: types }));
  }
}

module.exports = new TypeController();
