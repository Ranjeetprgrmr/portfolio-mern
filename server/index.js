const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const UserModel = require("./models/Users.js");
const PORT = process.env.PORT || 5000
import path from 'path';

//dotenv configuration
dotenv.config();

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, './client/build')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ContactForm")


app.post('/createUser', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const user = await UserModel.create({ name, email, message });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
    }
    })



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
