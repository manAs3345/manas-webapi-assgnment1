# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# Assignment 1 - Library System

The Library System consists of a book module. This module allows communication with the books in the library thats stored as an json file. The user can find books based on genre, author the books name and the available books in the library. Users are also able to borrow and return books. 

## Getting Started

To make use of the functions create an `app.js` file.

In order to view the output of the functions. create a variable in `app.js` and assign it to the module. 

>`const book = require('./books.js');`

Once you have imported the module, use the functions provided in the module to interact with the library system. Make use of `console.log()` to display the result in the console. 

## Functions of the library system

**getAllBooks()** - Returns the information of all the books that are available in the library

>Example:<br/>
>`const allBooks = book.getAllBooks();`<br/>`console.log(allBooks);`

**getBooksByGenre(genreName)** - Returns the information of the books with the genre that is passed into the method

>Parameter(s): <br/>
`genreName` - the genre to search all the books by <br/>
Example:<br/>
>`const allArtBooks = book.getBooksByGenre("Art");`<br/>`console.log(allArtBooks);`

**getBooksByAuthor(authorName)** - Returns the information of the books thats written by the author that is passed into the method

>Parameter(s):<br/>
`authorName` - the name of the author to search all the books by<br/>
Example:<br/>
>`const hwBooks = getBooksByAuthor("Henry Winkler");`<br/>`console.log(hwBooks);`

**getBookByName(bookName)** - Returns the book information of the book name thats passed into the method as a parameter

>Parameter(s):<br/>
> `bookName` - the name of the book to search for <br/>
Example:<br/>
>`const beholderBookInfo = book.getBookByName("Beholder");`<br/>`console.log(beholderBookInfo);`

**getAvailableBooks()** - Returns the book info of all the books that are available for borrowing

>Example:<br/>
>`const booksToBorrow = book.getAvailableBooks();`<br/>`console.log(booksToBorrow);`

**borrowBook(bookName, bookAuthor)** - Changes the status of a book to Borrowed in the JSON file which allows users to borrow one book at a time

>Parameter(s):<br/>
> `bookName` - the name of the book to borrow<br/>
> `authorName` - the author of the book to borrow <br/>
Example:<br/>
>`const borrowBook = book.borrowBook("Beholder","Ryan La Sala");`<br/>`console.log(booksToBorrow);`

**returnBook(bookName, bookAuthor)** - Changes the status of a book from "Borrowed" to "Available" provided the book has status of "Borrowed". The user can return a book one at a time using this method

>Parameter(s):<br/>
 > `bookName` - the name of the book to return<br/>
 > `authorName` - the author of the book to return<br/>
Example:<br/>
>`const returnBook = book.returnBook("Beholder","Ryan La Sala");`<br/>`console.log(booksToBorrow);`