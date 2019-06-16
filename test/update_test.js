const assert = require("assert");
const Book = require("../src/books");

describe("Book update test", () => {
    let book1;
    let newTitle = "Game of Thrones";
    
    beforeEach((done) => {
        book1 = new Book({
            title: "Moby Dick"
        })

        book1.save().then(() => {
            done();
        });
    });

    function assertTitle(promise, done) {
        promise.then(() => {
            Book.find().then((books) => {
                assert(books[0].title === newTitle);
                done();
            });
        });
    }

    it("Update from instance", (done) => {
        book1.set("title", newTitle);

        assertTitle(book1.save(), done);
    });
    
    it("Update from model", (done) => {
        assertTitle(
            Book.update({
                title: "Moby Dick"
            }, {
                title: newTitle
            }),
            done
        );
    });

    it("Find a book by title and update (findOneAndUpdate)", (done) => {
        assertTitle(
            Book.findOneAndUpdate({
                title: "Moby Dick"
            }, {
                title: newTitle
            }),
            done
        );
    });
    
    it("Find a book by ID and update (findByIdAndUpdate)", (done) => {
        assertTitle(
            Book.findByIdAndUpdate(
                book1._id, 
                { title: newTitle }
            ),
            done
        );
    });
});