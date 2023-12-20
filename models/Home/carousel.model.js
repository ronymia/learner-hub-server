const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
    slider_image: { type: String, requre: true },
    title: { type: String, requre: true },
    summary: { type: String, requre: true }
},
    { timestamps: true });

const carousel = mongoose.model('carousel', carouselSchema);

module.exports = carousel;