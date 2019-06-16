const assert = require("assert");
const Book = require("../src/books");

describe("Book creation", () => {
    it("Save a book", (done) => {
        const book1 = new Book({
            title: "Harry Potter"
        });

        book1.save().then(() => {
            assert(!book1.isNew);
            done();
        });
    });
});