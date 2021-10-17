import * as menu from './menu.js';

const newBookButton = document.querySelector('#addBook');
const newBookTitle = document.querySelector('#bookName');
const newBookAuthor = document.querySelector('#bookAuthor');
const newBookPages = document.querySelector('#bookPages');

const hasReadSelector = document.querySelector('#hasRead');

const bookSection = document.querySelector('section');

let myLibrary = [];

// Book Constructor
function Book(title, author, pages, hasRead) {
    return {
        title: title,
        author: author,
        pages: pages,
        hasRead: hasRead,
    };
}

function addBookToLibrary() {
    const book = Book(
        newBookTitle.value,
        newBookAuthor.value,
        newBookPages.value,
        hasReadSelector.options[hasReadSelector.selectedIndex].value
    );

    myLibrary.push(book);

    let card = document.createElement('div');
    let bookTitle = document.createElement('h2');
    let line = document.createElement('hr');
    let bookAuthor = document.createElement('h3');
    let bookPages = document.createElement('h4');

    let bookHasRead = document.createElement('h5');

    let changeHasRead = document.createElement('div');

    let changeHasReadButtons = document.createElement('div');

    let changeHasReadTitle = document.createElement('span');
    changeHasRead.classList.add('changeHasRead');
    changeHasReadTitle.innerText = 'Have you read it?';

    let changeToHasRead = document.createElement('button');
    changeToHasRead.setAttribute('type', 'submit');
    changeToHasRead.innerText = 'Yes';

    let changeToHasNotRead = document.createElement('button');
    changeToHasNotRead.setAttribute('type', 'submit');
    changeToHasNotRead.innerText = 'No';

    const deleteBook = document.createElement('div');
    deleteBook.classList.add('deleteBookContainer');

    const deleteBookButton = document.createElement('button');
    deleteBookButton.setAttribute('type', 'submit');

    deleteBookButton.classList.add('deleteBookButton');
    deleteBookButton.innerText = 'Delete Book';

    bookTitle.innerText = `${newBookTitle.value}`;
    bookAuthor.innerText = `Author: ${newBookAuthor.value}`;
    bookPages.innerText = `Pages: ${newBookPages.value}`;
    bookHasRead.innerText = `Read: ${
        hasReadSelector.options[hasReadSelector.selectedIndex].value
    }`;

    card.classList.add('card');
    card.append(bookTitle, line, bookAuthor, bookPages, bookHasRead);

    card.append(changeHasRead);
    changeHasRead.append(changeHasReadTitle, changeHasReadButtons);
    changeHasReadButtons.append(changeToHasRead, changeToHasNotRead);
    card.append(deleteBook);
    deleteBook.append(deleteBookButton);

    changeToHasRead.addEventListener('click', () => {
        myLibrary[0].hasRead = 'Yes';
        bookHasRead.innerText = `Read: ${myLibrary[0].hasRead}`;
    });

    changeToHasNotRead.addEventListener('click', () => {
        myLibrary[0].hasRead = 'No';
        bookHasRead.innerText = `Read: ${myLibrary[0].hasRead}`;
    });

    deleteBookButton.addEventListener('click', () => {
        myLibrary.splice(0, 1);
        card.style.display = 'none';
        // ${scopeArrayObject}, 1
        console.log(myLibrary);
    });

    bookSection.append(card);
}

newBookButton.addEventListener('click', () => {
    addBookToLibrary();

    creator = document.querySelector('#creator');
    creator.style.display = 'none';

    const library = document.querySelector('section');
    library.style.display = 'grid';
});
