const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cardRouter = require('./cardRouter')
const cardGroupRouter = require('./cardGroupRouter')

router.use('/user', userRouter)
router.use('/card', cardRouter)
router.use('/cardgroup', cardGroupRouter)


module.exports = router