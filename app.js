const express = require('express');
const app = express();
const cors = require('cors');

// import all router
const { heroSliderRouter } = require('./routes/Home');


// middleware ===============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



// ALL ROUTES
app.use('/api/hero-silder', heroSliderRouter);




module.exports = app;