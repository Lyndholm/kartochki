const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email, username) => {
    return jwt.sign(
        { id, email, username },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class UserController {
    async registration(req, res, next) {
        const { username, email, password, description } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        try {
            const checkEmail = await User.findOne({ where: { email } });
            if (checkEmail) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'));
            }
            const checkUsername = await User.findOne({ where: { username } });
            if (checkUsername) {
                return next(ApiError.badRequest('Пользователь с таким username уже существует'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ username, email, password: hashPassword, description });
            const token = generateJwt(user.id, user.email, user.username);
            return res.json({ token });
        } catch (error) {
            return next(ApiError.internal('Ошибка при регистрации пользователя'));
        }
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return next(ApiError.notFound('Пользователь не найден'));
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return next(ApiError.badRequest('Указан неверный пароль'));
            }
            const token = generateJwt(user.id, user.email, user.username);
            return res.json({ token });
        } catch (error) {
            return next(ApiError.internal('Ошибка при попытке входа'));
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.username);
        return res.json({ token });
    }
}

module.exports = new UserController();
