const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    nombre: String,
    precio: Number,
    cantidad_existente: Number,
    categoria: String,
    imgUrl: String,
    descripcion: String
}, {
    timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgUrl (filename){
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}
module.exports = mongoose.model('Products', ProductSchema)

