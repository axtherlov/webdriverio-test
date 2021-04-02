export class ContactDto {
    name: string;
    phone: string;
    email: string;
    guests: string;
    arrivalDate: string;
    departureDate: string;
    comment: string;

    constructor(name: string, phone: string, email: string,
                guests: string, arrivalDate: string,
                departureDate: string, comment: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.guests = guests;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.comment = comment;
    }
}
