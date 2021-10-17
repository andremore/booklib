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

    changeToHasRead.addEventListener('click', () => {
        let hasReadText = document.querySelector('h5');
        hasReadText.innerText = 'Read: Yes';
    });

    changeToHasNotRead.addEventListener('click', () => {
        let hasReadText = document.querySelector('h5');
        hasReadText.innerText = 'Read: No';
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
