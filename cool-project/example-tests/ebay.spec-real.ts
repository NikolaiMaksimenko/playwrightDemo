import { EbayPageHome } from './page-object/mainPageObjects/ebayPageHome';
import { expect, test } from '@playwright/test';
import fs from 'fs';
import {
    categoriesFilter,
    appleCategory,
    buyItNow,
    conditionItem,
    itemPrice,
    itemTitle,
    notSpecified,
    secondPrice,
} from './page-object/locators';

test.describe('EBAY test cases', () => {
    test.describe('Apple', () => {
        test('get CSV file from 4 pages with "not specified" filter', async ({ page }) => {
            const ebayPage = new EbayPageHome(page);

            await ebayPage.navigate();

            const electronicCategory = await ebayPage.findLocator(categoriesFilter, 'Electronics');

            await electronicCategory.hover();

            const appleItems = await page.locator(appleCategory, { hasText: 'Apple' });

            const appleItems = await ebayPage.findLocator(appleCategory, 'Apple');

            await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), appleItems.click()]);

            const buyItNowButton = await ebayPage.findLocator(buyItNow, 'Buy It Now');
            await buyItNowButton.click();

            const conditionFilter = await ebayPage.findLocator(conditionItem, 'Condition');
            await conditionFilter.click();

            const notSpecifiedOption = await ebayPage.findLocator(notSpecified, 'Not Specified');

            await Promise.all([page.waitForNavigation(), notSpecifiedOption.click()]);

            const secondPriceInFilterRange = await page.$$(secondPrice);
            await Promise.all([page.waitForNavigation(), secondPriceInFilterRange[1].click()]);

            const iterations = [1, 2, 3, 4, 5];
            const titleArray = [];
            const priceArray = [];

            for (const pageNumber of iterations) {
                const currentPage = page.locator('[class="pagination__item"]', {
                    hasText: `${pageNumber}`,
                });

                if (pageNumber > iterations[0]) {
                    await Promise.all([
                        page.waitForNavigation({ waitUntil: 'load' }),
                        currentPage.click(),
                    ]);
                }

                const titles = await page.$$(itemTitle);
                const prices = await page.$$(itemPrice);

                for (const title of titles) {
                    const text = await (await title.getProperty('textContent')).jsonValue();
                    titleArray.push(text);
                }

                for (const price of prices) {
                    const text = await (await price.getProperty('textContent')).jsonValue();
                    priceArray.push(text);
                }
            }

            const dataArray = titleArray.map((titleValue, price) => {
                return { title: titleValue, price: priceArray[price] };
            });

            fs.writeFile(
                'ebayPriceAndTitles.csv',
                JSON.stringify(dataArray, null, 2),
                'utf8',
                function (err) {
                    if (err) {
                        console.log('Error, data not written to the CSV file!');
                    } else {
                        console.log('File successfully saved!');
                    }
                },
            );

            expect(dataArray.length).toBeGreaterThan(0);
        });
    });
});
