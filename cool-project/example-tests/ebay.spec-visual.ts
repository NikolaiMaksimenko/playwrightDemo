import { expect, test } from '../../fixtures/fixtures';
import { ElectronicPopover } from './page-object/locators';

test.describe('Ebay Visual Tests', () => {
    test('With basic Fixture and navigation inside it: open Electronics tab and check item ', async ({
        homeWithNavigation,
    }) => {
        const screenshotName = 'electronic-item.png';
        await homeWithNavigation.electronicsPopover.hover(
            ElectronicPopover.ElectronicsFiler,
            'Electronics',
        );

        const cellPhoneItem = await homeWithNavigation.electronicsPopover.getItem(
            ElectronicPopover.CellPhonesItem,
            'Cell phones and accessories',
        );
        const screenshot = await cellPhoneItem.screenshot();

        expect(screenshot).toMatchSnapshot({ name: screenshotName });
    });
});
