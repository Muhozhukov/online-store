const Router = require('express');
const brandController = require('../controllers/brandController');
const checkRole = require('../middlewares/checkRoleMiddleware');

const router = new Router();
router.post('/', checkRole('Админ'), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
