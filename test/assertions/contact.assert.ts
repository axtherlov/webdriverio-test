import {ContactPage} from '../pages/contact.page';
import {ContactDto} from "../model/contact.dto";

export class ContactAssert {

    private contactPage: ContactPage;
    constructor(contactPage: ContactPage) {
        this.contactPage = contactPage
    }

    nameMandatoryError(expectedError: string) {
        const error = this.contactPage.getNameMandatoryError();
        expect(error).toBe(expectedError, 'Contact - Name mandatory error');
    }

    phoneMandatoryError(expectedError: string) {
        const error = this.contactPage.getPhoneMandatoryError();
        expect(error).toBe(expectedError, 'Contact - Phone mandatory error');
    }

    emailMandatoryError(expectedError: string) {
        const error = this.contactPage.getEmailMandatoryError();
        expect(error).toBe(expectedError, 'Contact - Email mandatory error');
    }

    commentMandatoryError(expectedError: string) {
        const error = this.contactPage.getCommentMandatoryError();
        expect(error).toBe(expectedError, 'Contact - Comment mandatory error');
    }

    message(expectedMessage: string) {
        const message = this.contactPage.getMessage();
        expect(message).toBe(expectedMessage, 'Contact - Message');
    }

    contactForm(contactDto: ContactDto) {
        const name = this.contactPage.getName();
        const phone = this.contactPage.getPhone();
        const email = this.contactPage.getEmail();
        const guests = this.contactPage.getGuests();
        const arrival = this.contactPage.getArrivalDate();
        const departure = this.contactPage.getDepartureDate();
        const comment = this.contactPage.getComment();

        expect(name).toBe(contactDto.name, 'Contact - Name');
        expect(phone).toBe(contactDto.phone, 'Contact - Phone');
        expect(email).toBe(contactDto.email, 'Contact - Email');
        expect(guests).toBe(contactDto.guests, 'Contact - Guests');
        expect(arrival).toBe(contactDto.arrivalDate, 'Contact - Arrival');
        expect(departure).toBe(contactDto.departureDate, 'Contact - Departure');
        expect(comment).toBe(contactDto.comment, 'Contact - Comment');
    }
}
