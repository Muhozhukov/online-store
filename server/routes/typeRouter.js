const Router = require('express');
const TypeController = require('../controllers/typeController');
const checkRole = require('../middlewares/checkRoleMiddleware');

const router = new Router();
router.post('/', checkRole('Админ'), TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;
