const { CardGroup } = require('../models/models')
const ApiError = require('../error/ApiError');
class cardGroupController {
    async create(req, res) {
        const { name, subject, topic, ownerId } = req.body
        const cardGroup = await CardGroup.create({ name, subject, topic, ownerId })
        return res.json(cardGroup)
    }

    async getAll(req, res) {
        const cardGroup = await CardGroup.findAll()
        return res.json(cardGroup)
    }

}

module.exports = new cardGroupController()