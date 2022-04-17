const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

//Middlewear
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
    .connect(
        "mongodb+srv://admin:zVUt3pG27UMK620c@cluster0.6cmqk.mongodb.net/bookStore?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to database"))
    .then(() =>{
        app.listen(5000);
    })
    .catch((err) => console.log(err));


//zVUt3pG27UMK620c