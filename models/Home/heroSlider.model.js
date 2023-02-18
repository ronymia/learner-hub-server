const mongoose = require("mongoose");

const heroSliderSchema = mongoose.Schema({
    created: { type: Date, default: Date.now },
    slider_image: { type: String, requre: true },
    title: { type: String, requre: true },
    summary: { type: String, requre: true }
});

const heroSlider = mongoose.model('hero_slider', heroSliderSchema);

module.exports = heroSlider;