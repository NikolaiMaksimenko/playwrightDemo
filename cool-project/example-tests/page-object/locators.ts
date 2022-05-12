export const itemTitle = '[class="s-item__info clearfix"] [class="s-item__title"]';
export const itemPrice = '[class="s-item__details clearfix"] [class="s-item__price"]';

export const categoriesFilter = '[class="hl-cat-nav__js-tab"]';
export const appleCategory = '[class="hl-cat-nav__js-link"]';
export const buyItNow = '[class="srp-format-tabs-h2"]';
export const conditionItem = '[class="brm__flyout__btn-label"]';
export const notSpecified = '[class="brm__item-label"]';
export const secondPrice =
    '[class="carousel__snap-point srp-carousel-list__item--large-items srp-carousel-list__item--group-has-title"]';

export enum ElectronicPopover {
    ElectronicsFiler = '[class="hl-cat-nav__js-tab"]',
    CellPhonesItem = '[class="hl-cat-nav__js-link"]',
}

export enum PetsPopover {
    PetsFilter = '[class="hl-cat-nav__js-tab"]',
}

// PAGE OBJECT SOLUTION FOR THE CASE OF MULTIPLE MODALS/POPOVERS WITH SAME FUNCTIONAL:

// 1. Create unique enums for elements in popover/modals
// 2. Create basic class with functions which extends string
// 3. Create new class which will initialize our popovers/filters/etc. subclasses
// 4. Make your parent Page Object class which related to #3 step class inherit it

// See ebay-popovers example
