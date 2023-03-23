/* eslint-disable quote-props */
/* eslint-disable no-underscore-dangle */
const Basket = require('../models/basket');
const Device = require('../models/device');

class BasketController {
  async getBasket(req, res) {
    const { id } = req.params;
    Basket.findOne({ userId: id })
      .populate('devices.device')
      .then((basket) => res.send(basket));
  }

  async addDevice(req, res) {
    const userId = req.params.id;
    const deviceId = req.body.id;
    const device = await Device.findById(deviceId);
    const basket = await Basket.findOne({ userId });
    const pushingItem = {
      device: deviceId,
      amount: 1,
      total_price: device.price,
    };
    basket.devices.push(pushingItem);
    basket.total_price = device.price + basket.total_price;
    await basket.save();
    res.send(basket);
  }

  async increaseAmountOfDevices(req, res) {
    const userId = req.params.id;
    const deviceId = req.body.id;
    const basket = await Basket.findOne({ userId });
    const editableDevice = basket.devices.find((item) => item.device._id === deviceId);
    editableDevice.amount += 1;
    basket.save();
    res.send(basket);
  }

  async decreaseAmountOfDevices(req, res) {
    const userId = req.params.id;
    const deviceId = req.body.id;
    const basket = await Basket.findOne({ userId });
    const editableDevice = basket.devices.find((item) => item.device._id === deviceId);
    editableDevice.amount -= 1;
    basket.save();
    res.send(basket);
  }

  async removeDevice(req, res) {
    const userId = req.params.id;
    const deviceId = req.body.id;
    const device = await Device.findById(deviceId);
    const basket = await Basket.findOne({ userId });
    basket.devices.pull({ device: deviceId });
    basket.total_price -= device.price;
    await basket.save();
    res.send(basket);
  }
}

module.exports = new BasketController();
