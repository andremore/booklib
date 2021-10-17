// Menu
let menuButton = document.querySelector('#menuButton');

creator.style.display = 'none';

let firstTimerCreator = document.querySelector('#firstTimer');
const library = document.querySelector('section');

menuButton.addEventListener('click', (creator) => {
    creator = document.querySelector('#creator');

    firstTimerCreator.style.display = 'none';

    if (creator.style.display == 'none') {
        creator.style.display = 'grid';
        library.style.display = 'none';
    } else {
        creator.style.display = 'none';
        library.style.display = 'grid';
    }
});

firstTimerCreator.addEventListener('click', (creator) => {
    creator = document.querySelector('#creator');

    firstTimerCreator.style.display = 'none';

    if (creator.style.display == 'none') {
        creator.style.display = 'grid';
    } else {
        creator.style.display = 'none';
    }
});

closeButton = document.querySelector('#closeButton');

closeButton.addEventListener('click', () => {
    creator.style.display = 'none';
    library.style.display = 'grid';
});

// titleValidator.validity.valid;

export * from './menu.js';
