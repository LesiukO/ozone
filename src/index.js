'use strict';


// checkbox start
const checkbox = document.querySelectorAll('#discount-checkbox');

    checkbox.forEach( (elem) => {
        elem.addEventListener('change', function() {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
         });
    });
// checkbox end



// корзина start
const btnCart   = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeCart = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeCart.addEventListener('click', () => {
    modalCart.style.display = '';
    document.body.style.overflow = '';
});
// корзина end>



// работа с товаром start
const   cards       = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        countGoods  = document.querySelector('.counter'),
        cartEmpty   = document.getElementById('cart-empty');

cards.forEach( (card) => {
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card');
        countGoods.textContent = cardsCart.length;
        console.log(cardsCart.length);
    };

});
// работа с товаром end>