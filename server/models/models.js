const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
});

const CardGroup = sequelize.define('cardGroup', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    subject: { type: DataTypes.STRING },
    topic: { type: DataTypes.STRING },
    ownerId: { type: DataTypes.INTEGER }, // ID владельца группы
});

const Card = sequelize.define('card', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    question: { type: DataTypes.STRING },
    answer: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    groupId: { type: DataTypes.INTEGER }, // ID группы карточек
});

const UserCardGroups = sequelize.define('userCardGroups', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasMany(CardGroup, { foreignKey: 'ownerId' });
CardGroup.belongsTo(User, { foreignKey: 'ownerId' });

CardGroup.hasMany(Card);
Card.belongsTo(CardGroup);

User.belongsToMany(CardGroup, { through: UserCardGroups });
CardGroup.belongsToMany(User, { through: UserCardGroups });

module.exports = {
    User,
    CardGroup,
    Card,
    UserCardGroups,
};
