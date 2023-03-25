const Router = require('express');
const BasketController = require('../controllers/basketController');
// const checkRole = require('../middlewares/checkRoleMiddleware');

const router = new Router();
router.get('/:id', BasketController.getBasket);
router.patch('/:id', BasketController.addDevice);
router.put('/:id', BasketController.changeAmount);
router.delete('/:id', BasketController.removeDevice);

module.exports = router;
