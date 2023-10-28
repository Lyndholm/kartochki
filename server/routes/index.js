const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const subjectRouter = require('./subjectRouter')
const cardRouter = require('./cardRouter')
const cardGroupRouter = require('./cardGroupRouter')

router.use('/user', userRouter)
router.use('/subject', subjectRouter)
router.use('/card', cardRouter)
router.use('/cardgroup', cardGroupRouter)


module.exports = router