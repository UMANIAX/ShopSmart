const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    asin: {type: String, unique: true},
    title: {type: String},
    imgURL: {type: String},
    description: {type: String},
    categories: {type: String},
    price: {type: String},
    reviews: {type: [String], default: []}
})

ProductModel = mongoose.model('product', productSchema)
module.exports = ProductModel