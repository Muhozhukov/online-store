/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const User = require('../models/user');
const Basket = require('../models/basket');

const generateJwt = (id, email, role) => jwt.sign(
  { id, email, role },
  process.env.SECRET_KEY,
  { expiresIn: '24h' },
);
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      next(ApiError.badRequest('Некорректный email или пароль'));
    }
    const candidate = await User.find({ email });
    if (candidate.length > 0) {
      next(ApiError.badRequest('Пользователь с таким email уже существует'), req, res);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword, role });
    await Basket.create({ userId: user._id });
    const token = generateJwt(user._id, user.email, user.role);
    res.status(200).send({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      next(ApiError.badRequest('Пользователь с таким email не найден'), req, res);
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      next(ApiError.badRequest('Неправильный email или пароль'), req, res);
    }
    const token = generateJwt(user._id, user.email, user.role);
    res.send({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.send({ token });
  }
}

module.exports = new UserController();
