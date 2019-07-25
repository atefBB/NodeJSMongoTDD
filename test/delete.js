const assert = require("assert");
const Book = require("../src/books");
describe("Book delete test", () => {
    let book1;
    beforeEach((done) => {
        book1 = new Book({
            title: "Odysse"
        })
        book1.save().then(() => {
            done();
        });

    });

    function assertDelete(promise, done) {
        promise.then(() => {
            Book.findOne({
                title: "Odysse"
            }).then((book) => {
                assert(book === null);
                done();
            });
        });
    }

    it("Delete a book by instance", (done) => {
        assertDelete(book1.remove(), done);
    });
    // it("Find a book by ID", (done) => {
    //     Book.findOne({
    //         _id: book1._id
    //     }).then((book) => {
    //         assert(book.title === book1.title);
    //         done();
    //     });
    // });
});