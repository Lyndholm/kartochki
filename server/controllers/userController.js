const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJwt = (id, email, username) => {
    return jwt.sign(
        { id, email, username },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { username, email, password } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const checkFirst = await User.findOne({ where: { email } })
        if (checkFirst) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const checkSecond = await User.findOne({ where: { username } })
        if (checkSecond) {
            return next(ApiError.badRequest('Пользователь с таким username уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ username, email, password: hashPassword })
        const token = generateJwt(user.id, user.email, user.username)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({ token })
    }
}

module.exports = new UserController()