const assert = require("assert");
const Book = require("../src/books");

describe("Book read test", () => {
    let book1;
    
    beforeEach((done) => {
        book1 = new Book({
            title: "Harry Potter"
        })

        book1.save().then(() => {
            done();
        });
    });

    it("Find a book by title", (done) => {
        Book.find({
            title: "Harry Potter"
        }).then((books) => {
            assert(books[0]._id.equals(book1._id));
            done();
        });
    });
    
    it("Find a book by ID", (done) => {
        Book.findOne({
            _id: book1._id
        }).then((book) => {
            assert(book.title === book1.title);
            done();
        });
    });
});