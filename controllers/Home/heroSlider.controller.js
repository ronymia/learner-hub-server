const { heroSlider } = require("../../models/Home")

const creatHeroSlider = async (req, res) => {
    const data = req.body;
    await heroSlider.create({
        slider_image: data.slider_image,
        title: data.title,
        summary: data.summary
    }, (err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                data: null,
                message: 'Invalide Data'
            })
        }
        if (result) {
            res.status(201).send({
                success: true,
                data: result,
                message: 'Successfully create data'
            })
        }
    })
}

const getHeroSlider = (req, res) => {
    heroSlider.find({}, (err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                data: null,
                message: 'Invalide Data'
            })
        }
        else {
            res.status(200).send({
                success: true,
                data: result,
                message: 'Successfully get data'
            })
        }
    })
}


module.exports = {
    creatHeroSlider,
    getHeroSlider
};