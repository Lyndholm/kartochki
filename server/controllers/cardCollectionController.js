const { Collection } = require('../models/models');
const { Op } = require('sequelize');

class CollectionController {
    async getAllCollections(req, res, next) {
        try {
            const collections = await Collection.findAll();
            res.json(collections);
        } catch (error) {
            return next(ApiError.internal(error));
        }
    }

    async getUserCollections(req, res, next) {
        const userId = req.user.id;
        try {
            const collections = await Collection.findAll({ where: { author: userId } });
            res.json(collections);
        } catch (error) {
            return next(ApiError.internal(error));
        }
    }

    async createCollection(req, res, next) {
        const { name, description } = req.body;
        const userId = req.user.id;
        try {
            const existingCollection = await Collection.findOne({ where: { name } });

            if (existingCollection) {
                res.status(400).json({ message: 'Коллекция с таким именем уже существует' });
            } else {
                const collection = await Collection.create({ name, description, author: userId });
                res.json(collection);
            }
        } catch (error) {
            next(error);
        }
    }

    async updateCollection(req, res, next) {
        const { id } = req.params;
        const { name, description } = req.body;
        const userId = req.user.id;
        try {
            const existingCollection = await Collection.findOne({
                where: {
                    name,
                    id: { [Op.not]: id },
                    author: userId,
                },
            });

            if (existingCollection) {
                res.status(400).json({ message: 'Коллекция с таким именем уже существует' });
            } else {
                const [updated] = await Collection.update({ name, description }, { where: { id, author: userId } });
                if (updated) {
                    const updatedCollection = await Collection.findByPk(id);
                    res.json(updatedCollection);
                } else {
                    res.status(404).json({ message: 'Коллекция не найдена' });
                }
            }
        } catch (error) {
            next(error);
        }
    }

    async deleteCollection(req, res, next) {
        const { id } = req.params;
        const userId = req.user.id;
        try {
            const deleted = await Collection.destroy({ where: { id, author: userId } });
            if (deleted) {
                await Card.destroy({ where: { collectionId: id } });
                res.json({ message: 'Коллекция удалена' });
            } else {
                res.status(404).json({ message: 'Коллекция не найдена' });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CollectionController();
