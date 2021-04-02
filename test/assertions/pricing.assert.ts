import {PricingPage} from "../pages/pricing.page";

export class PricingAssert {

    private pricingPage: PricingPage;
    constructor(pricingPage: PricingPage) {
        this.pricingPage = pricingPage
    }

    regularPricing(expectedStarterPrice: string, expectedProfessionalPrice: string, expectedUltimatePrice: string) {
        const starter = this.pricingPage.getCurrentPrice('Starter')
        const professional = this.pricingPage.getCurrentPrice('Professional')
        const ultimate = this.pricingPage.getCurrentPrice('Ultimate')

        expect(starter).toBe(expectedStarterPrice, 'Pricing - Starter current price');
        expect(professional).toBe(expectedProfessionalPrice, 'Pricing - Professional current price');
        expect(ultimate).toBe(expectedUltimatePrice, 'Pricing - Ultimate current price');
    }

    discountPricing(expectedStarterPrice: string, expectedProfessionalPrice: string, expectedUltimatePrice: string) {
        const starter = this.pricingPage.getDiscountPrice('Starter')
        const professional = this.pricingPage.getDiscountPrice('Professional')
        const ultimate = this.pricingPage.getDiscountPrice('Ultimate')

        expect(starter).toBe(expectedStarterPrice, 'Pricing - Starter discount price');
        expect(professional).toBe(expectedProfessionalPrice, 'Pricing - Professional discount price');
        expect(ultimate).toBe(expectedUltimatePrice, 'Pricing - Ultimate discount price');
    }

    selectedRental(expectedRentalNumber: string) {
        const rental = this.pricingPage.getSelectedRentals();
        expect(rental).toBe(expectedRentalNumber, 'Pricing - Selected Rental');
    }

    selectedCurrency(expectedCurrency: string) {
        const currency = this.pricingPage.getSelectedCurrency();
        expect(currency).toBe(expectedCurrency, 'Pricing - Selected Currency');
    }

}
