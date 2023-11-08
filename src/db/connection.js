const {Sequelize} = new require("sequelize");
require ("dotenv").config();


// const sequelize = new Sequelize(
//     process.env.SQL_DATABASE,
//     process.env.SQL_USER,
//     process.env.SQL_USER_PASSWORD,
//     {
//         host: process.env.SQL_HOST,
//         port: 3306,
//         dialect: "mysql",
//         dialectOptions:{ssl: "Amazon RDS"},
//         logging: false
//     });
const sequelize = new Sequelize(
    process.env.MYSQL_URI,
    {logging: false,
    dialect: 'mysql'}
    )

try {
    sequelize.authenticate();
} catch(error) {
    console.log(error)
}

module.exports =sequelize;