// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { LocalStorage } from './local-storages';
import { FoodService } from './food-api-service';
import cartImgURL from '../img/cart.svg';
import cartLightImgURL from '../img/cartLight.svg';
import discountImgURL from '../img/discount.svg';
import { changeCardIconOnClick } from './changeCardIconOnClick';
const filterBoxList = document.querySelector('.filter-box__list');
const popularProductsList = document.querySelector('.popular-products__list');
const discountProductsList = document.querySelector('.discount-products__list');
const popularProductsListResp = document.querySelector(
  '.popular-products__list-responsive'
);
const discountProductsListResp = document.querySelector(
  '.discount-products__list-responsive'
);
export const storage = new LocalStorage();
export const foodService = new FoodService();

mainContentDrawer();
popularContentDrawer();
discountContentDrawer();
changeCardIconOnClick();
export function mainContentDrawer() {
  foodService
    .getBasicFoodList()
    .then(data => {
      console.log(data);
      filterBoxList.innerHTML = createProductsMarkup(data.results);
      storage.saveAllToLocalStorage(data.results);
      storage.defaultApiOptions();
    })
    .catch(error => {
      // TODO ADD NOTIFLIX
      // Notify.failure(
      //   "Error"
      // );
    });
}

// export function contentByOptionsDrawer() {
//   foodService
//     .getFoodListWithOptions()
//     .then(data => {
//       filterBoxList.innerHTML = createProductsMarkup(data.results);
//       storage.saveAllToLocalStorage(data.results);
//     })
//     .catch(error => {
//       // TODO ADD NOTIFLIX
//       // Notify.failure(
//       //   "Error"
//       // );
//     });
// }
export function contentByOptionsDrawer() {
  const savedOptions = storage.getApiOptions();

  foodService
    .getFoodListWithOptions(savedOptions)
    .then(data => {
      filterBoxList.innerHTML = createProductsMarkup(data.results);
      storage.saveAllToLocalStorage(data.results);
    })
    .catch(error => {
      // TODO ADD NOTIFLIX
      // Notify.failure(
      //   "Error"
      // );
    });
}

export function popularContentDrawer() {
  foodService
    .getPopular()
    .then(data => {
      popularProductsList.innerHTML = createPopularMarkup(data);
      popularProductsListResp.innerHTML = createPopularMarkup(data);
    })
    .catch(error => {
      // TODO ADD NOTIFLIX
      // Notify.failure(
      //   "Error"
      // );
    });
}

export function discountContentDrawer() {
  foodService
    .getDiscount()
    .then(data => {
      discountProductsList.innerHTML = createDiscountMarkup(data);
      discountProductsListResp.innerHTML = createDiscountMarkup(data);
    })
    .catch(error => {
      // TODO ADD NOTIFLIX
      // Notify.failure(
      //   "Error"
      // );
    });
}

export function createProductsMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        popularity,
        size,
        is10PercentOff,
      }) => {
        const cartElement = document.createElement('img');
        cartElement.src = cartImgURL;
        cartElement.classList.add('main-cart-icon');

        const discountElement = document.createElement('img');
        discountElement.src = discountImgURL;
        discountElement.classList.add('discount-icon-products');

        const imgToInsert = is10PercentOff
          ? `${discountElement.outerHTML}`
          : '';

        return `<li class="product-card" data-id=${_id}>
        ${imgToInsert}
          <div class="img-container"><a href="${img}"><img class="product-card__img" src="${img}" alt="${name}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${name}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${category}</span></p>
              <p class="info-wrapper__product">Size:<span>${size}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${price}</p> 
               ${cartElement.outerHTML}
            </div>     
          </div>
        </li>`;
      }
    )
    .join('');
}

export function createPopularMarkup(arr) {
  return arr
    .map(({ _id, name, img, category, popularity, size, is10PercentOff }) => {
      const imgElement = document.createElement('img');
      imgElement.src = cartLightImgURL;
      imgElement.classList.add('popular-cart-img');

      const imgElementDown = document.createElement('img');
      imgElementDown.src = cartLightImgURL;
      imgElementDown.classList.add('popular-cart-img-down');

      const discountImgElement = document.createElement('img');
      discountImgElement.src = discountImgURL;
      discountImgElement.classList.add('discount-icon-popular');

      const imgToInsert = is10PercentOff
        ? `${discountImgElement.outerHTML}${imgElementDown.outerHTML}`
        : `${imgElement.outerHTML}`;

      return `      
        <li class="popular-item" data-id="${_id}">
          ${imgToInsert}
          <div class="popular-img-container"><img class="popular-item__img" src="${img}" alt="${name}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${name}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${category}</span></p>
              <p class="info-wrapper__product">Size:<span>${size}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
            </div>             
          </div>
        </li>`;
    })
    .slice(0, 5)
    .join('');
}

export function createDiscountMarkup(arr) {
  return arr
    .map(({ _id, name, img, price }) => {
      const imgElement = document.createElement('img');
      imgElement.src = cartImgURL;
      imgElement.classList.add('cart-img-products');

      const discountImgElement = document.createElement('img');
      discountImgElement.src = discountImgURL;
      discountImgElement.classList.add('discount-cheap');

      return `      
      <li class="discount-item" data-id="${_id}">
   
       ${discountImgElement.outerHTML} 
      <div class="discount-img-container"><a href="${img}"><img class="discount-item__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${name}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${price}</p>
        ${imgElement.outerHTML} 
        </div>        
      </div>
    </li>`;
    })
    .slice(0, 2)
    .join('');
}
