const elSiteHeaderCardLink = document.querySelector('.js-site-header__cart-link');
const elShoppingCardModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCardLink) {
  elSiteHeaderCardLink.addEventListener('click', function(evt){
    evt.preventDefault();

    elShoppingCardModal.classList.toggle('site-header__cart-modal--open')

  })

}