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

    bookTitle.innerText = `${newBookTitle.value.toUpperCase()}`;
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
    });

    bookSection.append(card);
}

newBookButton.addEventListener('click', () => {
    creator = document.querySelector('#creator');
    creator.style.display = 'none';

    let library = document.querySelector('section');
    library.style.display = 'grid';

    let titleError = document.createElement('p');
    titleError.classList.add('titleError');
    titleError.innerText = 'Please fill the fields';
    titleError.style.display = 'block';

    let errorMessage = document.querySelector('.titleError');

    if (
        newBookTitle.value === '' ||
        newBookAuthor.value === '' ||
        newBookPages.value === ''
    ) {
        const creatorFields = document.querySelector('#creatorFields');
        const titleLabel = document.querySelector('#titleLabel');
        creator.style.display = 'grid';

        if (errorMessage == undefined) {
            creatorFields.insertBefore(titleError, titleLabel);
        } else {
            errorMessage.style.display = 'block';
        }
    } else {
        if (errorMessage == undefined) {
            addBookToLibrary();
        } else {
            addBookToLibrary();
            errorMessage.style.display = 'none';
        }
    }
});

let darkMode = document.querySelector('#darkMode');

darkMode.addEventListener('click', () => {
    const bodySelector = document.querySelector('body');

    if (bodySelector.style.filter == 'grayscale(100%)') {
        bodySelector.style.filter = '';
        bodySelector.style.backgroundColor = '#a8b0bf';
    } else {
        bodySelector.style.filter = 'grayscale(100%)';
        bodySelector.style.backgroundColor = '#AFAFAF';
    }
});
