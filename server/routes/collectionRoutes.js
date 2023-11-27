const { Router } = require('express');
const collectionController = require('../controllers/collectionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.get('/', collectionController.getAllCollections);
router.get('/user', authMiddleware, collectionController.getUserCollections);
router.post('/', authMiddleware, collectionController.createCollection);
router.put('/:id', authMiddleware, collectionController.updateCollection);
router.delete('/:id', authMiddleware, collectionController.deleteCollection);

module.exports = router;
