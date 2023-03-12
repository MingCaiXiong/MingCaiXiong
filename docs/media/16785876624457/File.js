const {Sequelize} = require('sequelize');
const sequelize = require('./sequelize');

// 测试连接
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const File = sequelize.define('file', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bucket: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    objectName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    etag: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
(async () => {
    try {
        // 检查当前数据库状态并根据模型定义自动更新表结构 例如，要强制执行同步并输出日志
        await sequelize.sync({ force: true, logging: console.log });

        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('An error occurred while synchronizing the models:', error);
    }
})();
module.exports = File;
