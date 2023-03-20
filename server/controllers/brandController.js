const Brand = require('../models/deviceBrand');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    Brand.create({ name })
      .then((brand) => res.send(brand));
  }

  async getAll(req, res) {
    Brand.find({})
      .then((brands) => res.send({ data: brands }));
  }
}

module.exports = new BrandController();
