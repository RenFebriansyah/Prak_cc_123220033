import {Sequelize} from "sequelize";

const db = new Sequelize('note_final','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;