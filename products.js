const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    ProductName:{
        type:String,
        required:true
    },
    ProductDescription:{
        type:String,
        required:true
    },
    ProductFeature:{
        type:String,
        required:true
    },
    ProductRatings:{
        type:String,
        required:true
    },
    image1:{
        type:String,
        required:true,
    },
    image2:{
        type:String,
        required:true,
    },
    image3:{
        type:String,
        required:true,
    },
    image4:{
        type:String,
        required:true,
    },
    image5:{
        type:String,
        required:true,
    },
    tag:{
        // default:"watch",
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;