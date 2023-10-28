const { Router } = require('express');
const subjectController = require('../controllers/subjectController');

const router = new Router();

router.get('/', subjectController.getAllSubjects);
router.post('/', subjectController.createSubject);

module.exports = router;
