import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Note = db.define('Notes',{
    penulis: DataTypes.STRING,
    judul: DataTypes.STRING,
    isi: DataTypes.STRING,
    tag: DataTypes.STRING

},{
    freezeTableName:true
});

export default Note;

(async()=>{
    await db.sync();
})();