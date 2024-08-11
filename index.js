const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

require("dotenv").config();

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.29jqe.mongodb.net/subscribers?retryWrites=true&w=majority&appName=Cluster0`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to MongoDB database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

app.use(
    cors({
        origin: "*",
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use("/api", require("./routes/subscribers"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
