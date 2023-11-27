const { Router } = require('express');

const router = new Router();

const userRoutes = require('./userRoutes')
const subjectRoutes = require('./subjectRoutes')
const cardRoutes = require('./cardRoutes')
const collectionRoutes = require('./collectionRoutes')

router.use('/collections', collectionRoutes);
router.use('/cards', cardRoutes);
router.use('/subjects', subjectRoutes);
router.use('/users', userRoutes);

module.exports = router