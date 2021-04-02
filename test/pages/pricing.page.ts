import {BasePage} from './base/base.page';
import {CurrencyOption, PeriodOption} from '../enums/enums';
import {MenuPage} from "./menu.page";

export class PricingPage extends BasePage {

    private menu: MenuPage;
    constructor() {
        super();
        this.menu = new MenuPage();
    }

    //region locators

    private pricingOption(optionName: string) {
        return {
            discountPriceLabel: () => {
                return browser.$(`${this.getPricingContainer(optionName)}//div[contains(@class,'price-discount')]`);
            },
            currentPriceLabel: () => {
                return browser.$(`${this.getPricingContainer(optionName)}//div[contains(@class,'plan-price')]`);
            },
            getStartedButton: () => {

            }
        }
    }

    private periodOption(periodName: string) {
        return browser.$(`//ul[contains(@class,'btn-group')]//span[contains(text(),'${periodName}')]`);
    }

    private rentalSliderContainer() {
        return $('.slider-tick-label-container');
    }

    private rentalSlider() {
        return browser.$('.slider-handle.min-slider-handle.round');
    }

    private rentalSelectedNumber() {
        return browser.$('#scroll-prop-plan');
    }

    private currencyDropdown() {
        return browser.$('.price-currency-select');
    }

    private getPricingContainer(optionName: string) {
        return `//h6[text()='${optionName}']/ancestor::div[@class='price-item']`;
    }

    //endregion

    //region getters

    getCurrentPrice(optionName: string) {
        return this.getElementText(this.pricingOption(optionName).currentPriceLabel());
    }

    getDiscountPrice(optionName: string) {
        return this.getElementText(this.pricingOption(optionName).discountPriceLabel());
    }

    getSelectedRentals() {
        return this.getElementValue(this.rentalSelectedNumber());
    }

    getSelectedCurrency() {
        return this.getElementValue(this.currencyDropdown());
    }

    //endregion

    //region interaction

    navigate() {
        browser.url('/pricing.html');
    }

    setRentalsNumber(rentalsNo: number) {
        const width = this.rentalSliderContainer().getSize('width');
        const pixelsToMove = this.calculatePixelsFromWidth(width, rentalsNo);
        this.dragAndDropElement(this.rentalSlider(), pixelsToMove, 0);
    }

    setPeriodOption(option: PeriodOption) {
        this.clickElement(this.periodOption(option));
    }

    changeCurrency(option: CurrencyOption) {
        this.currencyDropdown().selectByAttribute('value', option);
    }

    //endregion

    //region helpers

    private calculatePixelsFromWidth(width: number, rentalsNo: number) {
        const errorMargin: number = 4;
        return (( width * rentalsNo / 100) + errorMargin);
    }

    //endregion

}
