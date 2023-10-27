
const { Card } = require('../models/models')
const ApiError = require('../error/ApiError');
class cardController {
    async create(req, res, next) {
        try {
            const { question, answer, status, cardGroupId } = req.body
            // add an image file?
            const card = await Card.create({ question, answer, status, cardGroupId });

            return res.json(card)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let { cardGroupId, limit, page } = req.query

        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let cards;
        if (!cardGroupId) {
            cards = await Card.findAndCountAll({ limit, offset })
        }
        else {
            cards = await Card.findAndCountAll({ where: { cardGroupId }, limit, offset })
        }
        return res.json(cards)
    }

    async getOne(req, res) {
        const { id } = req.params
        const card = await Card.findOne({ where: { id } })
        return res.json(card)
    }
}

module.exports = new cardController()