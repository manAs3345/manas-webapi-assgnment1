# Assignment 1 - Library System

The Library System consists of a book module. This module allows communication with the books in the library. The user can find books based on genre, author, the books name and the available books in the library. Users are also able to borrow and return books. 

## Getting Started

To make use of the functions create an `app.js` file.

In order to view the output of the functions. create a variable in `app.js` and assign it to the module. 

>`const book = require('./Manas_books.js');`

Once you have imported the module, use the functions provided in the module to interact with the library system. Make use of `console.log()` to display the result in the console. 

## Functions of the Library System

**getAllBooks()** - Returns the information of all the books that are available in the library.

>Example:<br/>
>`const allBooks = book.getAllBooks();`<br/>`console.log(allBooks);`

**getBooksByGenre(genreName)** - Returns the information of the books with the genre that is passed into the method.

>Parameter(s): <br/>
`genreName` - the genre to search all the books by <br/>
Example:<br/>
>`const allArtBooks = book.getBooksByGenre("Art");`<br/>`console.log(allArtBooks);`

**getBooksByAuthor(authorName)** - Returns the information of the books thats written by the author that is passed into the method.

>Parameter(s):<br/>
`authorName` - the name of the author to search all the books by<br/>
Example:<br/>
>`const hwBooks = getBooksByAuthor("Henry Winkler");`<br/>`console.log(hwBooks);`

**getBookByName(bookName)** - Returns the book information of the book name thats passed into the method as a parameter.

>Parameter(s):<br/>
> `bookName` - the name of the book to search for <br/>
Example:<br/>
>`const beholderBookInfo = book.getBookByName("Beholder");`<br/>`console.log(beholderBookInfo);`

**getAvailableBooks()** - Returns the book info of all the books that are available for borrowing.

>Example:<br/>
>`const availableBooks = book.getAvailableBooks();`<br/>`console.log(availableBooks);`

**borrowBook(bookName, bookAuthor)** - Changes the status of a book from "Available" to "Borrowed". The user can borrow one book at a time using this method.

>Parameter(s):<br/>
> `bookName` - the name of the book to borrow<br/>
> `authorName` - the author of the book to borrow <br/>
Example:<br/>
>`const borrowBook = book.borrowBook("Beholder","Ryan La Sala");`<br/>`console.log(borrowBook);`

**returnBook(bookName, bookAuthor)** - Changes the status of a book from "Borrowed" to "Available" provided the book has status of "Borrowed". The user can return one book at a time using this method.

>Parameter(s):<br/>
 > `bookName` - the name of the book to return<br/>
 > `authorName` - the author of the book to return<br/>
Example:<br/>
>`const returnBook = book.returnBook("Beholder","Ryan La Sala");`<br/>`console.log(returnBook);`