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

let darkMode = document.querySelector('#darkMode');

darkMode.addEventListener('click', () => {
    const bodySelector = document.querySelector('body');

    let moon = document.querySelector("[name='moon']");

    if (bodySelector.style.filter == 'grayscale(100%)') {
        bodySelector.style.filter = '';
        bodySelector.style.backgroundColor = '#a8b0bf';

        moon.setAttribute('type', '');
        moon.setAttribute('name', 'moon');
    } else {
        bodySelector.style.filter = 'grayscale(100%)';
        bodySelector.style.backgroundColor = '#AFAFAF';

        moon.setAttribute('type', 'solid');
    }
});

export * from './menu.js';
