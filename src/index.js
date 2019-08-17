'use strict';

// //  ckeckbox start 
// function toggleCheckbox() {
//     const checkbox = document.querySelectorAll('#discount-checkbox');

//     checkbox.forEach( (elem) => {
//         elem.addEventListener('change', function() {
//             if (this.checked) {
//                 this.nextElementSibling.classList.add('checked');
//             } else {
//                 this.nextElementSibling.classList.remove('checked');
//             }
//         });
//     });
// };
// // ---ckeckbox end   


// //  корзина start 
// function toggleCart() {
//     const btnCart   = document.getElementById('cart'),
//           modalCart = document.querySelector('.cart'),
//           closeCart = document.querySelector('.cart-close');

//     btnCart.addEventListener('click', () => {
//         modalCart.style.display = 'flex';
//         document.body.style.overflow = 'hidden';
//     });
//     closeCart.addEventListener('click', () => {
//         modalCart.style.display = '';
//         document.body.style.overflow = '';
//     });    
// };
// // ---корзина end   


// //  Вивод товаров start 
// function addCart() {
//     const cards       = document.querySelectorAll('.goods .card'),
//           cartEmpty   = document.getElementById('cart-empty'),
//           cartWrapper = document.querySelector('.cart-wrapper'),
//           countGoods  = document.querySelector('.counter');

//     cards.forEach( (card) => {
//         const btn = card.querySelector('button');

//         btn.addEventListener('click', () => {
//             const cardClone = card.cloneNode(true);
//             cartWrapper.appendChild(cardClone);
//             showData();

//             const removeBtn = cardClone.querySelector('button');
//             removeBtn.textContent = 'Удалить из корзины';
//             removeBtn.addEventListener('click', () => {
//                 cardClone.remove();
//                 showData();
//             });
//         });

//         function showData() {
//             const cardsCart  = cartWrapper.querySelectorAll('.card'),
//                   cardsPrice = cartWrapper.querySelectorAll('.card-price'),
//                   cardTotal  = document.querySelector('.cart-total span');
//             countGoods.textContent = cardsCart.length;

//             let sum = 0;
//             cardsPrice.forEach( (cardPrice) => {
//                 let price = parseFloat(cardPrice.textContent);
//                 sum += price;
//             });
//             cardTotal.textContent = sum;

//             if (cardsCart.length === 0) {
//                 cartWrapper.appendChild(cartEmpty);
//             } else {
//                 cartEmpty.remove();
//             }
//         };
//     });
// };
// // ---Вивод товаров end


// //  action start 
// function actionPage() {
//     const cards            = document.querySelectorAll('.goods .card'),
//           search           = document.querySelector('.search-wrapper_input'), 
//           searchBtn        = document.querySelector('.search-btn'), 
//           min              = document.getElementById('min'),
//           max              = document.getElementById('max'),
//           discountCheckbox = document.getElementById('discount-checkbox'); 


//     discountCheckbox.addEventListener('change', filter);
//     min.addEventListener('change', filter);
//     max.addEventListener('change', filter);

//     searchBtn.addEventListener('click', () => {
//         const searchText = new RegExp(search.value.trim(), 'i');
//         cards.forEach( (card) => {
//             const title = card.querySelector('.card-title');
//             if (!searchText.test(title.textContent)) {
//                 card.parentNode.style.display = 'none';
//             } else {
//                 card.parentNode.style.display = '';
//             }
//         });
//         search.value = '';
//     });
// };
// // ---action end   

// //  filter start 
// function filter() {
//     const cards      = document.querySelectorAll('.goods .card'),
//     min              = document.getElementById('min'),
//     max              = document.getElementById('max'),
//     discountCheckbox = document.getElementById('discount-checkbox'),
//     activeLi         = document.querySelector('.catalog-list li.active');


//     cards.forEach( (card) => {
//         const cardPrice = card.querySelector('.card-price');
//         const price = parseFloat(cardPrice.textContent);
//         const discount = card.querySelector('.card-sale');

//         card.parentNode.style.display = '';

//         if ((min.value && price < min.value) || (max.value && price > max.value)) {
//             card.parentNode.style.display = 'none';
//         } else if (discountCheckbox.checked && !discount) {
//             card.parentNode.style.display = 'none';
//         } else if (activeLi) {
//             if (card.dataset.category !== activeLi.textContent) {
//                 card.parentNode.style.display = 'none';
//             }
//         }
//     });
// };
// //  ---filter end   


// //  Получение данных с сервера start 
// function getData() {
//     const goodsWrapper = document.querySelector('.goods');

//     return fetch('../db/db.json')
//         .then( (response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error ('Данные не были получены, ошыбка: ' + response.status);
//             }
//         })
//         .then( (data) => {
//             return data;
//         })
//         .catch( err => {
//             console.warn(err);
//             goodsWrapper.innerHTML = '<div style="color: red; font-size: 30px;">Упс что-то пошло не так!</div>';
//         });
// };
// // ---Получение данных с сервера end   


// //  Вивод карточек товара start 
// function renderCards(data) {
//     const goodsWrapper = document.querySelector('.goods');

//     data.goods.forEach( (good) => {
//         const card = document.createElement('div');
//         card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
//         card.innerHTML = `
//                             <div class="card" data-category="${good.category}">
//                                 ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
//                                 <div class="card-img-wrapper">
//                                     <span class="card-img-top"
//                                         style="background-image: url('${good.img}')"></span>
//                                 </div>
//                                 <div class="card-body justify-content-between">
//                                     <div class="card-price" style="${good.sale ? 'color: red' : ''}">${good.price} ₽</div>
//                                     <h5 class="card-title">${good.title}</h5>
//                                     <button class="btn btn-primary">В корзину</button>
//                                 </div>
//                             </div>
//         `;
//         goodsWrapper.appendChild(card);
//     });
// };
// //  ---Вивод карточек товара end   

// //  рендер каталога start 
// function renderCatalog() {
//     const cards          = document.querySelectorAll('.goods .card');
//     const catalogWrapper = document.querySelector('.catalog');
//     const catalogList    = document.querySelector('.catalog-list');
//     const catalogBtn     = document.querySelector('.catalog-button');
//     const categories     = new Set();

//     cards.forEach( (card) => {
//         categories.add(card.dataset.category);
//     });

//     categories.forEach( (category) => {
//         const li = document.createElement('li');
//         li.textContent = category;
//         catalogList.appendChild(li);
//     });

//     const allLi = catalogList.querySelectorAll('li');

//     catalogBtn.addEventListener('click', (event) => {
//         if (catalogWrapper.style.display) {
//             catalogWrapper.style.display = '';
//         } else {
//             catalogWrapper.style.display = 'block';
//         }

//         if (event.target.tagName === 'LI') {
//             allLi.forEach( (elem) => {
//                 if (event.target === elem) {
//                     elem.classList.add('active');
//                 } else {
//                     elem.classList.remove('active');
//                 }
//             });
//             filter();
//         }
//     });
// };
// //  ---рендер каталога end   



import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';

(async function() {
    const db = await getData();
    renderCards(db);
    renderCatalog();
    toggleCheckbox();
    toggleCart();
    addCart();
    actionPage();
}());







