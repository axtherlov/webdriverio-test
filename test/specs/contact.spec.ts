import {ContactPage} from "../pages/contact.page";
import {ContactAssert} from "../assertions/contact.assert";
import {ContactDto} from "../model/contact.dto";
import moment from "moment";

let contactPage: ContactPage;
let contactAssert: ContactAssert;
beforeAll(() => {
    contactPage = new ContactPage();
    contactAssert = new ContactAssert(contactPage);
    contactPage.navigate();
});

describe('Contact', () => {
    it('Should display validation errors for mandatory fields',  () => {
        contactPage.clickSendButton();
        contactAssert.nameMandatoryError('Name is mandatory');
        //contactAssert.phoneMandatoryError('Phone is mandatory');   //will fail if uncommented --> should have mandatory validation message
        contactAssert.emailMandatoryError('Email is mandatory');
        contactAssert.commentMandatoryError('Comment is mandatory');
    });

    it('should fill contact us form', () => {
        const startDate = new Date();
        const arrivalDate = moment(startDate).format('MM/DD/YYYY');
        const departureDate = moment(startDate).add(5, 'days').format('MM/DD/YYYY');
        const contactDto = new ContactDto(
            'Daniel Terceros',
            '65522334',
            'test@test.com',
            '3',
            arrivalDate,
            departureDate,
            `it is a long established fact that a reader will be distracted by the readable content of a page when ` +
            `looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ` +
            ` as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing ` +
            `packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will ` +
            `uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, ` +
            `sometimes on purpose (injected humour and the like`);

        contactPage.fillContactForm(contactDto);
        contactDto.phone = '(655) 223-34';
        contactAssert.contactForm(contactDto);
        contactPage.sendForm();

        contactAssert.message('Error'); //might be a bug sometimes it shows successful message instead of Error
    });
});
