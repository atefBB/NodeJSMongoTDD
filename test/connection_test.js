const mongoose = require("mongoose");

before((done) => {
    mongoose.connect("mongodb://localhost/books_test", {
        useNewUrlParser: true
    });

    mongoose.connection.once("open", () => {
        console.log("Connection established");
        done();
    }).on("error", (err) => {
        console.warn("Connection error: ", err);
    });
});

beforeEach("Delete old books", (done) => {
    const {books} = mongoose.connection.collections;
    books.drop(() => { 
        done(); 
    });
});