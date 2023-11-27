const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    description: DataTypes.STRING,
});


const Card = sequelize.define('Card', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
});


const Subject = sequelize.define('Subject', {
    name: {
        type: DataTypes.STRING,
        unique: true,
    }
});


const Collection = sequelize.define('Collection', {
    name: {
        type: DataTypes.STRING,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: 'Без описания',
    },
});

const UserCardStatus = sequelize.define('UserCardStatus', {
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});


User.hasMany(Card, { foreignKey: 'author' });
Card.belongsTo(User, { foreignKey: 'author' });

User.hasMany(Collection, { foreignKey: 'author' });
Collection.belongsTo(User, { foreignKey: 'author' });

Collection.belongsTo(Subject, { foreignKey: 'subject' });
Subject.hasMany(Collection, { foreignKey: 'subject' });

Collection.hasMany(Card, { foreignKey: 'collectionId' });
Card.belongsTo(Collection, { foreignKey: 'collectionId' });

User.belongsToMany(Collection, { through: 'FavoriteCollections' });
Collection.belongsToMany(User, { through: 'FavoriteCollections' });

User.belongsToMany(Card, {
    through: {
        model: 'UserCardStatus',
        unique: true,
    },
    foreignKey: 'userId',
    otherKey: 'cardId',
});

Card.belongsToMany(User, {
    through: {
        model: 'UserCardStatus',
        unique: true,
    },
    foreignKey: 'cardId',
    otherKey: 'userId',
});

module.exports = {
    User,
    Card,
    Subject,
    Collection,
    UserCardStatus,
    FavoriteCollections: sequelize.models.FavoriteCollections,
};
