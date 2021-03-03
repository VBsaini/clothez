const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/clothe-z", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
const clothesSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    category: String,
    images: Array,
    description: String,
});

const clothes = mongoose.model("clothes", clothesSchema);

app.get("/db", (req, res) => {
    clothes.find().then((data) => {
        res.send(data);
    });
});
app.post("/clothes", (req, res) => {
    new clothes({
        name: req.body.Name,
        type: req.body.Type,
        images: req.body.images,
        price: req.body.Price,
        description: req.body.Description,
    })
        .save()
        .then((data) => {
            res.send(data);
        });
});
app.get("/deleteall", (req, res) => {
    clothes.deleteMany().then((data) => res.send(data));
});
app.listen(4000, () => {
    console.log("connected");
});
