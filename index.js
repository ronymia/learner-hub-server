const path = require('path');
const app = require('./app');
require("./config/db");
const dev = require('./config/config');



const port = dev.index.port;

//Home Route ==============================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

// route not found error==================================
app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found",
    });
});

// server error ==================================
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something is broken",
    });
});

// listing port =====================================
app.listen(port, () => {
    console.info("=======================================================");
    console.log(`Learner hun running on port http://localhost:${port}`);
    console.info("=======================================================");
});