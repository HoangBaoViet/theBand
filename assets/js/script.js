const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container')
let showBuyModal = () => {
    modal.classList.add('open')
}
for (let buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyModal);
}
let closeBuyModal = () => {
    modal.classList.remove('open')
}

closeBtn.addEventListener('click', closeBuyModal);

modal.addEventListener('click', closeBuyModal)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})