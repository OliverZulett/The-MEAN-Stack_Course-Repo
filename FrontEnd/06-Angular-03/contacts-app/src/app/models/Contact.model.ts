import { IContact } from './Contact.interface';

export class Contact implements IContact {
    id: string;
    firstName: string;
    firstSurname: string;
    cellPhone: number;
    email: string;
    secondName: string;
    secondSurname: string;
    phone: number;
    adress: string;
    webSite: string;
    facebook: string;
    twitter: string;
    github: string;
    instagram: string;
    notes: string;
    birthday: Date;
    image: string;
    nick: string;

    constructor(
        firstName: string,
        cellPhone: number,
        email?: string,
        firstSurname?: string,
        secondName?: string,
        secondSurname?: string,
        phone?: number,
        adress?: string,
        webSite?: string,
        facebook?: string,
        twitter?: string,
        github?: string,
        instagram?: string,
        notes?: string,
        birthday?: Date,
        image?: string,
        nick?: string
    ) {
        this.id =
            this.firstName = firstName;
        this.cellPhone = cellPhone;
        this.firstSurname = firstSurname || '';
        this.email = email || '';
        this.secondName = secondName || '';
        this.secondSurname = secondSurname || '';
        this.phone = phone || 0;
        this.adress = adress || '';
        this.webSite = webSite || '';
        this.facebook = facebook || '';
        this.twitter = twitter || '';
        this.github = github || '';
        this.instagram = instagram || '';
        this.notes = notes || '';
        this.birthday = birthday || new Date('0000-0-00');
        this.image = image || '';
        this.nick = nick || '';
    }

}
