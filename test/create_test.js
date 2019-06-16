const assert = require("assert");
const Book = require("../src/books");

describe("Book creation", () => {
    it("Save a book", () => {
        const book1 = new Book({
            title: "Harry Potter"
        });

        book1.save();
    });
});