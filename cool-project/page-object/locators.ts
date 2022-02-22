import { Page } from '@playwright/test';

let page: Page;

export const itemTitle = '[class="s-item__info clearfix"] [class="s-item__title"]';
export const itemPrice = '[class="s-item__details clearfix"] [class="s-item__price"]';

export const categoriesFilter = '[class="hl-cat-nav__js-tab"]';
export const appleCategory = '[class="hl-cat-nav__js-link"]';
export const buyItNow = '[class="srp-format-tabs-h2"]';
export const conditionItem = '[class="brm__flyout__btn-label"]';
export const notSpecified = '[class="brm__item-label"]';
export const secondPrice =
    '[class="carousel__snap-point srp-carousel-list__item--large-items srp-carousel-list__item--group-has-title"]';
