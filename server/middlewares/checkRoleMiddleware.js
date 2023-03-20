const jwt = require('jsonwebtoken');

module.exports = (role) => (req, res, next) => {
  if (req.method === 'OPTIONS') next();
  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer
    if (!token) return res.status(401).send({ message: 'Не авторизован' });
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== role) {
      return res.status(403).send({ message: 'Нет доступа' });
    }
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).send({ message: 'Не авторизован' });
  }
};
