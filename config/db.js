const mongoose = require("mongoose");
const dev = require("./config");

const dbURl = dev.db.url;

mongoose.set('strictQuery', true);

mongoose.connect(dbURl)
    .then(() => {
        console.info("=======================================================");
        console.info("Database is connected.");
        console.info("=======================================================");
    })
    .catch((error) => {
        console.info("=======================================================");
        console.log(error);
        console.info("=======================================================");
        process.exit(1);
    });