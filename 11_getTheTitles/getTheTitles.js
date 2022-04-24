const getTheTitles = function(books) {
    bookTitles = books.map((book) => {
        return book.title;
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
