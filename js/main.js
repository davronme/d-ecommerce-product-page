const modifires = {
  imgSHowcaseActiveBotton: 'img-showcase__active-thumbnail-button',
  imgLightboxSHowcaseActive: 'img-showcase__active-thumbnail',
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
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox__thumbnail-button');
const elImgLightboxShowcaseActiveImg = elLightbox.querySelector('.img-lightbox-showcase__active-img')
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');


elsImgLightboxThumbnailButton.forEach( function (elButton){
  elButton.addEventListener('click', function(){

    // REMOVE ACTIVE CLASS FROM ALL ELEMENTS
    elsLightboxImgThumbnail.forEach( function (elLightboxImgThumbnail){
      elLightboxImgThumbnail.classList.remove(modifires.imgLightboxSHowcaseActive);
    });
    // ADD ACTIVE CLASS FOR CLICKED ELEMENT
    elButton.parentElement.classList.add(modifires.imgLightboxSHowcaseActive);

    // UPDATE ACTIVE IMG SRC ACCORDINGLY
    elImgLightboxShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig
    elImgLightboxShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetena} 2x`;
  })
});


// CONTROL ELEMENTS

const elImgShowcasePreviosImg = document.querySelector('.img-showcase__previos-img');
const elImgShowcaseNextImg = document.querySelector('.img-showcase__next-img');

// Img Showcase Next Img

if (elImgShowcaseNextImg) {
  elImgShowcaseNextImg.addEventListener('click', function(){
    // find active element
    const elActiveTtem = elLightbox.querySelector('.img-showcase__active-thumbnail');

    // remove active class from element
    elActiveTtem.classList.remove('img-showcase__active-thumbnail')

    // console.log(elActiveTtem)
    // add active class to Next item
    // console.log(elsLightboxImgThumbnail[0]);
    let elNextActiveItem;
    if (elActiveTtem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0]
      // elsLightboxImgThumbnail[0].classList.add('img-showcase__active-thumbnail')
    }
    else{
      elNextActiveItem = elActiveTtem.nextElementSibling
      // elActiveTtem.nextElementSibling.classList.add('img-showcase__active-thumbnail');
    }

    elNextActiveItem.classList.add('img-showcase__active-thumbnail');

    // UPDATE ACTIVE IMG SRC ACCORDINGLY
    elImgLightboxShowcaseActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig
    elImgLightboxShowcaseActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetena} 2x`;

    // // UPDATE ACTIVE IMG SRC ACCORDINGLY
    // elImgLightboxShowcaseActiveImg.src = elNextActiveItem.querySelector('.js-img-lightbox__thumbnail-button').dataset.imgShowcaseBig
    // elImgLightboxShowcaseActiveImg.srcset = `${elNextActiveItem.querySelector('.js-img-lightbox__thumbnail-button').dataset.imgShowcaseBig} 1x, ${elNextActiveItem.querySelector('.js-img-lightbox__thumbnail-button').dataset.imgShowcaseRetena} 2x`;
  })
}

// Img Showcase Previos Img

if (elImgShowcasePreviosImg) {
  elImgShowcasePreviosImg.addEventListener('click', function(){
    // find active element
    const elActiveTtem = elLightbox.querySelector('.img-showcase__active-thumbnail');

    // remove active class from element
    elActiveTtem.classList.remove('img-showcase__active-thumbnail')

    // add active class to Next item
    let elNextActiveItem;
    if (elActiveTtem.previousElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[3]
      // elsLightboxImgThumbnail[0].classList.add('img-showcase__active-thumbnail')
    }
    else{
      elNextActiveItem = elActiveTtem.previousElementSibling
      // elActiveTtem.nextElementSibling.classList.add('img-showcase__active-thumbnail');
    }

    elNextActiveItem.classList.add('img-showcase__active-thumbnail');

    // UPDATE ACTIVE IMG SRC ACCORDINGLY
    elImgLightboxShowcaseActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig
    elImgLightboxShowcaseActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetena} 2x`;

  })
}
