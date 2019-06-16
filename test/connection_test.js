const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/books_test", { 
    useNewUrlParser: true 
});

mongoose.connection.once("open", () => {
    console.log("Connection established")
}).on("error", (err) => {
    console.warn("Connection error: ", err);
});