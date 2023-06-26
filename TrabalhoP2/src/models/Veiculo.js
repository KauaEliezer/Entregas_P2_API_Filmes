import {Sequelize, DataTypes, Model} from 'sequelize'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite')
})

const Veiculo = sequelize.define('Veiculo',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    marca:{
        type:DataTypes.STRING(120),
        allowNull: false,
    },
    modelo:{
        type:DataTypes.STRING(120),
        allowNull: false,
    },
    valor:{
        type:DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
})


Veiculo.sync()
export default Veiculo
