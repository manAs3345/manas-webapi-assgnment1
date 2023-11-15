const booksData = require("./booksInfo.json");
const fs = require('fs');

const allBooks = booksData.books;

//this function returns the current date in the dd-mm-yyyy format
function formatDate(){
    const dd = new Date().getDate().toString();
    const mm = new Date().getMonth().toString();
    const yyyy = new Date().getFullYear().toString();

    return `${dd}-${mm}-${yyyy}`;
}

module.exports = {
    // Returns all the books in the json file
    getAllBooks() {
        return allBooks;
    },
    //Returns all the books that are of the genre passed in getBooksByGenre()
    getBooksByGenre(genreName){
        const genreBooks = allBooks.filter((book)=>book.genre == genreName);
        if (Object.keys(genreBooks).length ==  0) {
            return "Couldn't find books of the genre: " + genreName;
        }
        else{
            return genreBooks;
        }
       
    },
    //Returns books written by the author pased in getBooksByAuthor()
    getBooksByAuthor(authorName){
        const authorBooks = allBooks.filter((book)=>book.author == authorName);
        if (Object.keys(authorBooks).length ==  0) {
            return "Couldn't find books written by: " + authorName;
        }
        else{
            return authorBooks;
        }
    },
    //Returns a book based on the name
    getBookByName(bookName){
       const bookByName = allBooks.filter((book)=>book.name == bookName);
       return bookByName;
    },
    //Returns all books which are available to borrow (of the status "Available")
    getAvailableBooks(){
        const allBooks = booksData.books;
        const availBooks = allBooks.filter((book)=>book.status == "Available");
        return availBooks;
    },
    //Allows a user to borrow a book if it has not been borrowed
    borrowBook(bookName,bookAuthor){
        const allBooks = booksData;
        let changed = false;
        allBooks.books.forEach(element => {
            if(element.name == bookName && element.author == bookAuthor && element.status == "Available"){
                element.status = "Borrowed";
                element.borrowDate = formatDate();
                element.returnDate = null;
                changed = true;
            }
        });
        if(changed == true){
            const booksDatanew = JSON.stringify(allBooks);
            fs.writeFile("books.json",booksDatanew,(err)=>{
                if(err){
                    return "Error occured: " + err;
                }
            });
            return `${bookName} successfully borrowed`;
        }else{
            return 'Unable to borrow book...';
        }
        
    },
    //Allows a user to return a book that they have borrowed
    returnBook(bookName,bookAuthor){
        const allBooks = booksData;
        let changed = false;
        allBooks.books.forEach(element => {
            if(element.status == "Borrowed" && element.name == bookName && element.author == bookAuthor){
                element.status = "Available";
                element.returnDate = formatDate();
                element.borrowDate = null;
                changed = true;
            }    
        });
        if(changed == true){
            const booksDatanew = JSON.stringify(allBooks);
            fs.writeFile("books.json",booksDatanew,(err)=>{
                if(err){
                    return "Error occured: " + err;
                }
            });
            return `${bookName} returned successfully`;
        }else{
            return "Book has not been borrowed";
        }
        
    },

    
}