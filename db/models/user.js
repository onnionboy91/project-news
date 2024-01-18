'use strict';
const { Model, ForeignKeyConstraintError } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Word , Comment}) {
      this.hasMany(Word, { foreignKey: 'user_id' });
      this.hasMany(Comment, {foreignKey: 'user_id'})
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      img: {
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',

    }
  );
  return User;
};
