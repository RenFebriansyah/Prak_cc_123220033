import {Sequelize} from "sequelize";

const db = new Sequelize('Note_Final','rensql','123220033',{
    host: '35.222.111.92',
    dialect: 'mysql',
    port: 3306
});

export default db;