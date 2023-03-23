// eslint-disable-next-line import/no-extraneous-dependencies
const uuid = require('uuid');
const path = require('path');
const Device = require('../models/device');
const DeviceRating = require('../models/rating');
const deviceInfo = require('../models/deviceInfo');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const {
        name, price, brandId, typeId,
      } = req.body;
      let { info } = req.body;
      const { img } = req.files;
      const fileName = `${uuid.v4()}.jpg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({
        name, price, brandId, typeId, img: fileName,
      });
      // INfo оформить без схемы в бд
      if (info) {
        info = JSON.parse(info);
        info.forEach(async (i) => {
          const devInfo = await deviceInfo.create({
            title: i.title,
            description: i.description,
            // eslint-disable-next-line no-underscore-dangle
            deviceId: device._id,
          });
          console.log(devInfo);
          // eslint-disable-next-line no-underscore-dangle
          // Device.findByIdAndUpdate(device._id, { info: [devInfo._id] });
        });
      }
      return res.send({ data: device });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { typeId, brandId } = req.query;
    let devices;
    if (typeId && brandId) {
      devices = await Device.find({ typeId, brandId });
    }
    if (typeId && !brandId) {
      devices = await Device.find({ typeId });
    }
    if (!typeId && brandId) {
      devices = await Device.find({ brandId });
    }
    if (!typeId && !brandId) {
      devices = await Device.find({});
    }
    res.send({ data: devices });
  }

  async getOne(req, res) {
    const { id } = req.params;
    const info = await deviceInfo.find({ deviceId: id });
    Device.findOne({ _id: id })
      .then((device) => res.send({ info, device }));
  }

  async rateDevice(req, res) {
    const { id } = req.params;
    const { userId, rate } = req.body;
    await DeviceRating.create({
      deviceId: id,
      userId,
      rate,
    });
    const ratings = await DeviceRating.find({ deviceId: id });
    const rateSum = ratings.reduce((acc, number) => acc + number, 0);
    const avgRate = rateSum / ratings.length;
    const ratedDevice = await Device.findByIdAndUpdate(id, { rating: avgRate }, { new: true });
    res.send(ratedDevice);
  }
}

module.exports = new DeviceController();
