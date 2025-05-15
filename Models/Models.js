const mongoose = require("mongoose")

const Schema = mongoose.Schema
const holaMundoSchema = new Schema({
    Mesa:{
        type:Number,
        required:true,
        unique:true
    },
    Platos:{
        type:Number, //Separar los strings con coma
        require:false,
        default:""
    }
})

module.exports = mongoose.module("holaMundo",holaMundoSchema)