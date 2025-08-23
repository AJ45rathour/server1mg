// Example using Sequelize ORM for MySQL

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Login = sequelize.define('login', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
});

export default Login;


