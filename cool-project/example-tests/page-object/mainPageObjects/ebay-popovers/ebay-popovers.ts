import { Page } from '@playwright/test';
import { ElectronicPopover, PetsPopover } from '../../locators';
import { PopoverActions } from './ebay-popover-action';

export class EbayPopover {
    public readonly electronicsPopover: PopoverActions<ElectronicPopover>;
    public readonly petsPopover: PopoverActions<PetsPopover>;

    public constructor(page: Page) {
        this.electronicsPopover = new PopoverActions(page);
        this.petsPopover = new PopoverActions(page);
    }
}
