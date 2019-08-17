import filter from './filter';

export default function renderCatalog() {
    const cards          = document.querySelectorAll('.goods .card');
    const catalogWrapper = document.querySelector('.catalog');
    const catalogList    = document.querySelector('.catalog-list');
    const catalogBtn     = document.querySelector('.catalog-button');
    const categories     = new Set();

    cards.forEach( (card) => {
        categories.add(card.dataset.category);
    });

    categories.forEach( (category) => {
        const li = document.createElement('li');
        li.textContent = category;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }

        if (event.target.tagName === 'LI') {
            allLi.forEach( (elem) => {
                if (event.target === elem) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            });
            filter();
        }
    });
};