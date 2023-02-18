const express = require('express');
const heroSliderRouter = express.Router();

const { getHeroSlider, creatHeroSlider } = require('../../controllers/Home/heroSlider.controller');

heroSliderRouter.get('/', getHeroSlider);
heroSliderRouter.post('/insert', creatHeroSlider);

module.exports = heroSliderRouter;