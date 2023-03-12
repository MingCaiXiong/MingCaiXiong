const Minio = require("minio");

const createMinioClient = () => {
   return  new Minio.Client({
        endPoint: 'localhost',
        port: 9000,
        useSSL: false,
        accessKey: 'HVETHsd1EfWFSA7m',
        secretKey: 'pmo0HUIzfNJyCHULcmxEgIC1ls3YuJcu'
    });
}

module.exports = {
    createMinioClient
}