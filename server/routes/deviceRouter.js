const Router = require('express');
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middlewares/checkRoleMiddleware');

const router = new Router();
router.post('/', checkRole('Админ'), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.put('/:id', deviceController.rateDevice);

module.exports = router;
