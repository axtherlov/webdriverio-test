import {BasePage} from './base/base.page';
import {ContactDto} from '../model/contact.dto';
import {MenuPage} from "./menu.page";

export class ContactPage extends BasePage {

    private menu: MenuPage;
    constructor() {
        super();
        this.menu = new MenuPage();
    }

    //region locators

    private input(inputName: string) {
        return  {
            control: () => {
                return browser.$(this.inputContainer(inputName));
            },
            mandatoryError: () => {
                return browser.$(`${this.inputContainer(inputName)}//parent::div/div`);
            }
        };
    }

    private textArea(inputName: string) {
        return  {
            control: () => {
                return browser.$(this.textAreaContainer(inputName));
            },
            mandatoryError: () => {
                return browser.$(`${this.textAreaContainer(inputName)}//parent::div/div`);
            }
        };
    }

    private contactLabel() {
        return browser.$('.content .ui.header');
    }

    private nameInput() {
        return this.input('name').control();
    }

    private phoneInput() {
        return this.input('phone').control();
    }

    private emailInput() {
        return this.input('email').control();
    }

    private guestsInput() {
        return this.input('guests').control();
    }

    private arrivalDate() {
        return browser.$('input[placeholder="Arrival"]');
    }

    private departureDate() {
        return browser.$('input[placeholder="Departure"]');
    }

    private commentInput() {
        return this.textArea('Comment').control();
    }

    private sendButton() {
        return browser.$(`//button[text()='Send']`);
    }

    private message() {
        return browser.$('.message .content p');
    }

    private inputContainer(inputName: string) {
        return `//input[@name='${inputName}']`;
    }

    private textAreaContainer(inputName: string) {
        return `//textarea[@placeholder='${inputName}']`;
    }

    //endregion

    //region getter

    getNameMandatoryError() {
        return this.getElementText(this.input('name').mandatoryError());
    }

    getPhoneMandatoryError() {
        return this.getElementText(this.input('phone').mandatoryError());
    }

    getEmailMandatoryError() {
        return this.getElementText(this.input('email').mandatoryError());
    }

    getCommentMandatoryError() {
        return this.getElementText(this.textArea('Comment').mandatoryError());
    }

    getMessage() {
        return this.getElementText(this.message());
    }

    getName() {
        return this.getElementValue(this.nameInput());
    }

    getPhone() {
        return this.getElementValue(this.phoneInput());
    }

    getEmail() {
        return this.getElementValue(this.emailInput());
    }

    getGuests() {
        return this.getElementValue(this.guestsInput());
    }

    getArrivalDate() {
        return this.getElementValue(this.arrivalDate());
    }

    getDepartureDate() {
        return this.getElementValue(this.departureDate());
    }

    getComment() {
        return this.getElementValue(this.commentInput());
    }

    //region

    //region interaction

    navigate() {
        browser.url('/contact.html');
    }

    clickSendButton() {
        this.clickElement(this.sendButton());
    }

    fillContactForm(contact: ContactDto) {
        this.setElementValue(this.nameInput(), contact.name);
        this.setElementValue(this.phoneInput(), contact.phone);
        this.setElementValue(this.emailInput(), contact.email);
        this.setElementValue(this.guestsInput(), contact.guests);
        this.setElementValueJs(this.arrivalDate(), contact.arrivalDate);
        this.setElementValueJs(this.departureDate(), contact.departureDate);
        this.setElementValue(this.commentInput(), contact.comment);

        this.clickElement(this.contactLabel());
    }

    saveContactForm(contact: ContactDto) {
        this.fillContactForm(contact);
        this.sendForm();
    }

    sendForm() {
        this.clickElement(this.sendButton());
    }

    //endregion
}

