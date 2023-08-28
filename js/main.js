const modifires = {
  imgSHowcaseActiveBotton: 'img-showcase__active-thumbnail-button',
  shoppingCardModalOpen: 'site-header__cart-modal--open',
  lightboxOpen: 'lightbox__open'
}


// SHOPPING CARD
const elSiteHeaderCardLink = document.querySelector('.js-site-header__cart-link');
const elShoppingCardModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCardLink) {
  elSiteHeaderCardLink.addEventListener('click', function(evt){
    evt.preventDefault();

    elShoppingCardModal.classList.toggle(modifires.shoppingCardModalOpen);

  });
};

// SHOWCASE THUMBNAILS

const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img')

elsImgShowcaseThumbnailButton.forEach( function (elButton){
  elButton.addEventListener('click', function(){

    // REMOVE ACTIVE CLASS FROM ALL ELEMENTS
    elsImgShowcaseThumbnailButton.forEach( function (elButton){
      elButton.classList.remove(modifires.imgSHowcaseActiveBotton);
    });
    // ADD ACTIVE CLASS FOR CLICKED ELEMENT
    elButton.classList.add(modifires.imgSHowcaseActiveBotton);

    // UPDATE ACTIVE IMG SRC ACCORDINGLY
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetena} 2x`;
  })
});



// LIGHTBOX

const elImgShowcaseLightboxToggle = document.querySelector('.js-img-showcase__lightbox-toggle');
const elLightbox = document.querySelector('.lightbox')
const elLightboxClose = document.querySelector('.js-lightbox__close')




if (elImgShowcaseLightboxToggle) {
  elImgShowcaseLightboxToggle.addEventListener('click', function () {
    elLightbox.classList.add(modifires.lightboxOpen);
  })
}

if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifires.lightboxOpen);
  })
}

// LIGHTBOX SHOWCASE
const elsImgLightboxThumbnailButton = document.querySelectorAll('.js-img-lightbox__thumbnail-button');
const elImgLightboxShowcaseActiveImg = document.querySelector('.img-lightbox-showcase__active-img')

elsImgLightboxThumbnailButton.forEach( function (elButton){
  elButton.addEventListener('click', function(){

    // REMOVE ACTIVE CLASS FROM ALL ELEMENTS
    elsImgLightboxThumbnailButton.forEach( function (elButton){
      elButton.classList.remove(modifires.imgSHowcaseActiveBotton);
    });
    // ADD ACTIVE CLASS FOR CLICKED ELEMENT
    elButton.classList.add(modifires.imgSHowcaseActiveBotton);

    // UPDATE ACTIVE IMG SRC ACCORDINGLY
    elImgLightboxShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig
    elImgLightboxShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetena} 2x`;
  })
});