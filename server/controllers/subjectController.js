const { Subject } = require('../models/models');
const ApiError = require('../error/ApiError');

class SubjectController {
    async getAllSubjects(req, res, next) {
        try {
            const subjects = await Subject.findAll();
            res.json(subjects);
        } catch (error) {
            return next(ApiError.internal(error));
        }
    }

    async createSubject(req, res, next) {
        const { name } = req.body;
        try {
            const existingSubject = await Subject.findOne({
                where: { name: name },
            });

            if (existingSubject) {
                return next(ApiError.badRequest('Тема с таким именем уже существует'));
            } else {
                const subject = await Subject.create({ name });
                res.json(subject);
            }
        } catch (error) {
            return next(ApiError.internal(error));
        }
    }
}

module.exports = new SubjectController();
